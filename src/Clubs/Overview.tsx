import React, {useState} from 'react';
import {SeasonData} from '../states/types';

const DataRow = ({data, rank}: {data: SeasonData; rank: number}) => {
  return (
    <div>
      {rank} {data.team} {data.matches_played} {data.wins} {data.loses}{' '}
      {data.draws} {data.goals_for}-{data.goals_against} {data.goal_difference}{' '}
      {data.points}{' '}
    </div>
  );
};

const Overview = ({seasonData}: {seasonData: SeasonData[]}) => {
  return (
    <div>
      <div># Team PL W D L +/- GD PTS</div>
      {seasonData.map((item, index) => (
        <DataRow key={index} data={item} rank={index + 1} />
      ))}
    </div>
  );
};
export default Overview;
