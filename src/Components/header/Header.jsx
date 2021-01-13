import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core';
import MenuListComposition from '../menu';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    
  }));

  
  export default function Header() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:"grey"}}  >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              VisualSorting
            </Typography>
            {/* <Button color="inherit">Algorithms</Button> */}
            <MenuListComposition/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
