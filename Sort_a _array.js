//sort an array
arr=[1,4,6,5,3,2]
function sort(arr){
  for( let  i = 0 ; i< arr.length; i++){
    let temp = arr[i]
    for( let j = i+1; j< arr.length; j++){
     if(arr[i]>arr[j]){
         temp = arr[i]
         arr[i]= arr[j]
         arr[j] = temp
     }
    }
  }
  return arr
}
sorted_arr= sort(arr)
console.log(sorted_arr)