// Find_the_Kth_max_and_min_element_of_an_array.js
arr=[7, 10, 4 ,3 ,20 ,15]
function sort_Des(arr){
    for(let i = 0; i<arr.length; i++){
        let temp =arr[i]
        for(let j = 0; j<arr.length; j++){
            if( temp > arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp 
            }
            
        }
    }
    return arr
}
function sort_Aes(arr){
    for(let i = 0; i<arr.length; i++){
        let temp =arr[i]
        for(let j = 0; j<arr.length; j++){
            if( temp < arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp 
            }
            
        }
    }
    return arr
}

function Kth_max(arr, k){
    
    sort_arr = sort_Des(arr)
    console.log(`Kth ${k} maximum element: ${sort_arr[--k]}`)
}
function Kth_min(arr, k){
    sort_arr = sort_Aes(arr)
    console.log(`Kth ${k} maximum element: ${sort_arr[--k]}`)
}
Kth_max(arr,3)