//Sum All Numbers in a Range

function sumAll(arr) {
  var sum = 0;
  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }
  for (var i = min; i <= max; i++)
    sum += i;
  return sum;
}

sumAll([4, 1]);

//------------------------------------------------------------------------------
//Diff Two Arrays

function diffArray(arr1, arr2) {

  var newArr = [];

  //Check arr1
  for (var i = 0; i <= arr1.length; i++) {
    var found = false;
    for (var j = 0; j <= arr2.length; j++)
      if (arr1[i] == arr2[j])
        found = true;
    if (!found)
      newArr.push(arr1[i]);
  }

  //Check arr2
  for (var i = 0; i <= arr2.length; i++) {
    var found = false;
    for (var j = 0; j <= arr1.length; j++)
      if (arr2[i] == arr1[j])
        found = true;
    if (!found)
      newArr.push(arr2[i]);
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [2, 3, 4, 5]);

//------------------------------------------------------------------------------
//Roman Numeral Converter

function convertToRoman(num) {
  var num4 = num3 = num2 = num1 = 0;
  var roman;

  var cTable = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
  };

  if (num <= 10 || num == 1000) { //Check if specific case 1000
    roman = cTable[num];
  } else if (num <= 100) {
    num2 = Math.floor(num % 1000 % 100 / 10) * 10;
    num1 = num % 1000 % 100 % 10;
    roman = cTable[num2] + cTable[num1];
  } else if (num <= 1000) {
    num3 = Math.floor(num % 1000 / 100) * 100;
    num2 = Math.floor(num % 1000 % 100 / 10) * 10;
    num1 = num % 1000 % 100 % 10;
    roman = cTable[num3] + cTable[num2] + cTable[num1];
  } else {
    num4 = Math.floor(num / 1000) * 1000;
    num3 = Math.floor(num % 1000 / 100) * 100;
    num2 = Math.floor(num % 1000 % 100 / 10) * 10;
    num1 = num % 1000 % 100 % 10;
    roman = cTable[num4] + cTable[num3] + cTable[num2] + cTable[num1];
  }
  return roman;
}

convertToRoman(36);

//------------------------------------------------------------------------------
//Wherefore art thou


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var properties = Object.keys(source);
  var control = false;

  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < properties.length; j++) {
      for (var k = 0; k < properties.length; k++) {
        control = false;
        if (collection[i][properties[k]] == source[properties[j]])
          control = true;
        else
          control = false;
      }
      if (control)
        arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
});

//------------------------------------------------------------------------------
//Search and Replace

function myReplace(str, before, after) { //preserve case sensitive
  if (before[0] == before[0].toUpperCase())
    after = after.replace(/\b\w/g, l => l.toUpperCase());
  var newStr = str.split(" ");
  newStr.splice(newStr.indexOf(before), 1, after);
  newStr = newStr.join(" ");
  return newStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

//------------------------------------------------------------------------------
//Sorted Union

function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var newArr = [];
  newArr.push(args[0][0]);
  for (var i = 0; i < args.length; i++)
    for (var j = 0; j < args[i].length; j++)
      if (!checkDuplicate(newArr, args[i][j]))
        newArr.push(args[i][j]);
  return newArr;

  function checkDuplicate(arr, x) {
    for (var i = 0; i < arr.length; i++)
      if (x == arr[i])
        return true;
    return false;
  }
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//------------------------------------------------------------------------------
//Spinal Tap Case

function spinalCase(str) {
  size = str.length;
  var arr = str.split("");
  for (var i = 1; i < size; i++) {
    var ch = arr[i];
    if (ch.toUpperCase() == ch && arr[i - 1] != " " && arr[i + 1] != " " && ch != " " && ch != "_" && ch != "-" && arr[i - 1] != "_")
      arr[i] = ' ' + arr[i];
  }
  newStr = arr.join("");
  newStr = newStr.toLowerCase();
  newStr = newStr.replace(/_/g, '-');
  newStr = newStr.replace(/ /g, '-');
  return newStr;
}


spinalCase("The_Andy_Griffith_Show");

//------------------------------------------------------------------------------
//Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  var count = 0;
  var prev = 1;
  var current = 1;
  if (num == 1) {
    return 1;
  }
  if (num == 2) {
    return 2;
  }

  while (current <= num) {
    if (current % 2 !== 0) {
      count += current;
    }
    temp = current;
    current = current + prev;
    prev = temp;
  }
  return count + 1;
}

sumFibs(10);

//------------------------------------------------------------------------------
//Sum All Primes

function sumPrimes(num) {
  var primes = [];

  for (var i = 1; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  var sum = 0;

  for (var i = 0; i < primes.length; i++) {
    sum += primes[i];
  }

  function isPrime(n) {
    if (n === 1) {
      return false;
    }
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  return sum;
}

sumPrimes(10);

//------------------------------------------------------------------------------
//Smallest Common Multiple

function smallestCommons(arr) {
  var found = false;

  var a = arr[0];
  var b = arr[1];
  if (a > b) {
    a = b;
    b = arr[0];
  }

  var i = b;

  do {
    found = true;
    for (var j = a; j <= b; j++) {
      if (i % j !== 0) {
        found = false;
        break;
      }
    }
    i++;
  } while (!found);

  return --i;
}

smallestCommons([23, 18]);

//------------------------------------------------------------------------------
//Finders Keepers
