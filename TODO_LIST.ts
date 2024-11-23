import inquirer from "inquirer";
let taskList = [];
let taskList2 = [];
let condtion = true;
const answer = await inquirer.prompt([
    {
        message : "Hello Please Enter the no Task",
        type: "number",
        name:"NoOfTasks"
    }
]);

let i = 0;
while(i < answer.NoOfTasks)
{
    const answer = await inquirer.prompt([
        {
            message : "Hello Please Enter the Task",
            type: "input",
            name:"taskName" 
        }
    ]);
    taskList[i] = answer.taskName;
    i++;
}

let j = 0;
while(j < taskList.length)
{
    console.log(`Your Task No ${j+1} is ${taskList[j]}`);
    j++;
}

while(condtion)
{
    const answer2 = await inquirer.prompt([
        {
            message : "Hello Please Enter the Task",
            type: "input",
            name:"taskName" 
        },
        {
            name:"addMore",
            type: "confirm",
            message : "Do you want to Continue",
            default: false
        }
    ]);

    taskList2.push(answer2.addMore);
    condtion = answer2.addMore;
}