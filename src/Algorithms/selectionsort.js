function selection(array){
    for(let i=0;i<array.length;i++){
        let min = i;
        let minValue = array[i];
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min = j;
            }
            
        }array[i]= array[min];
        array[min] = minValue;

         
       
    } return array;
}

const a = [];
for(var i=0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}


console.log(selection(a));