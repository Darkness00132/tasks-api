import { DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

interface task {
  id?: number;
  title: string;
  description: string;
}

class Task extends Model<task> {
  declare id?: number;
  declare title: string;
  declare description: string;
}

Task.init(
  {
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
  },
  { sequelize }
);

export default Task;
