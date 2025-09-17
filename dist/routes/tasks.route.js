import { Router } from "express";
import Task from "../models/task.model.js";
const router = Router();
router.get("/tasks", async (req, res) => {
    const tasks = await Task.findAll();
    res.status(200).json({ tasks });
});
router.get("/tasks/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (!task)
        return res.status(404).json({ message: "Task not found" });
    res.status(200).json({ task });
});
router.post("/tasks", async (req, res) => {
    const { title, description } = req.body;
    const task = await Task.create({
        title,
        description,
    });
    res.status(201).json({ task });
});
router.put("/tasks/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (!task)
        return res.status(404).json({ message: "Task not found" });
    const { title, description } = req.body;
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    await task.save();
    res.status(200).json({ task });
});
router.delete("/tasks/:id", async (req, res) => {
    const task = await Task.destroy({ where: { id: req.params.id } });
    res.status(200).json({ task });
});
export default router;
//# sourceMappingURL=tasks.route.js.map