// 1.Is it even?

function testEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

// 2.Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let distanceTwoGallons = mpg * fuelLeft;
  if (distanceTwoGallons >= distanceToPump) {
    return true;
  }
  return false;
};

// 3.You Can't Code Under Pressure

function doubleInteger(i) {
  i = i * 2;
  return i;
}

// 4.Largest 5 digit number in a series

function solution(digits) {
  let result = 0;

  for (let i = 0; i < digits.length; i++) {
    let next = digits.substr(i, 5);
    if (result < Number(next)) {
      result = Number(next);
    }
  }
  return result;
}

// 5.Graceful Tipping

function gracefulTipping(bill) {
  let sumTea = bill * 1.15;
  let integer = Math.ceil(sumTea);
  let sum = 0;
  if (sumTea < 10) {
    return integer;
  } else if (sumTea > 10) {
    for (let i = 0; integer % 5 !== 0; i++) {
      integer = integer + i;
      return integer + 1;
    }
  }
}

// 6.By 3, or not by 3? That is the question . .

function divisibleByThree(str) {
  let result = ``;

  if (str % 3 === 0) {
    return true;
  }
  return false;
}

// 7.N-th Fibonacci

function c(n) {
  if (n === 1) {
    return 0;
  }
  let three = 1;
  let two = 1;
  for (let i = 3; i < n; i++) {
    let four = two + three;
    two = three;
    three = four;
  }
  return three;
}

// 8.Multiples of 3 or 5

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }

  return sum;
}

// 9.Remove First and Last Character

function removeChar(str) {
  return str.slice(1, -1);
  //You got this!
}

// 10.Remove String Spaces (не сказал бы что это 8 сложность))

/*  
  return x.replace(/\s/g, '')
*/

function noSpace(x) {
  let result = ``;
  for (let i = 0; i < x.length; i++) {
    let str = x.slice(i, i + 1);
    let n = str.trim();
    result = `${result}${n}`;
  }
  return result;
}

// 11.Are You Playing Banjo?

/*
  name[0].toLowerCase() == 'r'
  /r/i.test(name[0])
*/

function areYouPlayingBanjo(name) {
  if (name[0] === `r` || name[0] === `R`) {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}

// 12.Greet Me

var greet = function (name) {
  name = name.toLowerCase();
  let N = name[0].toUpperCase();
  let M = name.slice(1, name.length);
  return `Hello ${N}${M}!`;
};

// 13.Absent vowel

//ВОТ ЧТО ТВОРИЛ НЕ ЗНАЯ О МЕТОДЕ index of)))))

function absentVowel(x) {
  let result = ``;
  x = x.toUpperCase;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== `A`) {
      return (result = 0);
    }
    if (x[i] !== `E`) {
      return (result = 1);
    }

    if (x[i] !== `I`) {
      return (result = 2);
    }

    if (x[i] !== `O`) {
      return (result = 3);
    }

    if (x[i] !== `U`) {
      return (result = 4);
    }

    return result;
  }
}

// НУ А ЭТО РАБОЧИЙ УЗНАВ О МЕТОДЕ INDEXOF

function absentVowel(x) {
  x = x.toUpperCase();
  if (x.indexOf(`A`) === -1) {
    return 0;
  } else if (x.indexOf(`E`) === -1) {
    return 1;
  } else if (x.indexOf(`I`) === -1) {
    return 2;
  } else if (x.indexOf(`O`) === -1) {
    return 3;
  } else if (x.indexOf(`U`) === -1) {
    return 4;
  }
}

// 16.The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let start = Date.parse(currentDate);
  let finish = Date.parse(expirationDate);
  if (enteredCode !== correctCode) {
    return false;
  }
  if (start > finish) {
    return false;
  }
  return true;
}

// 17.Century From Year

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

// 20.Milk and Cookies for Santa

function timeForMilkAndCookies(date) {
  let moth = date.getMonth();
  let day = date.getDate();
  if (moth === 11 && day === 24) {
    return true;
  }
  return false;
}

//18, 19, 15, 14 не забыть сделать

/* 
  14 - Validate Password
  https://javascript.info/regexp-character-classes
*/

function validPass(password) {
  // More than 3 characters but less than 20
  if (password.length <= 3 || password.length >= 20) {
    return "INVALID";
  }
  /*
    Must contain only alphanumeric characters
    \d - only numbers
    a-zA-Z- only letters
    + - one or more
  */
  if (!/^[\da-zA-Z]+$/.test(password)) {
    return "INVALID";
  }
  /*
    Must contain letters and numbers
    At least one number AND one letter
    \d - number
    a-zA-Z - letter
    && - AND both should return TRUEs
  */
  if (!(/\d/.test(password) && /[a-zA-Z]/.test(password))) {
    return "INVALID";
  }
  return "VALID";
}


/* 
  15 - formatDuration
*/

function formatDuration(seconds) {
  if (!seconds) {
    return 'now'
  }
  const times = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1
  }
  const chunks = Object.keys(times).reduce((acc, period, i, array) => {
    const val = Math.floor(seconds / times[period]);
    let name = period;
    if (val) {
      if (val > 1) {
        name += 's';
      }
      acc.push(`${val} ${name}`)
      seconds = seconds % times[period]
    }
    return acc;
  }, [])
  return chunks.slice(0, -1).join(', ') + (chunks.length > 1 ? ` and ${chunks.slice(-1)}` : chunks[0]);
}

/* 
  19 - fizzBuzzCuckooClock
*/
function fizzBuzzCuckooClock(time) {
  // get an hour and minutes
  let a = time.split(':').map(v => parseInt(v));
  // hour
  let m = a[1]
  // minutes
  let h = a[0];
  h = h === 0 ? 12 : h > 12 ? h - 12 : h;
  // On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
  if (m === 0) return ('Cuckoo '.repeat(h)).trim();
  // On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once
  if (m === 30) return 'Cuckoo';
  // With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz
  if (m % 3 === 0) {
    if (m % 5 === 0) return 'Fizz Buzz';  
    return 'Fizz';  
  }
  if (m % 5 === 0) return 'Buzz'; 
  // but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.
  return 'tick';
}