

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
// let f=0, l=arr.length-1;
let target = 20;
// let ans = -1;
// while(f<=l){

//     let mid = Math.floor((l+f)/2);
//     if(arr[mid] === target) {
//         ans = mid;
//         break;
//     }
//     else if(arr[mid] > target) l = mid - 1;
//     else f = mid + 1;
// }
// if(ans !== -1){
//     console.log(`${ans} : ${arr[ans]}`)
// }else console.log("the target element is not found in the given array");


let err = "index of target element not found"

function BinarySearch(arr, first, last, target){
    if(last < first) return err;
    let mid = Math.floor((first + last)/2)
    if(arr[mid] === target) return mid;
    if(arr[mid] > target) return BinarySearch(arr, first, mid-1, target);
    if(arr[mid]<target) return BinarySearch(arr, mid+1, last, target);
}

console.log(BinarySearch(arr, 0, arr.length-1, target))