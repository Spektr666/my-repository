// 1.8 kyu https://www.codewars.com/kata/reversed-strings
/* У массива есть метод reverse
   Можно так 
   return str.split("").reverse().join("")
   переводим строку в массив, переворачиваем и соединяем
*/

function solution(str) {
    let result = ``;
    for (let i = str.length - 1; i >= 0; i--) {
      result = `${result}${str[i]}`;
    }
    return result;
  }
  
  // 2.8 kyu https://www.codewars.com/kata/remove-first-and-last-character
  
  function removeChar(str) {
    str = str.slice(1, str.length - 1);
    return str;
  }
  
  // 3. 8 kyu https://www.codewars.com/kata/palindrome-strings
  /* Можно и так, много опций
     const reversedLine = line.toString().split("").reverse().join("")
     return line == reversedLine;
  */
  
  function isPalindrome(line) {
    line = String(line);
    let result = ``;
    for (let i = line.length - 1; i >= 0; i--) {
      result = `${result}${line[i]}`;
    }
    if (result === line) {
      return true;
    }
    return false;
  }
  
  // 4.7 kyu https://www.codewars.com/kata/anagram-detection
  
  /* 
    твое решение не покрывает все варианты(я поставила console.log(ниже)), чтобы увидеть
    при каких значениях тест падает
    например - isAnagram(YejeoqdPGfoNzNB NqzBoYPdoejGfNL) - в test 2 символы e, а во втором только 2, но твоя логика
    не заточена на проверку количества
    Можно удалять элементы из оригинала, те, что уже были найдены, чтобы при последующе original.indexOf(test[i]) !== -1, проверять на
    оставшиеся символы(свободные) и второй момент тебе нужно возвращать true, только если ты прошел по всем элементам массива, сейчас
    у тебя вернет сразу же, как только зайдет в массив, ты можешь поставить console.log в фикле и увидишь, что он вызывается 1 раз
  
  var isAnagram = function (test, original) {
    test = String(test).toLowerCase();
    original = String(original).toLowerCase();
    if (test.length !== original.length) {
      return false;
    }
    for (let i = 0; original.indexOf(test[i]) !== -1; i++) {
      const index = original.indexOf(test[i]);
      original =
        original.slice(0, index) + original.slice(index + 1, original.length);
      if (!original.length) {
        return true;
      }
    }
    return false;
  };
  
  ИЛИ привести строки к одному виду, lowercase потом отсиртировать и сравнить
  
  var isAnagram = function (test, original) {
    testSorted = test.toLowerCase().split("").sort().join();
    originalSorted = original.toLowerCase().split("").sort().join();  
    return testSorted == originalSorted;
  };ы
  */
  
  var isAnagram = function (test, original) {
    //console.log(test, original)
    test = String(test).toLowerCase();
    original = String(original).toLowerCase();
    if (test.length !== original.length) {
      return false;
    }
    for (let i = 0; original.indexOf(test[i]) !== -1; i++) {
      if (test.length === i) {
        return true;
      }
    }
    return false;
  };
  
  // 5.7 kyu https://www.codewars.com/kata/birthday-i-cake (стандартные тесты проходит, случайные нет, но я и не совсем понял че тут надо то xD))
  /*
  
    Ты упустил один пункт или не совсем понял You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in the string, with the alphabetical position ("a" = 1, "b" = 2, etc.) of each odd indexed character to get the string's total.
    Тебе нужно, когда суммируешь для нечетных брать позицию как в алфавите, а для четного ASCII code
  
    function cake(x, y) {
      let y2arr = y.split("");
      let fallenCandles = 0;
  
      for (let i = 0; i < y2arr.length; i++) {
        if (i % 2 === 0) {
          fallenCandles += letterToASCII(y2arr[i]);
          continue;
        }
        fallenCandles += letterAlphPos(y2arr[i]);
      }
  
      return fallenCandles > 0.7 * x ? "Fire!" : "That was close!";
    }
  
    function letterAlphPos(letter) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      return alphabet.indexOf(letter, 0) + 1;
    }
  
    function letterToASCII(letter) {
      return letter.charCodeAt();
    }
  
  */
  function cake(x, y) {
    let resultCode = 0;
    for (let i = 0; i < y.length; i++) {
      resultCode = resultCode + y[i].charCodeAt();
    }
    let danger = (x / 100) * 70;
    if ((x = 0)) {
      return "That was close!";
    } else if (danger > resultCode) {
      return "That was close!";
    }
    return "Fire!";
  }
  
  // 6.8 kyu https://www.codewars.com/kata/even-or-odd
  
  function even_or_odd(number) {
    if (number % 2 === 0) {
      return "Even";
    }
    return "Odd";
  }
  
  // 7.8 kyu https://www.codewars.com/kata/century-from-year
  /* 
    можно проще
    function century(year) {
      return Math.ceil(year/100)
    }
    Math.ceil - округляет до целого, отбрасывая вещественную часть
  */
  
  function century(year) {
    if (year % 100 === 0) {
      let str = String(year);
      str = str.slice(0, -2);
      return Number(str);
    } else if (year < 100) {
      return 1;
    }
    let str = String(year);
    str = str.slice(0, -2);
    return Number(str) + 1;
  }
  
  // 8.7 kyu https://www.codewars.com/kata/greatest-common-divisor
  /*
     function mygcd(n, m) {
      var r = 0;
      while (n !== 0) {
        r = m % n;
        m = n;
        n = r;
      }
      return m;
    };
    mygcd(35, 65) --> первая итерация остаток 30 и m будет уже 35, вторая итерация остаток 5 и m 30, 3 итерация т станет 0
    ^ это быстрый метод, тк мы будем проходиться лишь по остаткам
    Этот медленный, но наверное понятнее
  
    const mygcd  = (a, b) => {
    let i = a;
      while (a % i !== 0 || b % i !== 0) {
      i = i - 1;
      }
      return i;
  };
  */
  
  // 9.7 kyu https://www.codewars.com/kata/factorial
  /*
    ИЛИ https://learn.javascript.ru/task/factorial - тут с пояснением
  */
  
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else if (n < 0 || n > 12) {
      throw RangeError(RangeError);
    }
    let result = 1;
    for (let i = n; i > 0; i--) {
      result = result * i;
    }
    return result;
  }
  
  // 10.7 kyu https://www.codewars.com/kata/find-the-duplicated-number-in-a-consecutive-unsorted-list
  
  function findDup(arr) {
    let result = [];
    let duplicateValue = ``;
    for (let i = 0; i < arr.length; i++) {
      if (result.includes(arr[i]) !== true) {
        result.push(arr[i]);
      } else if (result.includes(arr[i]) === true) {
        duplicateValue = arr[i];
      }
    }
    return duplicateValue;
  }
  
  // 11.6 kyu https://www.codewars.com/kata/is-a-number-prime/
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // 12.8 kyu https://www.codewars.com/kata/remove-duplicates-from-list
  /* 
     Instead of writting === -1, you can use includes if(!result.includes(a[i]))
  */
  
  function distinct(a) {
    let result = [];
    let i = 0;
    for (let i = 0; i < a.length; i++) {
      if (result.indexOf(a[i]) === -1) {
        result.push(a[i]);
      }
    }
    return result;
  }
  
  // 13.8 kyu https://www.codewars.com/kata/sum-of-positive
  /*
    Можно сократить и не писать столько циклов
    function positiveSum(arr) {
      return arr.filter(item => item > 0).reduce((acc, item) => acc+item, 0)
    }
  */
  
  function positiveSum(arr) {
    let positive = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        positive.push(arr[i]);
      }
      continue;
    }
    for (let i = 0; i < positive.length; i++) {
      sum = sum + positive[i];
    }
    return sum;
  }
  
  // 14.7 kyu https://www.codewars.com/kata/fizz-buzz
  
  function fizzbuzz(n) {
    let result = [];
    for (let i = n; i > 0; i--) {
      result.push(i);
    }
    let reverseResult = result.reverse();
    for (let j = 0; j < reverseResult.length; j++) {
      if (reverseResult[j] % 3 === 0 && reverseResult[j] % 5 !== 0) {
        reverseResult[j] = "Fizz";
      }
      if (reverseResult[j] % 5 === 0 && reverseResult[j] % 3 !== 0) {
        reverseResult[j] = "Buzz";
      }
      if (reverseResult[j] % 3 === 0 && reverseResult[j] % 5 === 0) {
        reverseResult[j] = "FizzBuzz";
      }
    }
    return reverseResult;
  }
  
  // 15.7 kyu https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array
  /*
    Если использовать другие методы
    function multiplyAll (array){
      return (multiplier) => {
        return array.map(item => item * multiplier)    
      }  
    }
  */
  
  function multiplyAll(array) {
    return (n) => {
      let result = [];
      for (let i = 0; i < array.length; i++) {
        let j = array[i] * n;
        result.push(j);
      }
      return result;
    };
  }
  
  // 16.7 kyu https://www.codewars.com/kata/shortest-word валится на ковычке ( не догоняю как в исключение ковычку поставить, что б не разделяло слово)
  /*
    В таким случаях, научись логировать, просто можно проставить console.log() и вывести, какие аргументы были и где упало
    Например, что сейчас падает 
    Let's travel abroad shall we
    [ 'Let', 's', 'travel', 'abroad', 'shall', 'we' ]
    Это то, как строка была разделена
    Let's это одно слово, но \W разделит их
    Просто можно изменить на let a = s.split(" ")
    хороший сайтик для тестирования регулярок
    https://regex101.com/
  */
  function findShort(s) {
    //console.log(s)
    let a = s.split(/\W+/);
    //console.log(a)
  
    let result = [];
    for (let i = 0; i < a.length; i++) {
      let length = a[i].length;
      result.push(length);
    }
    let r = Math.min(...result);
    return r;
  }
  
  // 17.7 kyu https://www.codewars.com/kata/square-every-digit
  /*
    Даю примеры, где использую абсолютно другие методы, чтобы ты мог посмотреть альтернативное решение
    function squareDigits(num){
      return Number(String(num).split("").reduce((acc, item) => acc+ item**2 , ""))
    }
  */
  
  function squareDigits(num) {
    num = String(num);
    let result = ``;
    for (let i = 0; i < num.length; i++) {
      let j = num[i] ** 2;
      result = `${result}${j}`;
    }
    return Number(result);
  }
  
  // 18.7 kyu https://www.codewars.com/kata/easy-mathematical-callback
  
  function processArray(arr, callback) {
    return arr.map(callback);
  }
  
  // 19.6 kyu https://www.codewars.com/kata/count-characters-in-your-string
  
  function count(string) {
    let result = {};
  
    for (let i = 0; i < string.length; i++) {
      if (result.hasOwnProperty(string[i])) {
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
    }
  
    return result;
  }
  
  // 20.8 kyu https://www.codewars.com/kata/simple-validation-of-a-username-with-regex хз как его писать. что бы не на точное совпадение шло. тут не решение а набросок)
  
  /*
     Табличка с спец символами, что каждый значит
     \w - тоже самое, что и [A-Za-z0-9_]
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
     function validateUsr(username) {
      return /^[a-z0-9_]{4,16}$/.test(username)
    }
    Или твой вариант фиксануть
    function validateUsr(username) {
      if (username.length > 16 || username.length < 4) {
        return false;
      }
      let res = /^[a-z0-9_]+$/;
      return res.test(username);
    }
    /^[a-z0-9_]+$/
    ^ - начало строки
    $ - конец строки
    [a-z0-9_] от начала до конца строки должны быть только a-z или 0-9 или _ 
    + один или несколько раз
  */
  
  function validateUsr(username) {
    if (username.length > 16 || username.length < 4) {
      return false;
    }
    let res = /[a - z]|{n}/;
    return res.test(username);
  }
  
  // 21.7 kyu https://www.codewars.com/kata/regexp-basics-is-it-a-letter аналогично блин)) в регулярных выражениях работают логические символы (и, или)?
  /*
    ты вызываешь test, но ты не передаешь значение строки текущей,
    !когда ты добавляешь метод в прототип - .prototype, чтобы ссылаться на значение, используем this
    String.prototype.isLetter = function() {
      let res = /^[a-zA-Z]{1}$/  
      return res.test(this)
      /^[a-zA-Z]{1}$/ 
      ^ от начала до конца строки $ только буквы любого регистра и количество 1
    }
  */
  String.prototype.isLetter = function () {
    let res = /[a-z]/;
    let resTwo = /[A-Z]/;
    if (res.test() === true || resTwo.test() === true) {
      return true;
    }
    return false;
  };
  
  // 22.7 kyu https://www.codewars.com/kata/regexp-basics-is-it-a-vowel/ Тоже не пашет, гребаные регулярные выражения))
  /*
    Здесь почти все верно!
    String.prototype.vowel = function () {
      let regexp = /^[aeiouAEIOU]{1}$/;
      return regexp.test(this);
    };
    без ^ и $ подойдут такие варианты "naem" "ngyn" потому что, мы не говорим что на протяжении всей строки, а с ^ и $ мы говорим, что
    от начала до конца и только 1 символ {1}
    Еще раз дублирую - https://regex101.com/
    Удоюно тестировать - в первом окне вводить регулярны и в следующем - вводишь текст и оно покажет подпадает или нет
  */
  
  String.prototype.vowel = function () {
    let regexp = /[aeiouAEIOU]/;
    return regexp.test(this);
  };
  