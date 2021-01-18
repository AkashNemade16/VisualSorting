
function heapSort(array){

}

function buildHeap(array){
    let i = 0;
    let leftChild = [2*i];
    let rightChild = [2*i+1];
   
    let parent = [i/2];
  
   for(let i=1;i<array.length;i++){
    
    if(array[leftChild]>array[parent]){
        swap(leftChild,parent,array);
    }
    else if(array[rightChild]>array[parent]){
        swap(rightChild,parent,array);
    }else{
        swap(leftChild,parent,array);
    }

   }
   
   
}

function swap(a,b,array){
let temp = array[a];
 array[a]  = array[b];
 array[b] = temp;
}

console.log(buildHeap([10,20,15,30,40]));