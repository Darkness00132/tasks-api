Got it ✅ you already exported `postman_collection.json`, so in the README we’ll just **tell them how to use it** (import into Postman/Insomnia) and mention that it contains all endpoints.
Here’s the updated **final README**:

```markdown
# Tasks API

Simple CRUD API for tasks using **Express.js**, **Sequelize**, and **PostgreSQL**.

---

## 🚀 Setup

1. Get a PostgreSQL connection URL (example: `postgres://username:password@localhost:5432/tasksdb`)
2. Create a `.env` file in the project root:
```

SQL_URL=your_postgres_url
PORT=5000

````
3. Install dependencies and start the server:
```bash
npm install
npm start
````

Server runs at: `http://localhost:5000`

---

## 📌 Endpoints

- **GET /tasks** → list all tasks
- **GET /tasks/\:id** → get task by id
- **POST /tasks** → create task

  ```json
  {
    "title": "My Task",
    "description": "Some description"
  }
  ```

- **PUT /tasks/\:id** → update task
- **DELETE /tasks/\:id** → delete task

---

## 🧪 Postman Collection

A Postman collection is included in the project root:
👉 [postman_collection.json](./postman_collection.json)

### How to use:

1. Open **Postman** (or **Insomnia**)
2. Click **Import**
3. Select the file `postman_collection.json` from the project root
4. All endpoints will be available and ready to test

---

## 📂 Repository

GitHub: [https://github.com/Darkness00132/tasks-api](https://github.com/Darkness00132/tasks-api)

## video url

https://drive.google.com/file/d/11WEXfIm-CRIbYKM1WO__LuM9i-RCbbyl/view?usp=sharing
