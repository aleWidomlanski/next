import { FC } from "react"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { Entry } from '../../interfaces';
import styles from './EntryCard.module.css'


interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({entry}) => {
    return (
        <Card sx={{ marginBotton: 1 }} className={styles.container}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        <h2>{entry.description}</h2>
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
