arr =[2,3,4,5]
function rotate(arr,value_of_cyclic_rotation){
    let i = 0 
    while(i  <value_of_cyclic_rotation){
        for(let i = 0; i<arr.length-1; i++){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
    
        }
        i++
    }
    console.log(arr)
}
rotate(arr,3)