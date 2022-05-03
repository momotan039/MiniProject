import { VideoGame } from 'src/app/model/VideoGame';
import { Ps1GamesData } from './Ps1GamesData';
import { Ps2GamesData } from './Ps2GamesData';
import { Ps3GamesData } from './Ps3GamesData';
export const allGames:Array<VideoGame>=Ps1GamesData.concat(Ps2GamesData,Ps3GamesData)
