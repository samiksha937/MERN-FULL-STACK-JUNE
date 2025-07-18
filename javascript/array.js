arr=[123,'hello',true,null,[1,2,3]]

console.log(arr);
 
console.log(arr[1]);

console.log(arr.length);

const sports=['cricket','badminton','tennis','football']
console.log(sports[2]);
console.log(sports.indexOf('cricket'));
console.log(sports.at(-3));

console.log(sports);
sports[3]='kabaddi';//change the value
console.log(sports);

sports.push('hockey');//adds ot the end of the array. 
console.log(sports);
console.log();

console.log(sports.length);
console.log(sports.push('javelin'));
console.log(sports);

sports.pop(sports);//(pop deletes the element from the last).
console.log(sports);
console.log();
console.log();//to store the popped element

console.log();

let popped=sports.pop(sports);
console.log(popped);
console.log(sports);

sports.unshift('archery');//adds to the beggining of array.
console.log(sports);
sports.shift(sports);// (shift removes from beginning).
console.log(sports);

console.log();

console.log(sports);
console.log(sports.slice(1,3));
console.log();

//if only one input is taken inside bracket it will print whole array including the given value.
console.log(sports);
console.log(sports.slice(-3));
console.log(sports.slice(-4,-1));

console.log();

//splicing
console.log(sports);
// sports.splice(2,1) //first is input another is how many you want to remove.
// console.log(sports);

// sports.splice(2,0 ,'shooting','swimming')
// console.log(sports);

 







