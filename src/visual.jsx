import React,{Component} from 'react';
import SimpleMenu from './Components/Menu';
import {Grid,Button,makeStyles, Typography} from '@material-ui/core';
import Bar from './Components/Charts/Charts';

//should render random numbers even onpress

export default class Visual extends Component {
  constructor(props){
    super(props);

    this.state={
      array:[],
    };
  }

  componentDidMount(){
    this.resetArray(); 
  }

  

  resetArray() {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(rand(5, 730));
    }
     this.setState({array});
  }

  
   

  render() {
    const {array} = this.state;
    return (
      <div>
        <SimpleMenu/>
        <Bar data={array}/>
        <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
           >{value}</div>
        ))}
        <Button color="secondary">Reset Array</Button> 
      </div>
      </div>
    )
  }

}
  
function rand (min, max)  {
        let randomNum = Math.random() * (max - min) + min;
        return Math.floor(randomNum);
      }
  

  

 

   
      
     
   
