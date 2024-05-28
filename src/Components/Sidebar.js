import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from '@mui/material'; // Não há necessidade de importar makeStyles

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
    >
      <div sx={{ height: '64px' }} />
      <List>
        <ListItem button component={NavLink} to="/home">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/user-management">
          <ListItemIcon><PeopleAltIcon /></ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}

export default Sidebar;

