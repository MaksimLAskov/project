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


const personalMovieDB = {
    count: 'numberOfFilms',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const film = prompt('Один из последних просмотренных фильмов?');
const review = prompt('На сколько оцените его?');
const film2 = prompt('Один из последних просмотренных фильмов?');
const review2 = prompt('На сколько оцените его?');

personalMovieDB.movies[film] = review;
personalMovieDB.movies[film2] = review2;

console.log(personalMovieDB);
