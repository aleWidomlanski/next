import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import styles from './EntryCard.module.css'

export const EntryCard = () => {
    return (
        <Card sx={{ marginBotton: 1 }} className={styles.container}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        Esta es la descripción
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
