'use strict';
//2.A) Linear search
export const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
export const sortedArray = array.slice().sort();

export function searchLinear(arr, value){
    let searchCount = 0;
    for(let i = 0; i < arr.length; i++){
        searchCount += 1;
        if(arr[i] === value){
            return `Item at ${i} and took ${searchCount} number of searches.`
        }
    }
    return `Took ${searchCount} number of searches and item wans't found.`
}

//2.B) Binary search
export function searchBinary(arr, value, start=0, end=arr.length-1, count=1){
    const i = Math.floor((start + end)/2);
    const item = arr[i];
    if (start > end){
        return 'Item not found'
    }
    if(item === value){
        return `Item at index ${i} and ${count} number of searches .`
    } else if( item < value){
        return searchBinary(arr, value, i+1, end, count+1);
    } else if(item > value){
        return searchBinary(arr, value, start, i-1, count+1);
    }
}