import {atom} from 'recoil';
import {TeamImage, User} from './types';

export const teamsImageState = atom<TeamImage[]>({
  key: 'teamsImageState',
  default: [],
});

export const userState = atom<User>({
  key: 'userState',
  default: {profile: {src: '', alt: ''}, nickname: '', uid: 0},
});

export const tokenState = atom<string | null>({
  key: 'tokenState',
  default: null,
});
