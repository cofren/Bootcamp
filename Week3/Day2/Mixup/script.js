let s1 = "Hello";
let s2 = "You";
let n1 = s1.split('');
let n2 = s2.split('');
console.log(n1);
console.log(n2);
n1.splice(0,1,"Y");
n2.splice(0,1,"D");
console.log(n1);
console.log(n2);
let t=n1.concat(' ',n2);
console.log(t);
t=t.toString('');
t=t.replaceAll(',',' ');

console.log(t);