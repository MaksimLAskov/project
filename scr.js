'use strict';

// let number = 5;
// const leftBoardWith = 1;

// number = 10;

// console.log(number);


// const a = {
//     'Anna': 500,
//     'Bella': 800
// };

// const b = prompt('Введите значение');

// a['B'] = b


// console.log(a['B']);



// запись в массив из промпт

// const answers = [];

// // answers[0] = prompt('Ваше имя', '');
// // answers[1] = prompt('Ваш рост', '');
// // answers[2] = prompt('Ваше гражджанство', '');

// console.log(typeof(answers));


// console.log(2 * 5 === '10');


// const dd = {
//     'age': {
//         'a': {
//             'b': 1331,
//         }
//     },
//     'name': 123,
// };

// console.log(dd['b']);


// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");


// const personalMovieDB = {
//     count: 'numberOfFilms',
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const film = prompt('Один из последних просмотренных фильмов?');
// const review = prompt('На сколько оцените его?');
// const film2 = prompt('Один из последних просмотренных фильмов?');
// const review2 = prompt('На сколько оцените его?');

// personalMovieDB.movies[film] = review;
// personalMovieDB.movies[film2] = review2;

// console.log(personalMovieDB);
// const a = 9

// if (a == 9) {
//     console.log('ok');
// } else {
//     console.log('неправильно');
// }

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// // if (hamburger === 3 && cola || fries === 3 && 
// // nuggets) {
// //    console.log('Done!')
// // }

// 


// const hamburger = 0;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }else {
//     console.log('-');
// }


// let hamburger;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')





// }



// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 18; i++) {

//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
//     num++;
// }


// for ( let i = 0; i < 3; i++) {
//     console.log(i);

//     for ( let j = 0; j < 3; j++) {
//         console.log(j);
    
        
//     }
// }


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i ; j++) {
//         result += '*';
//     }
//     result += '\n'
// };
    
// console.log(result);

// first: for ( let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     for ( let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for ( let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// for (let i = 0; i <2; i++) {
//     const film = prompt('Один из последних просмотренных фильмов?');
//     const review = prompt('На сколько оцените его?');


//     if (film != null && review != null && film != '' && review != '' && film.length < 50) {
//         personalMovieDB.movies[film] = review;
//         console.log("Done!");
//     } else {
//         console.log("error");
//         i--;
//     }
// };

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("произошла ошибка");
// }


// console.log(personalMovieDB);


// let num = 15

// function showFirstMessage(text) {
//     console.log(text);
//     num = 115
// }

// showFirstMessage("Hello World");
// console.log(num);


// const calk = (a, b) => {

//     a = +prompt('');
//     b = +prompt('');

//     if(a + b >= 10) {
//         return console.log('ошибка');
//     } else if(a + b < 10) {
//         return console.log('правильно');
//     }
// };

// calk();



// const str = 'test'

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str);




// let numberOfFilms;

// // function start() {
// //     numberOfFilms = +prompt("Сколкьо фильмов вы уже посмотрели?", "");

// //     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// //         numberOfFilms = +prompt("Сколкьо фильмов вы уже посмотрели?", "");
// //     }
// // }

// // start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function showMyDB(hidden) {
//     if (!hidden) {
//        return console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i <=3; i++) {
//         const genre = prompt(`Ваш любимый жанр по порядку ${i}`)
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последним просмотренных фильмов?", "").trimm();
//         const b = prompt("На сколько оцените его?", "").trim();
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done!');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectedPersLevl() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман!");
//     }
// }

// detectedPersLevl();

// // console.log(personalMovieDB);




// function nan(){
//     let a = +prompt("Введите число");
//     if (a < 0) {
//         console.log("Ваше число является отрицательным");
//     } else if (a > 0) {
//         console.log("Ваше число является положительным");
//     }
// }

// nan();

// let str = prompt('Введите ваше слово', '');

// console.log(str.length);




// function first() {
//     //do something
//     setTimeout(function() {
//         console.log(1);
//     }, 5000);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScropt', done);

// const optioons = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// optioons.makeTest();


// const {border, bg} = optioons.colors;
// console.log(border);

// console.log(Object.keys(optioons));    // ЭТО ОЧЕНЬ ВАЖНО ДЛЯ БУУДЕЩЙ РАБОТЫ  
// console.log(Object.keys(optioons).length);

// console.log(optioons.name);

// // delete optioons.name;

// console.log(optioons);

// let counter = 0;
// for (let key in optioons) {
//     if (typeof(optioons[key]) === 'object') {
//         for (let i in optioons[key]) {
//             console.log(`Свойство ${i} имеет значение ${optioons[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${optioons[key]}`);
//         counter++;
//     }

// };

// console.log(counter);