//binary search using a for loop

function binarySearch(arr, val){
    let start = 0
    let end = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        let middle = Math.floor((start + end)/2)
        if(arr[i] === val){ 
            return i;
        } else if (arr[middle] < val) {
            start = middle+1;
        } else {
            end = middle -1;
        }
    }
  return -1
  }

  // binary search using a while loop

  function binarySearch(arr, val){
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end)/2)
        if(arr[middle] === val){ 
            return middle;
        } else if (arr[middle] < val) {
            start = middle+1;
        } else {
            end = middle -1;
        }
    }
  return -1
  }