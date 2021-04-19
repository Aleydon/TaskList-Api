import { Router } from 'express';

import UserController from './controllers/UserController';

const route = Router();

// User Routes
route.get('/', UserController.index);
route.post('/', UserController.store);
route.put('/:id', UserController.update);
route.delete('/:id', UserController.destroy);

export default route;
