//  loops file

// for,while,do-while

for(let i=0; i<10; i++)
{
    console.log(i);    
}

//wap to print odd nos. from 23 to 48

for(let i=23;i<=48; i++)
{
    if(i%2!=0)
    {
    console.log(i);   
}
}


console.log("while loop");

let a=10;

while(a<=20)
{
    console.log(a);
    a++;
}


console.log('do-while');
let b=10;
do{
console.log(b);
b++
}
while(b>20);

// wap to reverse a no.
console.log('example to reverse a no.');

let m=43562;
// 26534
let rev=0;

while(m>0)
{
    console.log(n,rev);
    let rem=n%10;
    rev=rev*10+rem;
    n=parseInt(n/10);
}
console.log(n,rev);


