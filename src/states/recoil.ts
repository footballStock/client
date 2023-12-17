import {atom, selector} from 'recoil';
import {AWSConfig, ClubImage, Image, User} from './types';
import AWSInterface from '../interface/AWSInterface';

const config: AWSConfig = {
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID!,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY!,
  bucket: process.env.REACT_APP_BUCKET!,
  region: process.env.REACT_APP_REGION!,
};

export const awsState = atom<AWSInterface>({
  key: 'awsState',
  default: new AWSInterface(config),
});

export const bucketState = selector<AWS.S3>({
  key: 'bucketState',
  get: ({get}) => {
    const aws = get(awsState);
    return aws.connect();
  },
});

//* if page is refreshed, set the token using localStorage token that is stored at login
export const tokenState = atom<string>({
  key: 'tokenState',
  default: localStorage.getItem('token') || '',
});

export const teamsImageState = atom<Image[]>({
  key: 'teamsImageState',
  default: [],
});

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
