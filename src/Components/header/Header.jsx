import React from 'react';
import {makeStyles,
AppBar,
Toolbar,
Typography,
Button,

} from '@material-ui/core';

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


export default function Header(){
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"gray"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            VisualSorting
          </Typography>
          <Button color="inherit">bubbleSort</Button>
           <Button color="inherit">heapSort</Button>
            <Button color="inherit">insertionSort</Button>
             <Button color="inherit">mergeSort</Button>
              <Button color="inherit">quickSort</Button>
               <Button color="inherit">selectionSort</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

