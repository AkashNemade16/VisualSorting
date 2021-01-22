import React, {useState,useEffect} from 'react';
import {Grid,Button, Typography } from '@material-ui/core';
import Bubble from './Algorithms/bubbleSort';
// import Insertion from './Algorithms/insertionSort';
// import Quick from './Algorithms/quicksort';
// import selection from './Algorithms/selectionsort';


  

const Visual = () =>{
    const [array,setarray] = useState(()=>{
        return null;
    });

    function triggerBubble(){
        setarray(Bubble(rand(1,100)));
    }

    // function generateRandomNum(){
    // const a = [];
    // for(var i=0; i<100; i++){
    // a[i] = Math.floor(Math.random()*100+1);
    // return a;
    // }
    // }
    function rand(min, max) {
        let randomNum = Math.random() * (max - min) + min;
        return Math.floor(randomNum);
      }

    function resetArray(){
      
    }

    return(
        <div className='visual'>
            <Grid container spacing={3}>
                <Button onClick = {triggerBubble}>Bubble</Button>
                <Typography>
                 {array} 
                </Typography>
            </Grid>
        </div>
    )
}
    
export default Visual;   
      
     
   
