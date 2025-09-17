import "dotenv/config";
import express from "express";
import sequelize from "./db/db.js";
import tasksRouter from "./routes/tasks.route.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
}
catch (e) {
    console.log(e);
}
app.use(tasksRouter);
app.listen(5000, () => console.log("server is running on port 5000"));
//# sourceMappingURL=index.js.map