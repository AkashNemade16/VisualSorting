import { SwipeableDrawer } from "@material-ui/core";

function heapSort(array){

}

function buildHeap(array){
   let i = 0;
   let parent = [i/2];
   let leftChild = [2*i];
   let rightChild = [2*i+1];
   let endIdx = array.length;
   let temp = []
   
   for(i=0;i<endIdx;i++){
       if(array.length===1){
        temp.push(array[i]);
       }
   }
}