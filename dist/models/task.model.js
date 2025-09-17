import { DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";
class Task extends Model {
}
Task.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
}, { sequelize });
export default Task;
//# sourceMappingURL=task.model.js.map