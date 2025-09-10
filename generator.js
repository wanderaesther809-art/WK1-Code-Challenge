function gradegenerator(marks) {
  if (marks > 79 && marks <= 100) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 49 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else if (marks < 40 && marks >= 0) {
    return "E";
  } else {
    return "invalid input";
  }
}

console.log(gradegenerator(85));
console.log(gradegenerator(64));
console.log(gradegenerator(52));
console.log(gradegenerator(46));
console.log(gradegenerator(24));
console.log(gradegenerator(890));
