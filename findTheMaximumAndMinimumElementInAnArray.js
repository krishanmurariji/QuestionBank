// Find the maximum and minimum element in an array
arr=[1,4,6,5,3,2]
 
let max = arr[0]
let min = arr[0]
for( let i = 1 ; i<arr.length; i++){
     if(max <arr[i]){
        max = arr[i]
     }
     if(min >arr[i]){
        min = arr[i]
     }
     
}
console.log(`Biggest element is ${max}\n Smallest element is ${min}`)