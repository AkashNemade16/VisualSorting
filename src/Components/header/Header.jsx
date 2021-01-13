import React from 'react';
import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@material-ui/core';
import SimpleMenu from '../Menu';


const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    
  }); 


  
   class Header extends React.Component{

      render(){
       
        const {classes} = this.props; 
          return (
            <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor:"grey"}}  >
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                VisualSorting
                </Typography>
               <SimpleMenu/>
            
            </Toolbar>
            </AppBar>
        </div>
          )
          }
      }
  
      export default withStyles(useStyles)(Header);