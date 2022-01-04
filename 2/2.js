const stackCalc = function (input) {
  input = input.replace(/\s+/g, " ").split(" ");
  console.log(input);
  result = [];

  input.forEach((element) => {
    if (element === "") {
      result.push("0");
      return;
    } else if (parseInt(element)) {
      result.push(parseInt(element));
    } else if (element === "+") {
      result.push(result.pop() + result.pop());
    } else if (element === "-") {
      result.push(result.pop() - result.pop());
    } else if (element === "*") {
      result.push(result.pop() * result.pop());
    } else if (element === "/") {
      result.push(result.pop() / result.pop());
    } else if (element === "POP") {
      result.pop();
    } else if (element === "DUP") {
      let temp = result.pop();
      result.push(temp);
      result.push(temp);
    } else {
      result.push("Invalid instruction: " + element + " ");
      return;
    }
  });
  console.log(result.join(""));
};

stackCalc("");
stackCalc("5 6 +");
stackCalc("3 DUP");

stackCalc("3 DUP +");
stackCalc("6 5 5 7 * - /");
stackCalc("5 8 + 4 5 1 + POP 13 + +");
stackCalc("5 8  POP 13 +");
stackCalc("x y +");


