arr = [1, 5, 8, 10]
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

function minimise_difference(arr,val_of_k){
    
    for(let i =0; i<arr.length; i++){
        if( arr[i]<=val_of_k){
            arr[i]+=val_of_k
        }
        else{
            arr[i]-=val_of_k
        }
    }
    Arr =sort(arr)
    let max  = Arr[Arr.length-1]
    let min = Arr[0]
    
    let diff = max- min;
   console.log(arr);
   console.log(diff);
    
}
minimise_difference(arr,2)