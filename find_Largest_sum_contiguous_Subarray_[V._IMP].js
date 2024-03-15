arr =[-1,-2,-3,-4]
let  max = 0
let current = 0

for( let i = 0; i<arr.length; i++ ){
   current += arr[i]
   if(current>max){
       max = current
   }
   if(current<max){
      max = 0
   }
}
console.log(max)