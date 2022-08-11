// 1. Radian to Degree
function radianToDegree(radian) {
  if (typeof radian === "numder") {
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

// 2. Java Seript File check
function isJavaScriptFile(fileName) {
  if (typeof fileName === "string") {
    let result = fileName.endsWith(".js");
    return result;
  } else {
    return "Please enter a string as input";
  }
}
const userInput = "java.png";
const result = isJavaScriptFile(userInput);
console.log(result);

// 3. Oil price Calculation
function oilPrice(disel, petrol, octen) {
  const diselPrice = 114;
  const petrolPrice = 130;
  const octenPrice = 135;
  if (
    typeof disel === "number" &&
    typeof petrol === "number" &&
    typeof octen === "number"
  ) {
    const result =
      diselPrice * disel + petrolPrice * petrol + octenPrice * octen;
    return result;
  } else {
    return "Please insert a number as unit";
  }
}

const diselUnit = 30;
const petrolUnit = 20;
const octenUnit = 10;

const totalPrice = oilPrice(diselUnit, petrolUnit, octenUnit);
console.log(totalPrice);

// 4. Public bus fare calculation
function publicBusFare(numberOfPeople) {
  if (typeof numberOfPeople === "number") {
    const busCapacity = 50;
    const microbusCapacity = 11;
    const busFare = 250;
    const restPeopleOfBus = numberOfPeople % busCapacity;
    const restPeople = restPeopleOfBus % microbusCapacity;
    const result = restPeople * busFare;
    return result;
  } else {
      return "Please insert a number as people's number.";
  }
}
const userInput = 365;
const totalBusFare = publicBusFare(userInput);
console.log(totalBusFare);

// 5. Best Friend Check
function isBestFriend(inputOne, inputTwo) {
  if (typeof inputOne ==="object" && typeof inputTwo === "object") {
    if (
      inputOne.name === inputTwo.friend &&
      inputOne.friend === inputTwo.name
    ) {
      return true;
    } else {
      return false;
    }
  }
}

const inputOne = { name: "Rashed", friend: "Sajib" };
const inputTwo = { name: "Koushiq", friend: "Rashed" };
const result = isBestFriend(inputOne, inputTwo);
console.log(result);
