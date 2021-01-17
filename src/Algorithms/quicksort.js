function quickSort(array) {
	//8 5 2 9 5 6 3
	partition(array,0,array.length-1);
	return array;
}

function partition(array, startIdx, endIdx){
	if(startIdx>=endIdx)return;
	let pivot = startIdx;//first num in array
	let leftIdx = startIdx+1;//2nd num 
	let rightIdx = endIdx;//last num
	while(rightIdx>=leftIdx){
		if(array[leftIdx]>array[pivot]&&array[rightIdx]<array[pivot]){
			swap(leftIdx,rightIdx,array);
		}
		if(array[leftIdx]<=array[pivot])leftIdx++;
		if(array[rightIdx]>=array[pivot])rightIdx--;
		}
	swap(pivot,rightIdx,array);
	const leftsmallerSubarray = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
	if(leftsmallerSubarray){
		partition(array,startIdx,rightIdx - 1);
		partition(array,rightIdx+1,endIdx);
		}
	else{
		partition(array,rightIdx+1,endIdx);
		partition(array,startIdx,rightIdx - 1);
	}
}

function swap(a,b,array){
	let temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}


//create random 100 numbers
const a = [];
for(var i=0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
}

console.log(quickSort(a));