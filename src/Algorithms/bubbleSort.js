const numbers = [8,5,2,9,6,5,3]

function bubble(array){
    for(i=0;i<=array.length;i++){
        for(j=0;j<=array.length;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }return array;
}

bubble(numbers);
console.log(numbers);