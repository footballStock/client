import React, {useState} from 'react';
import {SeasonData} from '../states/types';

const Block = ({data, width}: {data: string | number; width: number}) => {
  const design = `flex w-${width} h-8 justify-center items-center text-sm`;
  return <div className={design}>{data}</div>;
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
      <Block data={rank} width={8} />
      <div className="flex w-48 h-8 justify-start items-center text-sm">
        <img
          src={
            process.env.REACT_APP_BASEURL + '/media/logo/' + data.team + '.png'
          }
          alt="sample"
          className="object-contain w-6 h-6 mr-2"
        />
        {data.team}
      </div>
      <Block data={data.matches_played} width={8} />
      <Block data={data.wins} width={8} />
      <Block data={data.draws} width={8} />
      <Block data={data.loses} width={8} />
      <Block data={data.goals_for + '-' + data.goals_against} width={12} />
      <Block data={data.goal_difference} width={8} />
      <Block data={data.points} width={8} />
    </div>
  );
};

const Overview = ({seasonData}: {seasonData: SeasonData[]}) => {
  return (
    <div className="flex flex-col  gap-y-3 mx-2">
      <div className="flex pl-1 justify-between text-gray-400 border-b border-gray-300">
        <Block data={'#'} width={8} />
        <div className="flex w-48 h-8 justify-start items-center text-sm">
          Team
        </div>
        <Block data={'PL'} width={8} />
        <Block data={'W'} width={8} />
        <Block data={'D'} width={8} />
        <Block data={'L'} width={8} />
        <Block data={'+/-'} width={12} />
        <Block data={'GD'} width={8} />
        <Block data={'PTS'} width={8} />
      </div>
      {seasonData.map((item, index) => (
        <DataRow key={index} data={item} rank={index + 1} />
      ))}
    </div>
  );
};
export default Overview;
