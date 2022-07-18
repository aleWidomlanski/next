import { FC, useContext, useMemo, useState } from 'react';
import { List, Paper } from "@mui/material"
import { EntryStatus } from '../../interfaces';
import { EntriesContext } from '../../context/entries';
import { EntryCard } from "./"
import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({status}) => {

const {entries} = useContext(EntriesContext)

const [counter, setCounter] = useState(0)

const onAdd = () => {
  setCounter(counter + 1)
}

//le estoy diciendo que memorice lo que retorna la función y que se vuelva a ejecutar el useMemo cuando cambie el entries en este caso
const entriesByStatus = useMemo(()=>entries.filter((entry)=> entry.status === status), [entries])

return (
   <>
    <div className={styles.container}>
        <Paper sx={{height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding:'1px 5px'}}>
            <List sx={{opacity:1}}>
                {entriesByStatus.map((e)=> {
                  return <EntryCard key={e._id} entry={e}/>
                })}
            </List>
        </Paper>
    </div>
    <button onClick={onAdd}>{counter}</button>
    </>
  )
}
