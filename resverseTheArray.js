//reversethearray
arr=[1,4,6,5,3,2]
console.log(arr)
for(let s = 0, e = arr.length-1; s<e ; s++,e--){
    let temp = arr[s]
    arr[s] = arr[e]
    arr[e] =temp
}
console.log(arr);