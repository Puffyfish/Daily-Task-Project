# Daily Task Project

This repository contains code for the Daily Task Project, a simple to-do list application that allows users to create and manage tasks on a daily basis.
It uses the ANGULAR framework and a fake json database (db.json) to get a fake REST API.

## Pages

1. Tasks Page - for the unique task that needs to be done per day.
2. Reminders Page - for the repeating daily task like take vitamins, drink water, exercise
3. Login Page - to showcase how a basic authentication is done

## Installation

To run this application, you will need to have Node.js installed on your system. Once you have Node.js installed, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run `npm install` to install all required dependencies.
4. Run `npm start` to start the application.

## Usage

To use the Daily Task Project, follow these steps:

1. Open your web browser and navigate to `http://localhost:4200`.
2. Create a new task by entering a task name and click ENTER in your keyboard.
3. Mark a task as completed by clicking the "check" icon next to the task name.
4. Delete a task by clicking the "trash" icon next to the task name.

## Code Structure

The Daily Task Project code is organized into several files and directories:

- `index.js`: The main entry point for the application.
- `public/`: Contains static assets such as CSS and images.
- `src/`: Contains the main source code for the application.
  - `components/`: Contains Angular components used to build the UI.
  - `App.js`: The main Angular component that renders the application.
  - `index.js`: The main JavaScript file that initializes the Angular app.

## Examples

Here's a screenshot of the Daily Task Project in action:

//////// to be added in the future ////////

## Known Issues

- The application does not currently support drag-and-drop functionality for reordering tasks.
- The application does not persist tasks across browser sessions.

## Contributing

If you would like to contribute to the Daily Task Project, feel free to submit a pull request.
