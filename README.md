
# Task Management Console Application

## Description

This console-based application allows users to manage a task list by adding tasks and viewing them sequentially. Users can specify the initial number of tasks and later decide to add more tasks interactively.

## Features

- **Task Initialization**: Specify the number of initial tasks and enter their details.
- **Task Display**: View all the tasks entered.
- **Dynamic Task Addition**: Option to add more tasks after the initial list is created.

## Requirements

- Node.js
- Inquirer package (Install using `npm install inquirer`)

## Installation

1. Clone the repository or download the code to your local machine.
2. Navigate to the project folder in the terminal.
3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   node index.js
   ```

## Usage

1. When the application starts, you'll be prompted to enter the number of tasks.
2. Enter the task names one by one.
3. After displaying the initial list of tasks, you'll be prompted to add more tasks if needed.
4. You can keep adding tasks until you choose not to continue.

### Sample Interaction:

```text
Hello Please Enter the no Task: 3

Hello Please Enter the Task: Buy groceries
Hello Please Enter the Task: Finish project
Hello Please Enter the Task: Call mom

Your Task No 1 is Buy groceries
Your Task No 2 is Finish project
Your Task No 3 is Call mom

Hello Please Enter the Task: Schedule meeting
Do you want to Continue (yes/no): yes

Hello Please Enter the Task: Pay bills
Do you want to Continue (yes/no): no
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
