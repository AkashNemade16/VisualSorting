function QuickSort(array){
partition(array,0,array.length-1);
    
}

function partition(array, startIdx,endIdx){
    if(startIdx >= endIdx)return;
        let Pivot = startIdx;
        let leftIdx = startIdx + 1;
        let rightIdx = endIdx;
        while(leftIdx <= rightIdx){
        while(array[leftIdx]>=array[Pivot]&&array[rightIdx]<=array[Pivot]){
            swap(array[leftIdx],array[rightIdx],array)
        }
        if(array[leftIdx]<array[Pivot])leftIdx++;
        if(array[rightIdx]<array[Pivot])rightIdx++;
    }
    swap(array[Pivot],array[rightIdx],array);

    const smallSubarray = rightIdx - 1 - startIdx < endIdx - (rightIdx +1);
    if(smallSubarray){
        partition(array,startIdx,rightIdx-1);
        partition(array,rightIdx+1,endIdx);

    }else{
        partition(array,rightIdx+1,endIdx);
        partition(array,startIdx,rightIdx-1);
    }
}

function swap(a,b,array){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

//create random 100 numbers
var a = [];
for(var i=0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}