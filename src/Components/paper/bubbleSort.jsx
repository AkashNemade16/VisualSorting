import React from 'react';
import {Paper,makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

export default function Bubble(){
    const classes = useStyles();

    return(
        <div className = {classes.root}>
            <Paper  elevation={3}/>
        </div>
    )
}
