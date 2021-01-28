import React, {useState,useEffect} from 'react';
import {Grid,Button, Typography } from '@material-ui/core';
import Bubble from './Algorithms/bubbleSort';
import BarChart from './Components/Charts/Charts';
// import Insertion from './Algorithms/insertionSort';
// import Quick from './Algorithms/quicksort';
// import selection from './Algorithms/selectionsort';


  

const Visual = ({initialArray}) =>{
    const [array,setarray] = useState(initialArray);


   
    function rand(min, max) {
        let randomNum = Math.random() * (max - min) + min;
        return Math.floor(randomNum);
      }

    function resetArray(){
      const array=[];
      for(let i=0;i<100;i++){
        array.push(rand(5,1000));
      }
      setarray(array);
    }

    return(
        <div className='visual'>
            {/* Array:{array} */}
            <Grid container spacing={3}>
                <Typography>
                 
                </Typography>
            </Grid>
            <>
           {
               array.map((value,idx)=>(
                  <div className='akash' key={idx}>
                      {value};
                  </div> 
               ))
           }
            </>
             <Button onClick={resetArray}>Reset</Button>
        </div>
    )
}
    
export default Visual;   
      
     
   
