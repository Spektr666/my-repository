1. (8 kyu) http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return (-number)
}

2. (8 kyu) http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(o, a, b) {
  return eval(a+o+b);
}

3. (8 kyu) http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array){
  return String(array)
}


4. (8 kyu) http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  let Cost = 40
  let price = d * Cost
  
  if (d>=3&&d<7){
     price = price - 20
  }
  else if (d>=7){
    price = price - 50
  }
 return price
}

5. (8 kyu) http://www.codewars.com/kata/word-count
не открывается на сайте

6. (8 kyu) http://www.codewars.com/kata/remove-first-and-last-character-part-two

НЕ ПРОХОДИТ ТЕСТЫ( поправляю одно, падает другое)

function array(arr){
arr = arr.slice (1, -1)
arr = String(arr)
  if ( arr.length <= 1){
    return null
  }
return  arr.replace (/,+/g,` `).trim()
}

7.(8 kyu) https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number

function divisibleBy(numbers, divisor){
let result = []
for (let i = 0; i<numbers.length; i++){
  if(numbers[i]%divisor===0){
    result.push(numbers[i])
  }
}
  return result
}


8.(7 kyu) http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s)
{
  let length = s.length
  if(length%2===0){
   return  s.slice(length/2-1, length/2+1)
  }
  else if (length%2!==0){
   let number = Math.floor(length/2)
   return s[number]
  }
}


9.НЕ ПОНЯЛ ЧТО ВООБЩЕ НАДО)



10. (7 kyu) http://www.codewars.com/kata/sequence-generator-1

function sequence(n, pattern) {
  let result = [];
   for(let i = 0; i < n; i++)
      result.push(pattern);
  if(typeof pattern ==="function") {
    return  result.map(pattern);
  }
    return result;
}


11.(7 kyu) http://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}
​
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
 

12.(6 kyu) https://www.codewars.com/kata/base-conversion/


13.(6 kyu) http://www.codewars.com/kata/prefill-an-array

const prefill = (n = 0, value) => {
  const length = parseFloat(n)
  if (length < 0 || !Number.isInteger(length)) throw new TypeError(n + ' is invalid')
  return Array(length).fill(value)
}

14.(6 kyu) http://www.codewars.com/kata/closures-and-scopes

function createFunctions(n) {
  let callbacks = [];
let score = 0
  for (let i=0; i<n; i++) {
    callbacks.push(function() {
      return score++;
    });
  }
  
  return callbacks;
}


15.ТО ЧТО ТЫ ПОМОГАЛА НО ВСЕ РНАВНО НЕ ПРОХОДИТ ТЕСТЫ)

function createSecretHolder(secret) {
let _secret = secret
return {
  getSecret: function(){
    return _secret
  },
  setSecret: function(){
    _secret = secret
  }
}
}

16.(6 kyu) http://www.codewars.com/kata/stringing-me-along

function createMessage(str) {
    return function(next){
      if (next === undefined) {
        return str
      }
      return createMessage(str + " "+ next);
    }
}

17. (6 kyu) http://www.codewars.com/kata/array-helpers

 тож туплю чет

18 (6 kyu) http://www.codewars.com/kata/sum-of-digits-slash-digital-root/

function digital_root(n) {
  if(n<10){
    return n
  }
 n = String(n).split(``)
  let sum = 0
  for (let i = 0; i<n.length; i++){
    sum = sum + Number(n[i])
  }
  return digital_root(sum)
}
}