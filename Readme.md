Tasks API

A simple CRUD API for managing tasks using Express.js, Sequelize, and PostgreSQL.

🚀 Getting Started

1. Clone the repo
   git clone https://github.com/Darkness00132/tasks-api
   cd tasks-api

2. Install dependencies
   npm install

3. Setup environment variables

Create a .env file in the project root with:

DATABASE_URL=postgres://username:password@localhost:5432/tasksdb
PORT=5000

4. Start the server
   npm start

Server runs at:

http://localhost:5000

📌 API Endpoints
Create Task

POST /tasks
Body:

{
"title": "My first task",
"description": "This is a sample task"
}

Get All Tasks

GET /tasks

Get Task by ID

GET /tasks/:id

Update Task

PUT /tasks/:id
Body:

{
"title": "Updated Task",
"description": "Updated description"
}

Delete Task

DELETE /tasks/:id

🧪 Example with cURL

# Create

curl -X POST http://localhost:5000/tasks \
 -H "Content-Type: application/json" \
 -d '{"title":"Test Task","description":"Hello"}'

# List

curl http://localhost:5000/tasks

# Update

curl -X PUT http://localhost:5000/tasks/1 \
 -H "Content-Type: application/json" \
 -d '{"title":"Updated Task"}'

# Delete

curl -X DELETE http://localhost:5000/tasks/1

📂 Postman Collection

Import tasks-api.postman_collection.json into Postman or Insomnia to test all endpoints.

🎥 Demo Video

Record a short video showing:

Running the server.

Testing endpoints with Postman or curl.
