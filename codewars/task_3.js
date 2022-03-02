// 1. (8 kyu) http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return (-number)
}

// 2. (8 kyu) http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(o, a, b) {
  return eval(a + o + b);
}

// 3. (8 kyu) http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
/* OR array.toString() */

function printArray(array) {
  return String(array)
}


// 4. (8 kyu) http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  let Cost = 40
  let price = d * Cost

  if (d >= 3 && d < 7) {
    price = price - 20
  }
  else if (d >= 7) {
    price = price - 50
  }
  return price
}

// 5. (8 kyu) http://www.codewars.com/kata/word-count
// не открывается на сайте
// ну и фиг с ней, видимо удалили

// 6. (8 kyu) http://www.codewars.com/kata/remove-first-and-last-character-part-two

// НЕ ПРОХОДИТ ТЕСТЫ( поправляю одно, падает другое)
/* Ты немного нет так понял задачу, поэтому и пошел по неверному пути, тебе нужно удалить 1 и последний элемент отделенные ,
   т.е на вход пришла строка 56,78,78,90 результат должен быть 78 78, а ты удаляешь посимвольно arr.slice (1, -1) и ВНИМАНИЕ на входе у тебя строка, а не массив еще
   https://www.javatpoint.com/javascript-string-slice-method#:~:text=The%20JavaScript%20string%20slice%20%28%29%20method%20is%20used,to%20pass%20a%20negative%20number%20as%20an%20index.

*/

function array(arr) {
  // разделяем строку на символы, где разделитель - ,
  // https://www.w3schools.com/jsref/jsref_split.asp
  let realArray = arr.split(',')
  // удаляем 1 и последний
  realArray = realArray.slice(1, -1)
  // если массив пустой, нету элементов, вернем null
  if (!realArray.length) {
    return null
  }
  // обратим массив в строку, соединив элементы через пробел
  // https://www.w3schools.com/jsref/jsref_join.asp
  return realArray.join(' ')
}

// 7.(8 kyu) https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number
/* старайся использовать .map .reduce .filter побольше вместо for цикла, где можно
    function divisibleBy(numbers, divisor) {
      return numbers.filter((number) => number % divisor === 0);
    }
*/


function divisibleBy(numbers, divisor) {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      result.push(numbers[i])
    }
  }
  return result
}


// 8.(7 kyu) http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  let length = s.length
  if (length % 2 === 0) {
    return s.slice(length / 2 - 1, length / 2 + 1)
  }
  else if (length % 2 !== 0) {
    let number = Math.floor(length / 2)
    return s[number]
  }
}


// 9. (7 kyu) http://www.codewars.com/kata/cross-product-of-vectors
/* ой чисто формулу нужно найти, как это высчитывется, с точки зрения кода, здесь ничего
   можно забить, но если интересно, то тут объяснение - https://www.youtube.com/watch?v=pWbOisq1MJU
*/

function crossProduct(vector1, vector2) {
  if (!(vector1 instanceof Array) || !(vector2 instanceof Array) || vector1.length !== 3 || vector2.length !== 3) {
    throw "Arguments are not 3D vectors!"
  }

  return [(vector1[1] * vector2[2] - vector2[1] * vector1[2]), (vector1[2] * vector2[0] - vector2[2] * vector1[0]), (vector1[0] * vector2[1] - vector2[0] * vector1[1])]
}

// 10. (7 kyu) http://www.codewars.com/kata/sequence-generator-1
/* ИЛИ
    function sequence(n, pattern) {
      return [...Array(n)].map(typeof pattern == 'function' ? pattern : () => pattern);
    }
*/

function sequence(n, pattern) {
  let result = [];
  for (let i = 0; i < n; i++)
    result.push(pattern);
  if (typeof pattern === "function") {
    return result.map(pattern);
  }
  return result;
}


// 11.(7 kyu) http://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance

/* КРУТО КЛАССЫ ТУТ ТОЖЕ ДАЛИ */

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}


class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}


// 12.(6 kyu) https://www.codewars.com/kata/base-conversion/
/* ну тут на знание систем счисления, двоичная, десятичная, восьмиричная, 16-ичная,
   отличие в основании чисел
   задачу не обязательно делать, но рекомендую почитать, как переводить
   https://lesson.iarduino.ru/page/perevod-chisel-mezhdu-sistemami-schisleniya/
   например, чтобы понимал как перевести 12 из десятиричной в двоичную, там нужно делить на 2
   такой же алгорит при переводе в восьмеричную. Чтобы перевести обратно, нужно умножать
   https://lesson.iarduino.ru/page/perevod-chisel-mezhdu-sistemami-schisleniya/
   Сделай несколько примеров на бумаге дома

   ПЕРЕВЕДИ МНЕ, лучше делай это на бумаге и вышли потом фото

   145(10) -> ...(2)
   10010001(2) -> ...(10)
   57547(8) -> ...(2)
   101111101100111(2) -> ...(8)
   56345(2) -> ...(16)
   13C19(16) -> ...(2)

   В таких случаях, нужно делать в 2 степа - сначала в десятичную и потом уже в ту, которую нужно
   13C19(16) -> ...(8)
   2F7(8) -> ...(16)

*/


// 13.(6 kyu) http://www.codewars.com/kata/prefill-an-array

const prefill = (n = 0, value) => {
  const length = parseFloat(n)
  if (length < 0 || !Number.isInteger(length)) throw new TypeError(n + ' is invalid')
  return Array(length).fill(value)
}

// 14.(6 kyu) http://www.codewars.com/kata/closures-and-scopes

function createFunctions(n) {
  let callbacks = [];
  let score = 0
  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return score++;
    });
  }

  return callbacks;
}


// 15.ТО ЧТО ТЫ ПОМОГАЛА НО ВСЕ РНАВНО НЕ ПРОХОДИТ ТЕСТЫ)
/*
  function createSecretHolder(secret) {
    var _secret = secret;
    return {
      getSecret : function(){
        return _secret;
      },
      setSecret : function(secret){
        _secret = secret;
      }
    }
  } 
*/

function createSecretHolder(secret) {
  let _secret = secret
  return {
    getSecret: function () {
      return _secret
    },
    //!!! setSecret: function(secret){
    setSecret: function () {
      _secret = secret
    }
  }
}

// 16.(6 kyu) http://www.codewars.com/kata/stringing-me-along

function createMessage(str) {
  return function (next) {
    if (next === undefined) {
      return str
    }
    return createMessage(str + " " + next);
  }
}

// 17. (6 kyu) http://www.codewars.com/kata/array-helpers
/*
 Думаю сложность была в том, чтобы понять как расширить уже существующий класс Array
 Это делается через prototype
 https://learn.javascript.ru/extend-natives
 http://www.cyberguru.ru/web/html/extending-intrinsic-objects-with-javascript-protototypes.html?showall=1
 this будет указывать на массив, на котором метод был вызыван [1,5].square -> this = [1,5]

 function checkArr(arr){
  return Array.isArray(arr) || Object.prototype.toString.call(arr) === '[object Array]';
}

Array.prototype.square = function(){
  if(checkArr(this)){
     return this.map((item) => {
        return Math.pow(item, 2);
     });
  } else {
    throw 'params must be a array';
  }
};

Array.prototype.cube = function(){
  if(checkArr(this)){
     return this.map((item) => {
        return Math.pow(item, 3);
     });
  } else {
    throw 'params must be a array';
  }
};

Array.prototype.sum = function(){
  if(checkArr(this)){
     return this.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
     },0);
  } else {
    throw 'params must be a array';
  }
};

Array.prototype.average = function(){
  if(checkArr(this)){
     return this.sum() / this.length;
  } else {
    throw 'params must be a array';
  }
};

Array.prototype.even = function(){
   if(checkArr(this)){
     return this.filter((item) => {
        return item % 2 === 0;
     });
  } else {
    throw 'params must be a array';
  }
};

Array.prototype.odd = function(){
   if(checkArr(this)){
     return this.filter((item) => {
        return item % 2 !== 0;
     });
  } else {
    throw 'params must be a array';
  }
};
*/


// 18 (6 kyu) http://www.codewars.com/kata/sum-of-digits-slash-digital-root/

function digital_root(n) {
  if (n < 10) {
    return n
  }
  n = String(n).split(``)
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    sum = sum + Number(n[i])
  }
  return digital_root(sum)
}
