import express, { Router } from 'express';
import {getTasks, createTask,updateTask,deleteTask} from '../controllers/taskController.js';
const router = Router();

router.get('/obtenerTarea',getTasks);
router.post('/crearTarea',createTask);
router.put('/actualizarTarea',updateTask);
router.delete('/eliminarTarea',deleteTask);


export default router;

