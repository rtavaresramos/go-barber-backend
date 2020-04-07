import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ teste: 'Teste funcionando' });
});

export default routes;
