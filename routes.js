import { Router } from 'express';
import { homePage } from './src/controllers/homeController.js';
import { login, register } from './src/controllers/loginController.js';

const route = Router();

// HOME
route.get('/', homePage);

// LOGIN
route.get('/login', login);
route.post('/login/register', register);

export default route;
