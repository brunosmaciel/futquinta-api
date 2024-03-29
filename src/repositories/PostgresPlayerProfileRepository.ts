/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import { PlayerProfile } from '../entities/PlayerProfile';
import { IPlayerProfileRepository } from './IPlayersProfileRepository';
import { PlayersProfile } from '../services/prismaClient';
import { Prisma } from '@prisma/client';
export class PostgresPlayerProfileRepository implements IPlayerProfileRepository {
  async list(): Promise<PlayerProfile[]> {
    try {
      const playerProfileList = await PlayersProfile.findMany({
        orderBy: [{ goals: 'desc' }, { name: 'asc' }],
        include: {
          Stats: {
            include: {
              Game: true,
            },
          },
          MOTM: true,
        },
      });

      return playerProfileList;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async listById(id: number): Promise<PlayerProfile> {
    try {
      const listPlayerById = await PlayersProfile.findUniqueOrThrow({
        where: {
          id: id,
        },
        include: {
          games: true,
          Stats: {
            include: {
              Game: true,
              player: true,
            },
          },

          MOTM: true,
          _count: true,
        },
      });

      return listPlayerById;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new Error('Unable to find player in the database');
        }
      }
      throw err;
    }
  }
  async update(id: number, _reqBody: any): Promise<PlayerProfile> {
    try {
      const updatedPlayer = await PlayersProfile.update({
        where: {
          id: id,
        },
        data: { ..._reqBody },
      });
      return updatedPlayer;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new Error('Unable to find player in the database');
        }
      }
      throw new Error('Unknow argument passed');
    }
  }
  async delete(id: number): Promise<PlayerProfile> {
    try {
      const deletedUser = await PlayersProfile.delete({
        where: { id },
      });
      return deletedUser;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
          throw new Error('Unable to find player in the database');
        }
      }
      throw new Error('Internal server error');
    }
  }
  async save({
    name,
    goals,
    assists,
    victories,
    defeats,
    draws,
    shirtNumber,
    slug,
    role,
  }: PlayerProfile): Promise<PlayerProfile> {
    try {
      const newPlayerProfile = await PlayersProfile.create({
        data: {
          name,
          goals,
          assists,
          victories,
          defeats,
          draws,
          shirtNumber,
          slug,
          role,
        },
      });

      return newPlayerProfile;
    } catch (err: any) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new Error('Name must be unique');
        }
        if (err.code === 'P1012') {
          throw new Error(err.message);
        }
      }
      throw new Error('Internal Server Error');
    }
  }
  async setAvatar(
    id: number,
    imageUrl: string,
    shirtColor: 'GREEN' | 'WHITE'
  ): Promise<PlayerProfile> {
    try {
      if (shirtColor === 'GREEN') {
        const playerProfileUpdated = await PlayersProfile.update({
          where: {
            id,
          },
          data: {
            greenShirtpicture: imageUrl,
            currentPicture: 'GREEN',
          },
        });

        return playerProfileUpdated;
      }
      if (shirtColor === 'WHITE') {
        const playerProfileUpdated = await PlayersProfile.update({
          where: {
            id,
          },
          data: {
            whiteShirtpicture: imageUrl,
            currentPicture: 'WHITE',
          },
        });

        return playerProfileUpdated;
      }
      throw new Error('must inform color shirt');
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
