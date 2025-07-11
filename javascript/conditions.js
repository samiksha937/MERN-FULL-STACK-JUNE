num=42;
if (num%2===0){

let message="checking scope of variable if it prints it is GLOBAL";
console.log(message); 

const pi=3.14;
console.log(pi);
// pi=34.56
// cannot reassign value to const variable.

//   for local purpose use let  and print inside block only.


console.log("even");
} else
 {
console.log("odd");
};
// console.log(message);
// console.log(pi);

// WAP to check if user is eligible for dl or not.
const age=20;
if (age>=18)
{
    console.log("dl can be issued.");
}else{
    console.log("dl cannot be issued.");
}


const marks=41;

if(marks<=100 && marks>=80)
{
    console.log("Grade A ");
}else if (marks<80 && marks>=70)
    {
    console.log("Grade B ");
}else if(marks<70 && marks>40)
{
    console.log("Grade C");  
}else{
console.log("Fail");
}
