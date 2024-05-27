// 'use strict';
// let b = 12;
// console.log(b);

// let answer = prompt( 'как тебя зовут');
// console.log(answer);



// /**
//  * 
//  * @param {*} a 
//  * @param {*} b 
//  * @returns 
//  */
// function foo(a, b){
//     return a + b + 100;
// }



// let a = 'Hello';
// let b = "Hello";


// // number
// let a = 1;
// let b = 3.12;
// // let c = 10/0; ЗАПОМНИ!!! ОНО БУДЕТ РАБОТАТЬ, НО НА СОБЕСЕДОВАНИИ ЭТО МОЖЕТ БЫТЬ НЕ ПРАВИЛЬНО

// let b = '3.14';
// // console.log(typeof b, b);
// b = +b; // -b} b = -b = -3.14
// // console.log(typeof b, b);
// console.log(parseInt(b));
// console.log(parseFloat(b));

// console.log(2e3); // 2000
// console.log(2e-3); // 0.002

// let myData = null;
// if (myData) {}
// myData = {}


// function foo(){
//     'use strict';
// }


// const a = 1 + 5;



// let deg = prompt('Сколько градусов по цельсию?');
// let fr = (9/5) * deg + 32;
// alert("Градусов по фаренгейту " + fr); 


// let admin = "Василий2";
// let name = "Василий1"
// console.log(admin , name);


// let i = 0;
// while (i<6){
//     i++;
//     console.log(i);
    
// }


// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i<3)





// let i = 0

// for (let i = 0; i < 3; i++){ //вар используется только окнов и функцией, цикл его не видит
//     console.log(i);
// }



// while (true){
//     ...
// }

// do {
//     ...
// } while (true);


// for( ; ; ){

// }


// for (let i = 0;; i++){
//     if (i > 10 ) break; // выход из цикла
//     if (i % 2 === 1) continue; // завершение итерации 
//     console.log(i);
// }

// outerLoop: // метка
// for (let a = 0; a < 3; a++){
//     console.log('Upper cycle is running ');
//     for (let b = 0; b < 3; b++) {
//         console.log('Inner cycle is running');
//         if (b >=1) {
//             console.log('Breaking inner cycle');
//             break outerLoop;
//         }
//     }
// }



// // const arr = [1, 6, 8]; // massiv
// // const arr =Array(10); // massiv 2 tipa
// const arr = Array(1, 6, 8);
// // arr.length = 5
// // arr[5] = 6
// console.log(arr); // odnomernie massivi


// let arr = [
//     [1, 5 , 'hi', false], // 0
//     [55, true, 100], // 1
//     [true, 'string',  NaN, 32], // 2
// ];

// console.log(arr[2][1]);


// const arr =  [true, 'string', NaN, 32];

// for (const key in arr) {
//     console.log(key, arr[key]);
// }

// for (const val of arr){
//     console.log(val);
// }


// for (let key = 0; key < arr.length; key++){
//     console.log(key, arr[key]);
// }


// arr.forEach(function (value, index, array ){
//     console.log(value, index, array);
// });

// includes(), map(), reduce(), find() , sort() посмотреть эти методы обязательно!!!!!!!!!!!!!



// const arr =  [true, 'string', NaN, 32];

// console.log(arr.push(12), arr); // Добавляет в конец и вернет длину массива (самые приоритетный метод)
// console.log(arr.unshift(11), arr); // // Добавляет в начало и вернет длину массива 


// // delete arr[2]; // so bad 
// // console.log(arr);

// console.log(arr.pop(1), arr); // удалит последний элемент и вернет удалившийся элемент
// console.log(arr.shift(11), arr); // // удалит первый элемент и вернет удалившийся элемент


// arr.splice(1, 1); // первая единичка - 1 выбирает позицию, а вторпая единичка - 1 выбираешь сколько элементов удаляешь с этой позиции
// console.log(arr.splice(1, 1 , 'qwerty', 'qwertu'), arr); // 3 значение позволяет нам добавить вместо него // может добавить ДАЖЕ 2 элемента
// console.log(arr.splice(1, 0 , 'qwerty',), arr);




// const arr =  [true, 'string', NaN, 32];

// const arr2 = arr; // SO BAAAD

// const arr2 = Array.from(arr); \\ абсолютно два хороших метода 
// const arr2 = [...arr];

// arr2.push(123);

// console.log(arr, arr2);


//игра "быки коровы"

// let generatNumber = [];
// let attemptsCount = 0;

// function restGema(){
//     attemptsCount = 0;
//     generatNumber = [];

//     while (generatNumber.length < 4){
//         const part = Math.floor(Math.random() * 10);  // [0...9]
//         if (!generatNumber.includes(part)) generatNumber.push(part);
//     }

//     console.log(generatNumber);
// }

// function start(){
//     while (true){
//         const guess = prompt('Угадайте 4 разных целых положительных числа, загадннаым компьютером. Введите -1 чтобы выйти');

//         if(guess === '-1') return alert('Игра завершена');
        
//         if (!isValidGuess(guess)) continue;
        
//         attemptsCount++;

//         const result = getGuessResult(guess);

//         if (result[0] !== 4){
//             alert(`Быки: ${result[0]}. Коровы: ${result[1]}.`);
//             continue;
//         }

//         alert(`Поздавряляем! Вы угадали все цифры. Количество попыток ${attemptsCount}.`);

//         if (!confirm('Хотите сыграть еще раз?')){
//             return alert("До свидания!");
//         }

//         restGema();
            
//     }
// }

// function isValidGuess(guess) {
//     if (guess.length !== 4) return false;

//     for (let i = 0; i < guess.length; i++){
//         if (Number.isNaN(parseInt(guess[i]))) return false;
//     }

//     return true;
// }

// function getGuessResult(guess){
//     const result = [0, 0];

//     for (let i = 0; i < guess.length; i++){
//         if(+guess[i] === generatNumber[i]){
//             result[0]++;
//         } else if (generatNumber.includes(+guess[i])){
//             result[1]++;
//         }
//     }

//     return result;
// }

// restGema();
// start();





// // дз
// let a = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
// let b = 0
// while (b < a.length) {
//     console.log(a[b++])
//     console.log()

// }

// let n = 2
// false
// console.log(a)