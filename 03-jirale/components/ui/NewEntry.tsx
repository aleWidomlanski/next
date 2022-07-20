
import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material'
import { EntriesContext } from '../../context/entries';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/Add';

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [touch, setTouch] = useState(false)

    const {addNewEntry}= useContext(EntriesContext)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if(inputValue.length === 0) return;
        addNewEntry(inputValue)
        setIsAdding(false)
        setInputValue('')
        setTouch(false)
    }


    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {isAdding ?
                <>
                    <TextField 
                    fullWidth sx={{ marginTop: 2, marginBottom: 1 }} 
                    placeholder='Nueva entrada' 
                    autoFocus 
                    multiline 
                    label='Nueva Entrada'
                    helperText={inputValue.length <= 0 && touch && 'Ingrese un valor'}
                    error={inputValue.length <= 0 && touch}
                    value={inputValue} 
                    onChange={onTextFieldChanged}
                    onBlur={()=> setTouch(true)}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant='text'
                            onClick={()=> setIsAdding(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant='outlined'
                            color='secondary'
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}
                        >
                            Guardar
                        </Button>
                    </Box>
                </> :
                <Button
                    startIcon={<AddIcon />}
                    fullWidth
                    variant='outlined'
                    onClick={()=> setIsAdding(true)}
                >
                    Agregar Tarea
                </Button>
            }
        </Box>
    )
}
