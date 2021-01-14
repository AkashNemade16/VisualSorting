import React from 'react';
import {Grid, Paper, styles} from '@material-ui/core';
import BubbleSort from './Algorithms/bubbleSort'


  

export default class Visual extends React.Component{
    
   render(){
      
       return(
           <div className='visual'>
               <Grid container spacing={3}>
                    <BubbleSort values={[6,9,4,2,1]}/>
               </Grid>
           </div>
       )
   }
}