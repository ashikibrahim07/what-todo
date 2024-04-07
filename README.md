# What-Todo?!
This is What Todo a PERN Stack Todo App. 
This project implements a simple ToDo application using the PERN stack: PostgreSQL, Express.js, React, and Node.js. This app allows you to manage your tasks, mark them as complete, and remove them from your list.
This is one of my Capstone Projects from the Udemy Web Developer Bootcamp, which I have completed.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Video Demo](#video-demo)
- [SnapShots](#snapshots)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)
  
## Features

- Create new tasks with descriptions.
- Edit tasks as per need.
- Delete tasks from the list.
- View all tasks and their statuses.

## Technologies

- Front-End: `React.js`, `HTML`, `CSS`, `Bootstrap`, and `JavaScript` 
- Back-End: `Express.js` and `Node.js`
- Database: `PostgreSQL`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ashikibrahim07/what-todo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd what-todo
   ```

3. Install dependencies for both the server and client:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Set up your PostgreSQL database and update the database connection details in `server/db.js`.
   
5. To run the server, you can use either `nodemon` or `node index.js`:

### Using nodemon:

If you have `nodemon` installed globally, you can use the following command to start the project:

```bash
nodemon index.js
```
This will automatically restart the server whenever you make changes to your files.

### Using node:
If you prefer to use node, you can start the project with the following command:

```bash
node index.js
```
This will start the server, but you'll need to manually restart it after making changes to your files.


6. The server will be accessible at `http://localhost:8000`.

7. Run the server and client concurrently:

   ```bash
   npm run dev
   ```

8. The app will be accessible at `http://localhost:3000`.

## Usage

- Create tasks/ todos.
- Get all details of todos
- Delete and Update todos.

# Video Demo

You can view the video demo of the what todo [here](https://www.youtube.com/watch?v=2N2Pg4Ezt6A).

## SnapShots
![What Todo](https://github.com/ashikibrahim07/what-todo/blob/main/Screenshot%20(372).png)

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## Author

Ashik Ibrahim S

## License
This project is licensed under the MIT License.

