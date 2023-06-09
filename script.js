// first
/*.
На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

будут в верхнем регистре. Использовать for или while
*/

// second
let str = "i am in the easycode";
let res = "";
let needUpperCase = true;
for (let i = 0; i < str.length; i++) {
  if (needUpperCase) {
    res += str[i].toUpperCase();
    needUpperCase = false;
  } else {
    res += str[i];
  }
  if (str[i] === " ") {
    needUpperCase = true;
  }
}
console.log(res);

/*
Дана строка “tseb eht ma i”. 
Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
*/
// third
let str = "example";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}

console.log(result);
/*
Факториал числа - произведение всех натуральных чисел от 1 до n

включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
*/
let num = 10;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);

// fourth

/*
На основе строки “JavaScript is a pretty good language” сделать новую строку,

где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
*/
let newStr = "JavaScript is a pretty good language";
let res = "";

for (let i = 0; i < newStr.length; i++) {
  if (newStr[i] === 0 || newStr[i - 1] === " ") {
    res += newStr[i].toUpperCase();
  } else if (newStr[i] !== " ") {
    res += newStr[i];
  }
}
console.log(res);

// five
/*
Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
 Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let key of arr) {
  if (key % 2 === 0) {
    continue;
  }
  console.log(key);
}

// six

/*
Дан объект:

let list = {

name: ‘denis’,

work: ‘easycode’,

age: 29

}



Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
*/
let list = {
  name: "denis",

  work: "easycode",

  age: 29,
};

for (let key in list) {
  if (typeof list[key] === "string") {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list);
