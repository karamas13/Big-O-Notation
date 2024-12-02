//Binary Search Algorithm that has O(logn) time complexity

let arr = [];
let start = 0;

let target = 145;

for (let i = 1; i <= 1024; i++) {
    arr.push(i)
    //console.log(arr);
}

let end = arr.length - 1; 

function binarySearch(arr, start, end, target) {
    console.log(arr.slice(start, end));

    if (start > end) return false;
    
    let midIndex = Math.floor((start + end) / 2);
    
    if (arr[midIndex] === target) return true;
    
    if (arr [midIndex] > target) return binarySearch(arr, start, midIndex - 1, target);
    else return binarySearch(arr, midIndex + 1, end, target)
}

binarySearch(arr, start, end, target);
