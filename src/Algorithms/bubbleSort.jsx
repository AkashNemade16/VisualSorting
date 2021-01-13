import React from 'react';
const numbers = [4,6,9,5,4]
function bubble(array){
    for(let i=0;i<=array.length;i++){
        for(let j=0;j<=array.length;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }return array;
}

export default class BubbleSort extends React.Component{
    constructor(){
        super();
        this.state={
            
        }
    }
    render(){
        return(
           <div>
               
           </div> 
        );
    }
}
