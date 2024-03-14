// Find_the_Postition_of_max_and_min_element_of_an_array.js
arr=[1,2,4,5,3,6]
let kmin = 0;
let min = arr[0];
let kmax = 0;
let max = arr[0];

for(let i = 0; i<arr.length; i++){
    if(min > arr[i]){
        min = arr[i]
        kmin = i+1;
    }
    if (max<arr[i]) {
        max = arr[i]
        kmax = i+1
    } 
}
console.log(`Biggest element is ${max} at ${kmax}\nSmallest element is ${min} at ${kmin}`)