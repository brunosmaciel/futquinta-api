import { Router } from 'express';

import { createBolaMurchaController } from '../useCases/create-bola-murcha';
import { deleteMOTMController } from '../useCases/delete-motm';
import { updateBolaMurchaController } from '../useCases/update-bola-murcha ';

const router = Router();
router.get('/', (req, res) => {
  res.json('bola-murcha route');
});
// ? Create
router.post('/:gameId/:playerId', async (req, res) => {
  return createBolaMurchaController.handle(req, res);
});

// ? Update
router.put('/:gameId/:playerId', (req, res) => {
  return updateBolaMurchaController.handle(req, res);
});

// ! Delete

router.delete('/:id', async (req, res) => {
  return deleteMOTMController.handle(req, res);
});

export default router;
