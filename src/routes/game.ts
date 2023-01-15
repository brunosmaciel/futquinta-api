import { Router } from 'express';
import { createGameController } from '../useCases/create-game';
import { deleteGameController } from '../useCases/delete-game';
import { findAllGamesController } from '../useCases/find-all-games';
import { findOneGameController } from '../useCases/find-one-game';
import { updateGameController } from '../useCases/update-game';

const gameRouter = Router();
//*List
gameRouter.get('/', (req, res) => {
  return findAllGamesController.handle(req, res);
});
//*List one
gameRouter.get('/:id', (req, res) => {
  return findOneGameController.handle(req, res);
});

//*Create
gameRouter.post('/', (req, res) => {
  return createGameController.handle(req, res);
});

//* Update

gameRouter.put('/:id', (req, res) => {
  return updateGameController.handle(req, res);
});

gameRouter.delete('/:id', (req, res) => {
  return deleteGameController.handle(req, res);
});

export default gameRouter;