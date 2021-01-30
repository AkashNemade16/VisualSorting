import React,{useState,useEffect} from 'react';
import SimpleMenu from './Components/Menu';
import {Grid,Button,makeStyles, Typography} from '@material-ui/core';
import Bar from './Components/Charts/Charts';

//should render random numbers even onpress
export default function Visual(){
  
  const [array,setArray] = useState();
  console.log(array);
  useEffect(()=>{
   resetArray();
  },[])

  function resetArray() {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(rand(5, 730));
    }
     setArray({array});
  }

  
  // const returnedArray = Array.from(array);
  // console.log(returnedArray);
  return (
    <div className="visual">
      
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <SimpleMenu />
          
        <Bar data={array}/>
        
            
         <Button variant="contained" color="primary" onClick={()=>resetArray()}>
        Reset Array
      </Button>

      </Grid>
    </div>
  );
}

 

function rand  (min, max)  {
        let randomNum = Math.random() * (max - min) + min;
        return Math.floor(randomNum);
      }
   
      
     
   
