let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

// create a set bcz set do not have repeated values
let unionset = new Set([...arr1,...arr2])
const union_arr = Array.from(unionset)
console.log(union_arr)


function intersection(arr1, arr2){
    let inter_arr = []
    for(i of arr1){
        for( j of arr2){
              if( i == j){
                inter_arr.push(i)
            }
        }

    }
    console.log(inter_arr);
}
intersection(arr1,arr2)