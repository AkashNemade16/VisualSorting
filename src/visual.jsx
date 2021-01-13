import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import visualGrid from './Components/grid';
  

export default class Visual extends React.Component{
    
   render(){
      
       return(
           <div className='visual'>
               <Grid container spacing={3}>
                    <Grid item xs>
                       
                    </Grid>
               </Grid>
           </div>
       )
   }
}