import  express from 'express';
import * as todos from '../todos/index';

const router = express.Router();
router.get('/todos',todos.listTodosController);
router.delete('/todos',todos.deleteTodoController);
router.post('/todos',todos.createTodosController);
export default router;