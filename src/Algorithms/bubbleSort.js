function Bubble (array)  {
    for(let i=0;i<=array.length;i++){
        for(let j=0;j<=array.length;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }return (array);
  
}


const a = [];
for(var i=0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}


console.log(Bubble(a));
