//   dates

let myDate =new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate =new Date(2024,0,7,5,3)

// let myCreatedDate =new Date(2024,0,7)

let myCreatedDate =new Date("2025-01-22")
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.gatDay()} and the time`

newDate.toLocaleString('dafault',{weekday: "long",})