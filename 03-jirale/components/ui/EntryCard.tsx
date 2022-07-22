import { FC, DragEvent } from "react"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { Entry } from '../../interfaces';
import styles from './EntryCard.module.css'


interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({entry}) => {

    const onDragStart = (event:DragEvent) => {
       event.dataTransfer.setData('text', entry._id)
        //TODO cambiar estado para indicar que estoy haciendo drag
    }

    return (
        <Card sx={{ marginBotton: 1 }} onDragStart={onDragStart} draggable={true} className={styles.container}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent: 'end', paddingRight:2}}>
                    <Typography variant="body2">
                        Hace 30 minutos
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
