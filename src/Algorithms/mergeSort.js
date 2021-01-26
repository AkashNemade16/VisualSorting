export function MergeSort(array){
    if(array.length<=1){return array}
    const midIdx = Math.floor(array.length/2);//midpoint of  an array
    const left = array.slice(0,midIdx);
    const right = array.slice(midIdx);
    return Merge(MergeSort(left),MergeSort(right));
}

function Merge(left,right){
    const sortedArray = new Array(left.length+right.length);
    let i = 0;
    let j = 0;
    let k = 0;
    while(i<left.length && j<right.length){ 
        if(left[i]<=right[j]){
            sortedArray[k++] = left[i++];
        }
        else{
            sortedArray[k++] = right[j++];
        }
    }
    while(i<left.length){
        sortedArray[k++] = left[i++];
    }
    while(j<right.length){
        sortedArray[k++] = right[j++];
    }
    return sortedArray;

}

console.log(MergeSort([8,5,9,6,3,2]));