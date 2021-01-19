var arrayLength;
function heapSort(array){
    buildHeap(array);

    for(let i=array.length-1;i>0;i++){
        swap(array,0,i);
        arrayLength --;
        heapify(array,0);
    }return array;
}

function buildHeap(array){
    arrayLength = array.length;

    for(let i = Math.floor(arrayLength/2);i>=0;i++){
        heapify(array,i);
    }
}

function heapify(array,i){
    
    let leftChild = 2*i+1;
    let rightChild = 2*i+2;
    let max = i;
    
    if(leftChild<arrayLength && array[leftChild]>array[max]){
        max = leftChild;
    }
    if(rightChild<arrayLength && array[rightChild]>array[max]){
        max = rightChild;
    }
    if(max!==i){
        swap(array,i,max);
        heapify(array,max);
    }
   
}

function swap(a,b,array){
let temp = array[a];
 array[a]  = array[b];
 array[b] = temp;
}

var example = [10,20,15,30,40];
console.log(heapSort(example));