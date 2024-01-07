import express from 'express';
import HomeController from '../app/controllers/HomeController';

const routes = express.Router();

routes.get('/', HomeController.home);
routes.post('/homeFormated', HomeController.homeFormated);

export default routes;