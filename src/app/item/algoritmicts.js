function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let min = arr.slice(0, 4).reduce((a, b) => a + b);
  let max = arr.slice(1, 5).reduce((a, b) => a + b);

  console.log(min, max);
}

console.log(miniMaxSum([6, 1, 3, 4, 5]));

function birthdayCakeCandles(ar) {
  let max = Math.max(...ar);
  console.log(max)
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === max) {
      count++;
    }
  }
  console.log(count);
  return count
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));

function timeConversion(s){
  // Write your code here
  // number number number string
  let time = s.split(':');  
  let hour = time[0];
  let min = time[1];
  let sec = time[2];
  let splitSec = sec.split('');  
  let secNum = splitSec.slice(0,2).join('');
  let ampm = splitSec.slice(2,4).join('');
  console.log(secNum, ampm)
  if (ampm === 'PM') {
    if (hour === '12') {
      hour = hour;
    } else {
      hour = parseInt(hour) + 12;
    }
  } else {
    if (hour === '12') {
      hour = '00';
    } else {
      hour = hour;
    }
  }
  let newString = hour + ':' + min + ':' + secNum;
  console.log(newString)
  return newString;
  
}
console.log(timeConversion('12:05:39AM'));

function gradingStudents(grades) {
  let newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let nextMultiple = Math.ceil(grades[i] / 5) * 5;
      if (nextMultiple - grades[i] < 3) {
        newGrades.push(nextMultiple);
      } else {
        newGrades.push(grades[i]);
      }
    } else {
      newGrades.push(grades[i]);
    }
  }
  return newGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleCount++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      orangeCount++;
    }
  }
  console.log(appleCount, orangeCount);
}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));

function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    if (x1 === x2) {
      return 'YES';
    } else {
      return 'NO';
    }
  } else {
    //diference between x1 and x2 position
    let x1x2 = x2 - x1;
    console.log(x1x2);
    //diference between v1 and v2 velocity
    let v1v2 = v2 - v1;
    console.log(v1v2);
    //diference between x1 and x2 position and diference between v1 and v2 velocity    
    let x1x2v1v2 = x1x2 / v1v2;
    console.log(x1x2v1v2);
    console.log(x1x2v1v2 % 1 === 0);
    if (v2< v1&&x1x2v1v2 % 1 === 0) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
}
console.log(kangaroo(0,2,5,3));