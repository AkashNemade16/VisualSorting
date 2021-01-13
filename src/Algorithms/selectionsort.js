

const numbers = [8,5,2,9,6,5,3]

function selection(array){
    for(i=0;i<array.length;i++){
        let min = i;
        let minValue = array[i];
        for(j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min = j;
            }
            
        }array[i]= array[min];
        array[min] = minValue;

         
       
    } return array;
}

console.log(selection(numbers));