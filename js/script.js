/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start(); // не забывать вызывать функции

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function showMyDB() {
	if (personalMovieDB['privat'] == false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
	}
}

writeYourGenres();

function detectPersonalLevel() {
	if (numberOfFilms < 10 && numberOfFilms !== 0 && numberOfFilms !== '') {
		alert('Просмотрено довольно мало фильмов');
	} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
		alert('Вы классический зритель');
	} else if (numberOfFilms >= 30) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}

detectPersonalLevel();

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');
		if (a === '' && b === '' || a === null && b === null || a.length > 50 && b.length > 50) {
			i--;
			console.log('Error');
		} else {
			personalMovieDB.movies[a] = b;
			console.log('Nicely done!');
		}
	}
}

rememberMyFilms();