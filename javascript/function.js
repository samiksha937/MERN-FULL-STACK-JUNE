function add(a,b)
{
   var c=a+b;
    console.log(c);  
}
add(34,76);
// console.log(c);//by using var datatype we can make variable local from global,
// let is block scoped,var is function scoped,const is block but can't be assigned.

const avgnum=function(a,b,c)
{
    const avg=(a+b+c)/3;
    // console.log(avg);
 return avg;
}
 const result = avgnum(10,10,10);  // undefined function multiplied with anything is NaN.if taken only two inputs... 
console.log(result);

console.log();







// arrow function
const factorial=(n) =>
{
    let f=1;
    
    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}
const fact=factorial(5);
console.log(fact);
