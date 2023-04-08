import React from 'react';
import { observer } from 'mobx-react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const NavBar = observer(({ store }) => {
  const handleLogout = () => {
    console.log('test')
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
});

export default NavBar;
