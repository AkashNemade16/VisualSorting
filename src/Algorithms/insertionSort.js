export function Insertion(array){
    for(let i=1;i<array.length;i++){
        let j = i;
        while(j>0&&array[j]<array[j-1]){
            let temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
            j-=1;
        }
    }return array;
}

const a = [];
for(var i=0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}

console.log(Insertion(a));