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

// stackCalc("") ➞ 0
// StackCalc("5 6 +") ➞ 11
// StackCalc("3 DUP +") ➞ 6
// StackCalc("6 5 5 7 * - /") ➞ 5
//  StackCalc("x y +") ➞ Invalid instruction: x
// else if(element === ""){
//     result.push("0")
//     return false
// }
// def run(instructions):
//   lst = instructions.split()
//   stack = []

//   if not lst:
//     return 0

//   for i in lst:
//     if i.isdigit():
//       stack.append(int(i))
//     elif i == "+":
//       stack.append(stack.pop() + stack.pop())
//     elif i == "-":
//       stack.append(stack.pop() - stack.pop())
//     elif i == "*":
//       stack.append(stack.pop() * stack.pop())
//     elif i == "/":
//       stack.append(stack.pop() / stack.pop())
//     elif i == "DUP":
//       stack.append(stack[-1])
//     elif i == "POP":
//       stack.pop()
//     else:
//       return "Invalid instruction: " + i
//   return stack.pop()

// assert run('6 5 5 7 * - /') == 5
// assert run('4 2 4 * 3 + 5 + / 5 -') == 1
// assert run('5 8 + 4 5 1 + POP 13 +') == 17
// assert run('x') == 'Invalid instruction: x'
// assert run('') == 0
