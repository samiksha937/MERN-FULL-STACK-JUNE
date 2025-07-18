const user={
name:'samiksha',
email:'samiksha8273@gmail.com',
password:'dbhbdh398383883',
age:19
};
console.log(user.name);
console.log(user.age);
console.log(user['name']);
console.log(user.password);// dot notation
console.log(user['password']);//brackket notation
user.name='genius';//changing the value
console.log(user);
user.course='mern stack';//inserting new pair of key-value
console.log(user);

user.city='lucknow';
console.log(user);

delete user.password;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let smartphone={
    model:'redmiactiv 9a',
    price:'12,999/-',
    RAM:'4/64gb',
    color:['blue','purple','green',[1,2,3,4,5,6,7,8,9,0]]
}
console.log(smartphone);
console.log(smartphone.color[1]);
console.log(smartphone.color[3][8]);
