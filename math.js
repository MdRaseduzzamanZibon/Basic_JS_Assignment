// 1. Radian to Degree
function radianToDegree(radian) {
  if (typeof radian === "number") {
    const degree = radian * 57.2958;
    let deg = parseFloat(degree.toFixed(2));
    return deg;
  } else {
    return "Please enter a number as input";
  }
}
const userInput = 25;
const result = radianToDegree(userInput);
console.log(result);
