import { Request, Response } from 'express';
import { DeleteBolaMurchaUseCase } from './delete-bola-murcha-usecase';

export class DeleteBolaMurchaController {
  constructor(private DeleteBolaMurcha: DeleteBolaMurchaUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedMOTM = await this.DeleteBolaMurcha.execute(+id);

      res.status(200).json({
        message: `MOTM with id ${deletedMOTM.id} deleted with sucess `,
        data: { ...deletedMOTM },
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
