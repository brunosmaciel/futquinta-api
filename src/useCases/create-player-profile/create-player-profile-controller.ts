import { ICreatePlayerProfileDTO } from './create-player-profile-dto';
import { Request, Response } from 'express';
import { CreatePlayerProfile } from './create-player-profile-usecase';
import { slugify } from '../../functions/slugfy';
export class CreatePlayerProfileController {
  constructor(private CreatePlayerProfileUseCase: CreatePlayerProfile) {}
  async handle(req: Request, res: Response) {
    const {
      name,
      goals = 0,
      assists = 0,
      victories = 0,
      defeats = 0,
      draws = 0,
      shirtNumber = null,
      greenShirtpicture = null,
      whiteShirtpicture = null,
      currentPicture = null,
      playerPosition,
      role = 'PERMANENT',
    } = req.body as ICreatePlayerProfileDTO;
    try {
      console.log(req.body.playerPosition);
      const slug = slugify(name);
      const newPlayerProfile = await this.CreatePlayerProfileUseCase.execute({
        name,
        goals,
        assists,
        victories,
        defeats,
        draws,
        whiteShirtpicture,
        greenShirtpicture,
        currentPicture,
        shirtNumber,
        playerPosition,
        slug,
        role,
      });

      res.status(201).json(newPlayerProfile);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
