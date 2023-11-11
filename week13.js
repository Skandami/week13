//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate); // показывает текущие дату и время
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(2023, 4, 4, 1);
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(2023, 11, 10, 1);
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let timeDifference= Math.abs(futureDate.getTime() - currentDate.getTime());
let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); 
console.log(daysDifference);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(currentDate.getTime() - 120 * 3600 * 1000);
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let timeDiff= Math.abs(pastDate.getTime() - currentDate.getTime());
let daysDiff = Math.ceil(timeDiff/(1000 * 3600 * 24)); 
console.log(daysDiff);
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(currentDate.getTime() + 7 * 24 *3600 * 1000);
console.log(nextWeek);


//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = (currentDate.getFullYear() + 5);
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
futureDateInFutureYear = new Date(birthday.getTime() + futureYear * 24 *3600 * 1000);
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const yearsDiff = futureYear - currentYear;
console.log(yearsDiff);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = new Date(Date.parse('2023-06-15T08:30:00.000Z'));
console.log(strDate);
//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const ms = Date.parse(strDate);
console.log(ms); // 1327611110417 (таймстамп)
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = new Date(Date.parse('2023-06-15'));
if (isNaN(wrongDate)) {
    console.log("Неправильный формат двты" )
} else {
  console.log( "Правильный формат даты" );
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number < 0) {
    console.log("Отрицательное число" )
} else {
  console.log( "Положительное число" );
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

if (number % 2 === 0) {
    console.log("четное число" )
} else {
  console.log( "нечетное число" );
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
    console.log("кратное 3" )
} else {
  console.log( "некратное 3" );
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number > 0 &&number < 10) {
    console.log("однозначное число" )
} else if (number > 10 &&number < 100) {
  console.log( "двузначное число" )
}
else if (number > 100 &&number < 1000) {
    console.log( "трехзначное число" )
};
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number > 0 &&number < 10) {
    console.log("однозначное число" )
} else if (number > 10 &&number < 100) {
  console.log( "двузначное число" )
}
else if (number > 100 &&number < 1000) {
    console.log( "трехзначное число" )
};
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
  console.log("число положительное или нуль")
}
else {
  console.log("неположительное и не нуль")
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0 ) {
    console.log("кратное 5 " )
} else if (number % 7 === 0){
  console.log( "кратное 7" )
}
else {
  console.log("Некратное ничему");
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0 ) {
    console.log("отрицательное число " )
} else if (number  === 0){
  console.log( "0" )
}
else {
  console.log("Ни то, ни сё");
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number > 100 && number < 1000) {
  console.log("трехзначное положительное число")
}
else {
  console.log("все, что угодно другое!")
};
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day = '';

switch(new Date().getDay()) {
  case 1:
    day = 'понедельник';
    break;
  case 2:
    day = 'вторник';
    break;
  case 3:
    day = 'среда';
    break;
  case 4:
    day = 'четверг';
    break;
  case 5:
    day = 'пятница';
    break;
  case 6:
    day = 'суббота';
    break;
  case 0:
    day = 'воскресенье';
    break;
  default:
    day = 'неизвестный день недели';
}
console.log('Сегодня ' + day + '.');  
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
 
 let direction = 'N';
let fullName;
switch (direction) {
  case 'W':
    fullName = 'Запад';
    break;
  case 'N':
    fullName = 'Север';
    break;
  case 'S':
    fullName = 'Юг';
    break;
  case 'E':
    fullName = 'Восток';
    break;
  default:
    fullName = 'Неизвестное направление';
}
console.log('W' +  ' это ' + fullName + '.');  

  