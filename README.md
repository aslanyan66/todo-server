# Todo List App

#### I put my task on AWS EC2 instance.
#### SERVER PART: http://ec2-18-158-223-9.eu-central-1.compute.amazonaws.com:8080
#### CLIENT PART: http://ec2-18-158-223-9.eu-central-1.compute.amazonaws.com/

## Installation

#### Clone this repository to your local machine. https://github.com/aslanyan66/todo-server

#### Backend use firebase firestore document db as `DATABASE`
#### Put your firebase credentials on src/firebase.js
#### See firebase config example there https://firebase.google.com/docs/web/setup

### Without Docker

#### To install the Todo application without Docker, you must have the following installed on your machine:

#### `Node.js` (version 16 or higher)
#### `Yarn` package manager

### Follow these steps to install the Todo application:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Put your firebase credentials on src/firebase.js
#### 3. Run `yarn install` to install the necessary dependencies.
#### 4. Run `yarn dev` to start the application.
#### 5. Open a web browser and go to http://localhost:8080 to view the server.

## Docker Usage

#### To run the Todo List application with Docker, you must have the following installed on your machine:

### `Docker`

### Development
#### To run the application in development mode with Docker, follow these steps:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `docker build -t image-name .` for create `Docker` image in development mode. 
#### 3. Check have you already created docker image `docker images`
#### 4. Run `docker run -d -p 8080:8080 image-name` 
#### 5. Open a web browser and go to http://localhost:8080 to view Apollo server.

## Usage

Once the application is running, client can create, read, update and delete todos.
3 minutes a time backend generate new todo and pass it to `DB` also notify to client through `Web Socket`
Backend use `firestore` for keep todos.

## Please note

#### ● Project does not include a configured Webpack and Babel for building the application. 
#### ● Project does not include a Swagger documentation.
#### ● Project does not include an authentication feature implemented.
#### ● Project does not include an error handling.
#### ● Project does not include a unit tests.
#### ● Project does not include a CI/CD.


#### However, if I had more time, I would have implemented these features.


## Contributing
Contributions are always welcome! If you find a bug or have a feature request, please open an issue. If you would like to contribute code, please fork the repository and submit a pull request.

