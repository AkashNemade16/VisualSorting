import React, { Component} from 'react';
import {Grid,Button, Typography } from '@material-ui/core';

// import Insertion from './Algorithms/insertionSort';
// import Quick from './Algorithms/quicksort';
// import selection from './Algorithms/selectionsort';


  

export default class Visual extends Component{
     constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

    

    resetArray(){
      const array=[];
      for(let i=0;i<100;i++){
        array.push(rand(5,1000));
      }
      this.setState({array});
    }
    render(){

       const {array} = this.state;

      return(
        
      
        <div className='visual'>
          
            <Grid container spacing={3}>
               <h1>hi</h1>
            </Grid>
                      
             <Button onClick={() => this.resetArray()}>Reset</Button>
        </div>
      )
    }
    
}
  
function rand  (min, max)  {
        let randomNum = Math.random() * (max - min) + min;
        return Math.floor(randomNum);
      }
   
      
     
   
