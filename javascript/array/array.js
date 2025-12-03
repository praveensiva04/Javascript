// -----Array Methods------
    
    // 1.push🟢
    // 2.pop🟢
    // 3.shift🟢
    // 4.unshift🟢
    // 5.reverse🟢
    // 6.slice🟢
    // 7.splice🟢
    // 8.join🟢
    // 9.split🟢
    // 10.indexof🟢
    // 11.at🟢
    // 12.Concat🟢
    // 13.toString🟢
    // 14.Array.from🟢

// let arrfruits = ['apple','banana','orange','papaya'];

// console.log(arrfruits);

// arrfruits.push('grapes','plum');//push method is used to add the elements in the last index
// console.log(arrfruits);

// arrfruits.pop();// it can't accept arguments
// console.log(arrfruits);

// arrfruits[0] = 'kiwi';//it will replace the element.
// console.log(arrfruits);

// arrfruits.unshift('devil fruit','tomato');// at will add the element in the first index
// console.log(arrfruits);

// arrfruits.shift();// it can't accept arguments
// console.log(arrfruits);

// console.log(arrfruits.find('kiwi'));

// arrfruits.reverse();//it is used to reverse the element in an array.
// console.log(arrfruits);

let age = [22,23,12,23,43,45,33];

// let slicedage=age.slice(1,7);
// console.log('Using slice : '+slicedage);
// console.log(age);

// let splicedage = age.splice(1,5);//it will remove the element of an original array by using start index and the end index.
// console.log('Using splice : '+splicedage);
// console.log(age);

// let myage=age.splice(1,3,'A','B');
// console.log(myage);
console.log(age);

//---------Join----------

console.log(age.join("🟢"));
console.log(age);

let city = "Chengalpattu";
console.log(city);

console.log(city.split(''))

let city2 = "chennai";
let split2 = city2.split('');//split
console.log(split2);
let join2 = split2.join();//reverse
console.log(join2);
let rev2 = split2.reverse();//join
console.log(rev2);


// IndexOf

let arr = ["chennai","delhi","Patna","Thanjavur","Pudukkotai","Trichy","Bangalore"];

console.log(arr.length);//find the length of the array.
console.log(arr.indexOf("Thanjavur"));

// At

console.log(arr.at(-5));

// Concat

let arr2 = "Pattukotai";

console.log(arr.concat(arr2));// it will merge or add the two arrays.
console.log(arr);


// toString

console.log(arr.toString());// it will not accept any arguments.

// Array.from

let isname = 'Praveen';// null, undefined input gives error
console.log(Array.from('rararayacxfyac'));// it converts string into an array, we can pass the variable as arguments.
console.log(isname);






