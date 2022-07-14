import { FC, useContext } from 'react';
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

return (
    <div className={styles.container}>
        <Paper sx={{height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding:'1px 5px'}}>
            <List sx={{opacity:1}}>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
            </List>
        </Paper>
    </div>
  )
}
