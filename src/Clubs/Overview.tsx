import React, {useState} from 'react';
import {SeasonData} from '../states/types';
import sampleImg from '../static/subClubs/bayern.png';

const Block = ({data}: {data: string | number}) => {
  return (
    <div className="flex w-10 h-8 justify-center items-center text-sm">
      {data}
    </div>
  );
};

const DataRow = ({data, rank}: {data: SeasonData; rank: number}) => {
  return (
    <div
      style={{
        display: 'flex',
        borderLeft:
          rank <= 4
            ? '2px solid #68D27C'
            : rank == 5
            ? '2px solid #1B45A1'
            : rank > 17
            ? '2px solid #EB564F'
            : '',
        marginLeft: rank <= 5 || rank > 17 ? '2px' : '4px',
        justifyContent: 'space-between',
      }}>
      <Block data={rank} />
      <div className="flex w-48 h-8 justify-start items-center text-sm">
        <img
          src={sampleImg}
          alt="sample"
          className="object-contain w-6 h-6 mr-2"
        />
        {data.team}
      </div>
      <Block data={data.matches_played} />
      <Block data={data.wins} />
      <Block data={data.draws} />
      <Block data={data.loses} />
      <Block data={data.goals_for - data.goals_against} />
      <Block data={data.goal_difference} />
      <Block data={data.points} />
    </div>
  );
};

const Overview = ({seasonData}: {seasonData: SeasonData[]}) => {
  return (
    <div className="flex flex-col  gap-y-3 mx-2">
      <div className="flex pl-1 justify-between text-gray-400 border-b border-gray-300">
        <Block data={'#'} />
        <div className="flex w-48 h-8 justify-start items-center text-sm">
          Team
        </div>
        <Block data={'PL'} />
        <Block data={'W'} />
        <Block data={'D'} />
        <Block data={'L'} />
        <Block data={'+/-'} />
        <Block data={'GD'} />
        <Block data={'PTS'} />
      </div>
      {seasonData.map((item, index) => (
        <DataRow key={index} data={item} rank={index + 1} />
      ))}
    </div>
  );
};
export default Overview;
