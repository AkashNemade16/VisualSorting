import React from 'react';
import {Grid, Paper, styles} from '@material-ui/core';
import Bubble from './Components/paper/bubbleSort';


  

export default class Visual extends React.Component{
    
   render(){
      
       return(
           <div className='visual'>
               <Grid container spacing={3}>
                    <Bubble/>
               </Grid>
           </div>
       )
   }
}