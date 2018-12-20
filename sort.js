'use strict'; 

function qSort(arr, start=0, end=arr.length-1){
  if(start > end){
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
  if(arr.length >3){
    pivot= findMedian(arr,start,start+1, end);
  }else{
    pivot= arr[start]; 
  }

  swap(arr, pivot, end); 

  let j = start; 
  for (let i=start; i<end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end-1, j);
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
let dataSet='89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'; 
dataSet = parseInt(dataSet.split(' ')); 
console.log('this is'+dataSet); 

// qSort(dataSet); 