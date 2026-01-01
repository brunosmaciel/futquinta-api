export interface ICreatePlayerProfileDTO {
  name: string;
  goals: number;
  assists: number;
  victories: number;
  defeats: number;
  draws: number;
  slug: string;
  playerPosition: 'OUTFIELDPLAYER' | 'GOALKEEPER';
  greenShirtpicture: string | null;
  whiteShirtpicture: string | null;
  shirtNumber: number | null;
  currentPicture: string | null;
  role: 'PERMANENT' | 'GUEST';
}
