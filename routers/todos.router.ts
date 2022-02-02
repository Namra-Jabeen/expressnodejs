import  express from 'express';
import * as todos from '../todos/index';

const router = express.Router();

router.get('/todos',todos.listTodosController);

export default router;