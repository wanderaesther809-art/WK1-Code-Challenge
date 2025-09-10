function speeddetector(speed) {
  const speedlimit = 70;
  const kmperpoint = 5;
  if (speed <= 70) {
    return "OK";
  } else {
    const points = Math.floor(speed - 70) / 5;

    if (points > 12) {
      return "license suspended";
    } else {
      return `points:${points}`;
    }
  }
}

console.log(speeddetector(85));
console.log(speeddetector(65));
console.log(speeddetector(40));
console.log(speeddetector(130));
