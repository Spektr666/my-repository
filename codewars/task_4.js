// 1.8 kyu https://www.codewars.com/kata/take-an-arrow-to-the-knee-functionally
//сложновато мне использовать как то такие методы ка arr.map arr.reduce, там где нужно функцию в общем вписывать)
/* пробуй, их часто использую, чаще сем массивы
   практика поможет
*/

var ArrowFunc = function (arr) {
  return arr.map((x) => String.fromCharCode(x)).join("");
};

// 2.8 kyu https://www.codewars.com/kata/merge-two-sorted-arrays-into-one

function mergeArrays(arr1, arr2) {
  let arr = [];
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  let result = [];
  let sumArr = arr.concat(arr1, arr2).sort(compareNumeric);
  for (let i = 0; i < sumArr.length; i++) {
    if (result.indexOf(sumArr[i]) === -1) {
      result.push(sumArr[i]);
    }
    continue;
  }

  return result;
}

//3.7 kyu https://www.codewars.com/kata/16-plus-18-equals-214

//Я тут навертел конечно хрен пойми что, но работает. выглядит правда как хрен опйми что)
/*
  Посмотри этот вариант, попробуй понять логику
  function add(num1, num2) {
    num1 = ('' + num1).split('').reverse()
    num2 = ('' + num2).split('').reverse()
    let max = Math.max(num1.length, num2.length)
    let str = [];
    for(let i = 0; i < max; i++)
      str.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0))
    num1 = str.reverse().join('');
    return parseInt(num1);
  }
*/

function add(num1, num2) {
  if (num1 < 10 || num2 < 10) {
    return num1 + num2;
  }
  num1 = String(num1).split(/\B/).reverse();
  num2 = String(num2).split(/\B/).reverse();
  const regex = /,/g;
  let result = [];
  for (let i = 0; i < num1.length + 100 && i < num2.length + 100; i++) {
    if (num1[i] !== undefined && num2[i] !== undefined) {
      let j = Number(num1[i]) + Number(num2[i]);
      result.push(j);
    } else if (num1[i] !== undefined && num2[i] === undefined) {
      result.push(num1[i]);
    } else if (num1[i] === undefined && num2[i] !== undefined) {
      result.push(num2[i]);
    }
  }
  let final = String(result.reverse()).replace(regex, ``);
  return Number(final);
}

// 4.7 kyu https://www.codewars.com/kata/add-property-to-every-object-in-array

questions.forEach(function (i) {
  i.usersAnswer = null;
});

// 5.7 kyu https://www.codewars.com/kata/colour-association
// А ГОВОРИЛ MAP не можешь использовать!

function colourAssociation(array) {
  return array.map(([colour, association]) => ({ [colour]: association }));
}

// 6. 7 kyu https://www.codewars.com/kata/combine-objects

// ну это ты решала,

function combine(inputs) {
  let argsArray = [...arguments];
  let comboObj = {};
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      if (!comboObj[key]) {
        comboObj[key] = arguments[i][key];
      } else {
        comboObj[key] += arguments[i][key];
      }
    }
  }
  return comboObj;
}

// 7.7 kyu https://www.codewars.com/kata/count-the-digit

function nbDig(n, d) {
  let result = [];
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let number = i;
    number = number ** 2;
    result.push(number);
  }
  result = String(result);
  for (let j = 0; j < result.length; j++) {
    if (result[j].includes(d) === true) {
      count++;
    }
  }
  return count;
}

// 8. 7 kyu https://www.codewars.com/kata/find-the-missing-element-between-two-arrays

// ДОЛГО МУЧАЛСЯ, ИЗ ВСЕХ ТЕСТОВ РУШИТСЯ НА ОДНОМ ЗНАЧЕНИИ((
/*
  Логика верная, но тебе нужно только смотреть, чтобы второй масси содержал все из первого
  а не тот что больше, количество операция да, определяются длиной большего массива


  function findMissing(arr1, arr2) {
  let result = [];
  const max = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < max; i++) {
    if (arr2.includes(arr1[i]) !== true) {
      result.push(arr1[i]);
    } else {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }

  return Number(result);
}

*/

function findMissing(arr1, arr2) {
  let result = [];

  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i]) !== true) {
        result.push(arr1[i]);
      }
      arr2.splice(arr2.indexOf(arr1[i]), 0);
    }
  }
  if (arr2.length > arr1.length) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) !== true) {
        result.push(arr2[i]);
      }
      arr1.splice(arr1.indexOf(arr2[i]), 0);
    }
  }
  return Number(result);
}

// 9.7 kyu https://www.codewars.com/kata/get-decimal-part-of-the-given-number

function getDecimal(n) {
  return Math.abs(n) % 1;
}

// 10. 7 kyu https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7

// 3 раза переделывал, потому что не правильно читал задание))

function maxTriSum(numbers) {
  let result = [];
  let sum = 0;
  numbers = numbers
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  for (let i = 0; result.length < 3; i++) {
    if (result.includes(numbers[i]) !== true) {
      result.push(numbers[i]);
    }
  }
  return result.reduce((a, b) => a + b, sum);
}

// 11. 7 kyu https://www.codewars.com/kata/mylanguages

function myLanguages(results) {
  return Object.keys(results)
    .filter((score) => results[score] > 59)
    .sort((a, b) => results[b] - results[a]);
}

// 12.7 kyu https://www.codewars.com/kata/nickname-generator

function nicknameGenerator(name) {
  let regex = /[aeiouAEIOU]/;
  if (name.length <= 3) {
    return "Error: Name too short";
  }
  // if(regex.test(name[2])) достаточно, не нужно писать === true, у тебя увже приходит true результат от test
  else if (regex.test(name[2]) === true) {
    return name.slice(0, 4);
  }
  return name.slice(0, 3);
}

// 13 7 kyu https://www.codewars.com/kata/odd-even-string-sort

function sortMyString(S) {
  let result1 = ``;
  let result2 = ``;
  for (let i = 0; i < S.length; i++) {
    let n = i % 2;
    if (n === 0) {
      result1 = `${result1}${S[i]}`;
    } else if (n !== 0) {
      result2 = `${result2}${S[i]}`;
    }
  }
  return `${result1} ${result2}`;
}

// 14.  7 kyu https://www.codewars.com/kata/power-of-two

//непонимаю что не так, и что хотят от меня, но не работает как я задумал)
/* поправила слегка 
  function isPowerOfTwo(n) {
    let result = false;
    for (let i = 1; i <= n; i = i * 2) {
      if (i === n) {
        result = true;
      } else {
        result = false;
      }
    }
    return result;
  }
*/

function isPowerOfTwo(n) {
  // false дефолтное значение должно быть
  let result = ``;
  for (let i = 1; i <= n; i = i * 2) {
    if (i === n) {
      result = true;
    }
    // else блок нужен иначе всегда выполняется
    result = false;
  }
  return result;
}

//15.7 kyu https://www.codewars.com/kata/string-reordering

//с обьектами пока проблема, не особо понимаю как работать и сортировать их в общем буду разбираться еще

/* На самом деле ничего сложного, если  знаешь как достать ключи объекта Object.keys()
  function sentence(List) {
    return List.sort((curr, next) => Object.keys(curr)[0] - Object.keys(next)[0]).map(item => item[Object.keys(item)[0]]).join(' ');
  }
  И берем первый Object.keys(curr)[0] и сортируем
*/

// 16. 7 kyu https://www.codewars.com/kata/sum-with-arrows/

let Sum = "sum = function(arr){ return arr.reduce((x,y)=>x+y); }";

// 17.7 kyu https://www.codewars.com/kata/unpacking-arguments

// Одна из самых легких задач, а сложность такая же как у тех которые туплю по пару часов)))

function spread(func, args) {
  return func(...args);
}

// 18 7 kyu https://www.codewars.com/kata/vowel-one

//ЧТО ТО НЕ ПОПЛАНУ ИДЕТ
// Y - это не гласная в английском, нужно просто regexp подправить
/*
function vowelOne(s) {
  let result = ``;
  let regexp = /[aeuioAEUOI]+/;
  for (let i = 0; i < s.length; i++) {
    if (regexp.test(s[i]) === true) {
      result = `${result}${1}`;
    } else {
      result = `${result}${0}`;
    }
  }
  return result;
}
*/

function vowelOne(s) {
  let result = ``;
  let regexp = /[aeyuioAEYUOI]/;
  for (let i = 0; i < s.length; i++) {
    if (regexp.test(s[i]) === true) {
      result = `${result}${1}`;
    }
    result = `${result}${0}`;
  }
  return result;
}

// 19  7 kyu https://www.codewars.com/kata/who-is-the-killer-1

// ну тут ситуация аналогичная с 15 задачей
/*
  Задача состоит в том, чтобы пройтись по всем ключам в объекте и проверить, если массив по ключу содержит
  всех dead, то это killer
  function killer(suspectInfo, dead) {
    let killer = null;
    Object.keys(suspectInfo).forEach(suspect => {
      if(dead.every(elem => suspectInfo[suspect].includes(elem))){
        killer = suspect
      }
    })
    return killer
  }
*/

// 20 6 kyu https://www.codewars.com/kata/data-reverse

function dataReverse(data) {
  let result = [];
  let result2 = [];
  for (let i = data.length; i >= 0; i = i - 8) {
    result.push(data.slice(-8));
    data.splice(i - 8, 8);
  }
  result = String(result);
  for (let j = 0; j < result.length; j += 2) {
    result2.push(Number(result[j]));
  }
  return result2;
}
