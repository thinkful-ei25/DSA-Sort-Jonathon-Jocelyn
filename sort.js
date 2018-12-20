'use strict'; 

function qSort(arr, start=0, end=arr.length-1){
  if(start >= end){
    return arr;
  }
  const pivot = partitionFunc(arr, start, end);
  qSort(arr, start, pivot-1); 
  qSort(arr, pivot+1, end); 
}

function swap(arr, index1, index2){
  let temp = arr[index1]; 
  arr[index1] = arr[index2]; 
  arr[index2] = temp; 
}

function partitionFunc(arr, start, end){
  //returns pivot position 
  let pivot; 
  pivot= arr[end]; 

  let j = start; 
  for (let i=start; i<end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end, j);
  return j;
}

function findMedian(arr, index, index2, index3){
  let x = arr[index]-arr[index2]; 
  let y = arr[index2]-arr[index3]; 
  let z = arr[index]-arr[index3]; 
  
  if(x*y > 0)return index2; 
  if(x*z > 0)return index3; 
  return index; 
}

function initiateRandomArray(size, range){
  let randomArray = new Array(size);
  for(let i = 0; i < size; i++){
    randomArray[i] = Math.floor(Math.random() * range + 1);
  }
  return randomArray;
}

let randomArray= initiateRandomArray(10, 250);
console.log(randomArray);
// qSort(randomArray);
// console.log(randomArray);
// qSort(dataSet); 

function mergeSort(arr){
  let counter = 0;
  
  if(arr.length <= 1){
    return arr; 
  }

  let middle = Math.floor(arr.length/2); 
  let leftArr = arr.slice(0, middle); 
  let rightArr = arr.slice(middle,arr.length); 
  counter+=1; 
  leftArr = mergeSort(leftArr); 
  rightArr = mergeSort(rightArr); 

  return merge(leftArr, rightArr, arr, counter); 

}

function merge(leftArr, rightArr, array, counter){
  let leftIndex = 0; 
  let rightIndex = 0; 
  let outputIndex = 0; 
  

  while( leftIndex < leftArr.length && rightIndex < rightArr.length){
    counter+=1; 
    if(leftArr[leftIndex] < rightArr[rightIndex]){
      array[outputIndex++] = leftArr[leftIndex++]; 

    }
    else {
      array[outputIndex++] = rightArr[rightIndex++]; 
    }
  }
  //for loops are for iterating through whatever side has remaining values
  for(let i = leftIndex; i<leftArr.length; i++ ){
    array[outputIndex++]=leftArr[i]; 
    counter+=1; 
  }
  for(let i = rightIndex; i<rightArr.length; i++ ){
    array[outputIndex++]=rightArr[i]; 
    counter+=1; 
  }
  console.log(counter); 
  return array; 
}
// let result = mergeSort(randomArray); 

