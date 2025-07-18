const arr=[4,7,8,3,1,5];

for(let i=0;i<arr.length;i++){
console.log(arr[i]);
}

console.log('-----for of loop-------');

for(let n of arr){
    console.log(n);   
}

console.log('-------for each function------');
 //callback function
arr.forEach( (a,b,c) => {
    console.log(a,b,c); 
});

//sq.
 arr.forEach( (n) => {
console.log(n*n);
 });
 console.log();
 
 //odd
 arr.forEach( (n) => {
   if(n%2!==0){
 console.log(n);
   }
 })

 console.log("------ array--------");
 
// const arr=[4,7,8,3,1,5];
 //WAP to create new array conataining only even numbers.
//WAP to create a new array containing cube of each element.
let array=[];//empty array
 arr.forEach( (n) => {
if(n%2===0){
    array.push(n);
    console.log(array);

}
})

// const arr=[4,7,8,3,1,5];
console.log("-----==------");


let ar=[];
arr.forEach( (n)=>{
  // console.log(n**3);
  ar.push(n**3);
  console.log(ar);
  
})
