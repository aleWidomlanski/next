import { useContext } from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Divider } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { UIContext } from '../../context/ui';


const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

  useContext

  const {sideMenuOpen, closeSideMenu} = useContext(UIContext)

  return (
    <Drawer anchor='left' open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{width: 250}}>
      <Box sx={{ padding: '5px 10px' }} >
        <Typography variant='h4' >
          Menú
        </Typography>
        <List>
          {menuItems.map((text, index) => {
            return <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxIcon/> : <MailOutlineIcon/>}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          })}
        </List>
        <Divider/>
        <List>
          {menuItems.map((text, index) => {
            return <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxIcon/> : <MailOutlineIcon/>}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          })}
        </List>
      </Box>
      </Box>
    </Drawer>
  )
}
