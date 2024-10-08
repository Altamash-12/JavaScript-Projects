// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let courseName = "Build Real World responsive website by jonas schmedtmann";
let price = 599;
let mainGoals = [
  "Learn Html",
  "Learn Css",
  "Learn to build real world responsive website",
];

// 2) Output ("alert") the three variable values

// alert(courseName);
// alert(price);
// alert(mainGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter

let groupedVariable = [courseName, price, mainGoals];
let ayan = {
    name: courseName,
    amount: price,
    goal: mainGoals,
};
// alert(ayan.name)
// alert(ayan.amount)
// alert(ayan.goal)

// 4) Also output the second element in your "main goals" variable

alert(ayan.goal[1])

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function abc(list, listItem){
    let result = list[listItem]
    return result
}

// 6) Execute your custom command from (5) and output ("alert") the result

console.log(abc(ayan.goal, 1 ));