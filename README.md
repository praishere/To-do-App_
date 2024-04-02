---
# Project Name : To-Do App

## Overview

This project is a simple Todo List application built with React.js, Redux, Bootstrap, HTML, javaScript(ES6). It allows users to add, update,View and delete todo items.


## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd project-directory
```

3. Install dependencies using npm:

```bash
npm install
```
4. Install bootstrap:

```bash
npm i bootstrap
```
5. Install redux using:

```bash
npm install @reduxjs/toolkit
```
 and
```bash
npm install react-redux
```
Then you can start your server (You can use Vite) and see the APP LIVE!!

## Running the Project

To run the project locally, follow these steps:

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Add a new todo item: Enter the todo item in the input field and click the "Add" button.
- View Listed Items
- Update a todo item: Click the edit icon next to the todo item, make changes in the input field, and click the "Update" button.
- Delete a todo item: Click the trash icon next to the todo item.

## Technologies Used

- React.js
- Redux
- Bootstrap
- Html
- Javascript(ES6)

## Folder Structure

```
project-directory
│   README.md
│   package.json
│   ...
└───src
    │   App.jsx
    │   main.jsx
    │   ...
    └───components
    │   │   TodoList.jsx
    │   │   TodoInput.jsx
    |   |   Card.jsx
    |   |   Update.jsx
    │   │   ...
    └───store
        │___features/todo
        |    |_todoSlice.js
        │___store.js
        
```

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the README.md file according to your project's specific details and requirements.
