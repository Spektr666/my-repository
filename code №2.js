1.8 kyu https://www.codewars.com/kata/reversed-strings

function solution(str){
  let result = ``
  for (let i = str.length - 1; i>=0; i--){
    result =`${result}${str[i]}`
  }
  return result
}


2.8 kyu https://www.codewars.com/kata/remove-first-and-last-character

function removeChar(str){
str = str.slice (1, str.length - 1);
  return str
};

3. 8 kyu https://www.codewars.com/kata/palindrome-strings

function isPalindrome(line) {
  line = String(line)
 let result = ``
 for ( let i = line.length-1; i>=0; i--){
   result = `${result}${line[i]}`
 }
  if (result === line){
    return true
  }
  return false
}
4.7 kyu https://www.codewars.com/kata/anagram-detection

обычные тесты проходит а рандомные нет.
пишет Unhandled rejection TestError: Expected: false, instead got: true
не могу понять что за тест на отклонение провалены.

var isAnagram = function(test, original) {
  test = String(test).toLowerCase()
  original = String(original).toLowerCase()
  if (test.length !== original.length){
    return false
    }
    for (let i = 0; original.indexOf(test[i]) !== -1; i++){
    return true
  } 
  return false
};


5. Birthday I - Cake (стандартные тесты проходит, случайные нет, но я и не совсем понял че тут надо то xD))

function cake(x, y){
  let resultCode = 0 
for (let i =0; i<y.length; i++){
  resultCode = resultCode + y[i].charCodeAt()
}
let danger = (x/100)*70
if ( x=0){
  return "That was close!"
}
 else if (danger>resultCode){
  return "That was close!"
}
  return "Fire!"
}


6.8 kyu https://www.codewars.com/kata/even-or-odd

function even_or_odd(number) {
  if (number%2===0){
    return "Even"
  }
  return "Odd"
}


7.8 kyu https://www.codewars.com/kata/century-from-year

function century(year) {
  if(year%100===0){
    let str = String(year)
    str = str.slice(0,-2)
     return Number(str)
  }
  else if(year<100){
    return 1
  }
  let str = String(year)
 str = str.slice(0,-2)
    return Number(str) + 1
}
8.


9.7 kyu https://www.codewars.com/kata/factorial


function factorial(n){
  if (n===0){
    return 1
  }
  else if (n<0 || n>12){
  throw RangeError(RangeError)
  }
  let result = 1
for (let i = n; i>0; i--){
  result = result * i
}
  return result
}

10. Find The Duplicated Number in a Consecutive Unsorted List

function findDup( arr ){
  let result = []
  let duplicateValue = `` 
  for ( let i =0; i<arr.length; i++){
    if ( result.includes(arr[i]) !== true){
      result.push (arr[i])
    }
    else if ( result.includes(arr[i])=== true){
      duplicateValue = arr[i]
    }
    }
  return duplicateValue ;
}


11.Is a number prime?

function isPrime(num) {
  if (num <= 1) return false;
  for( let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i=== 0) return false;
    }
    return true;
  }


12.8 kyu https://www.codewars.com/kata/remove-duplicates-from-list

function distinct(a) {
  let result = []
  let i = 0 
  for(let i = 0 ;i<a.length; i++){
   
   if (result.indexOf(a[i])=== -1){
     result.push(a[i])
   }
  }
   return result
}

13.8 kyu https://www.codewars.com/kata/sum-of-positive


function positiveSum(arr) {
  let positive = []
  let sum = 0
  for (let i = 0; i<arr.length; i++){
    if (arr[i]>=0){
      positive.push(arr[i])
    }
    continue
  }
  for (let i = 0; i<positive.length; i++ ){
    sum = sum + positive[i]
  }
  return sum
  }

14. 7 kyu https://www.codewars.com/kata/fizz-buzz

function fizzbuzz(n){
  let result = []
  for (let i = n; i>0; i--){
    result.push(i)
  }
  let reverseResult = result.reverse()
  for (let j = 0; j<reverseResult.length; j++){
    if (reverseResult[j]%3===0 && reverseResult[j]%5!==0){
      reverseResult[j] = 'Fizz'
    }
    if (reverseResult[j]%5===0 && reverseResult[j]%3!==0){
      reverseResult[j] = "Buzz"
    }
    if (reverseResult[j]%3===0 && reverseResult[j]%5===0){
      reverseResult[j] = "FizzBuzz"
    }
  }
  return reverseResult
}

15.7 kyu https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array

function multiplyAll (array){
  return (n)=>{
  let result = []
  for ( let i = 0; i<array.length; i++){
    let j = array[i]*n
    result.push(j)
  }
  return result
}
}


16. валится на ковычке ( не догоняю как в исключение ковычку поставить, что б не разделяло слово)

function findShort(s){
let a = s.split(/\W+/)
let result = []
for (let i = 0; i<a.length;i++){
  let length = a[i].length
  result.push(length)
}
let r = Math.min(...result)
return r
}


17.Square Every Digit

function squareDigits(num){
  num = String(num)
  let result=``
  for (let i =0; i<num.length; i++){
  let j  = num[i]**2
  result = `${result}${j}`
  }
  return Number(result)
  }


18.Easy mathematical callback

function processArray(arr, callback) {
    return arr.map(callback);
}

19.Count characters in your string

function count (string) {
  let result = {};
  
  for(let i = 0; i < string.length; i++) {
    if(result.hasOwnProperty(string[i])){
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  
  return result;
}

20. хз как его писать. что бы не на точное совпадение шло. тут не решение а набросок)

function validateUsr(username) {
  if ( username.length>16 || username.length<4){
    return false
  }
 let res =  /[a - z]|{n}/
 return res.test(username)
  }


21. аналогично блин)) в регулярных выражениях работают логические символы (и, или)?
   
String.prototype.isLetter = function() {
  let res = /[a-z]/
  let resTwo = /[A-Z]/
  if (res.test ()===true||resTwo.test ()===true){
    return true
}
  return false
}
22. Тоже не пашет, гребаные регулярные выражения))

String.prototype.vowel = function() {
  let regexp = /[aeiouAEIOU]/
 return regexp.test(this) 
  }