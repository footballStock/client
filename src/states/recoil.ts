import {atom} from 'recoil';
import {TeamImage} from './types';

export const teamsImageState = atom<TeamImage[]>({
  key: 'teamsImageState',
  default: [],
});
