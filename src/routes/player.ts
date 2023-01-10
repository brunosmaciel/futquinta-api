import { Router } from 'express';

import { createPlayerProfileController } from '../useCases/create-player-profile';
import { listAllPlayersProfileController } from '../useCases/list-all-players-profile';
import { listOnePlayerProfileController } from '../useCases/list-one-player-profile';
import { updatePlayerProfileController } from '../useCases/update-player-profile';
import { deletePlayerProfileController } from '../useCases/delete-player-profile ';

const router = Router();

//Real All
router.get('/', (req, res) => {
  return listAllPlayersProfileController.handle(req, res);
});

//Show one player
router.get('/:id', (req, res) => {
  return listOnePlayerProfileController.handle(req, res);
});
//Create
router.post('/', (req, res) => {
  return createPlayerProfileController.handle(req, res);
});
//update
router.put('/:id', (req, res) => {
  return updatePlayerProfileController.handle(req, res);
});
// router.put('/:playerId/stats', updateStats);
// router.put('/stats/updateAll', updateAllStatsAtOnce);
// router.put('/', (req, res) => {
//   res.status(400).json({ message: 'missing id param' });
// });

//delete
router.delete('/:id', (req, res) => {
  return deletePlayerProfileController.handle(req, res);
});

export default router;
