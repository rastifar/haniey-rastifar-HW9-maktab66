const timeToEat = function (input) {
  const [time1, time2, time3] = ["7:00", "19:00", "23:00"];
  const jackEatTime = [
    new Date("2020-01-01 " + time1),
    new Date("2020-01-01 " + time2),
    new Date("2020-01-01 " + time3),
  ];

  input = convertInputStringToDateFormat(input);

  //define temp variable to get
  let tem = Infinity;

  jackEatTime.forEach((Element) => {
    if (
      Element.getTime() > input.getTime() &&
      tem > Element.getTime() - input.getTime()
    ) {
      tem = Element.getTime() - input.getTime();
    }
  });

  //printing out the result
  console.log([
    Math.floor((tem / (1000 * 60 * 60)) % 24),
    Math.floor((tem / (1000 * 60)) % 60),
  ]);
};

function convertInputStringToDateFormat(input) {

  input = input.split(" ");
  let myDate = input[0].split(":");

  //calculating the pm > adding 12 to hour
  if (input[1] == "p.m.") {
    myDate[0] = String(+myDate[0] + 12);
  }

  //convert input string to date format
  return new Date("2020-01-01 " + myDate.join(":"));
}

timeToEat("2:00 p.m.");
// [5, 0]
// 5 hours until the next meal, dinner
timeToEat("5:50 a.m.");
// [1, 10]



//  console.log("hour :" + Math.floor((tem / (1000 * 60 * 60)) % 24));
//console.log("minute:" + Math.floor((tem / (1000 * 60)) % 60));
//https://ricardometring.com/compare-date-and-time-in-javascript
