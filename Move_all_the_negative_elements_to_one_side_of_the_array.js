// Move all the negative elements to one side of the array 
arr=[-1, 2, -3, 4, 5, 6, -7, 8, 9]
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
 console.log(`now Negtive element is on one side ${arr}`)