# Daily Task Project

This repository contains code for the Daily Task Project, a simple to-do list application that allows users to create and manage tasks on a daily basis.
It uses the ANGULAR framework and a fake json database (db.json) to get a fake REST API.

This project is still IN PROGRESS.

![image](https://github.com/Puffyfish/Daily-Task-Project/assets/93864592/b8892749-72ba-447d-8c61-8d34eb1f717c)

## Pages

1. Tasks Page - for the unique task that needs to be done per day. It has complete (to mark task as complete), delete, filter (filter completed and not completed tasks) functionalities.
2. Login Page - to showcase how a basic authentication is done
3. Register Page - to add new user

## Installation

To run this application, you will need to have Node.js installed on your system. Once you have Node.js installed, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run `npm install` to install all required dependencies.
4. In auth.service and todos.service, comment out 'private api='https://my-json-server.typicode....' because this just points to my repository.
5. Uncomment 'private api='http://localhost:3000/...' so that you can use json server in your local machine
6. Open your terminal. CD to your project. Run 'npm run server' to run json server.
7. Open a different terminal. CD to your project again. Run `ng serve` to start the application.

## Usage

To use the Daily Task Project, follow these steps:

1. Open your web browser and navigate to `http://localhost:4200`.
2. Create a new task by entering a task name and click ENTER in your keyboard.
3. Mark a task as completed by clicking the "check" icon next to the task name.
4. Delete a task by clicking the "trash" icon next to the task name.
