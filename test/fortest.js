// // GetVowels
// const text = "Hello World";

// function getVowels(text){
//     const vowels = 'aeiouyAEIOUY';
//     let result='';
//     for (let char of text){
//         if(vowels.includes(char)){
//             result += char;
//         }
//     }
//     return result;
// }
// console.log(getVowels(text));












// // WITH MAP
// const arr= [4,2,5,1];

// const res = arr.map((num,
// index) => num * index);

// console.log(res);










// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Введите имя: ', (answer) => {
//   console.log(`Привет, ${answer}!`);
//   rl.close();
// });









// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Введите текст: ', (text) => {
//   console.log(text.toUpperCase());
//   rl.close();
// });






// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Введите текст: ', (text) => {
//     const result = text[0].toUpperCase() + text.slice(1);
//     console.log(result);
//     rl.close();
//   });







//   const readline = require('readline');

//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   rl.question('Введите текст: ', (text) => {
//     const result = text.split(' ')
//       .map(word => word[0].toUpperCase() + word.slice(1))
//       .join(' ');
//     console.log(result);
//     rl.close();
//   });
  
//   // "hello world" → "Hello World"







//   const s = "Hello World";
// //          01234567891011  ← индексы

// s.slice(0, 5)    // "Hello"       — с 0 по 4
// s.slice(6)       // "World"       — с 6 до конца
// s.slice(1)       // "ello World"  — с 1 до конца
// s.slice(0, 1)    // "H"           — только первый символ
// s.slice(-5)      // "World"       — последние 5 символов







