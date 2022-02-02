import  express from 'express';
import * as todos from '../todos/index';

const router = express.Router();
router.get('/todos',todos.listTodosController);
router.get('/todos/:id',todos.getTodoController);
router.put('/todos',todos.updateTodoController);
router.delete('/todos',todos.deleteTodoController);
router.post('/todos',todos.createTodosController);
export default router;