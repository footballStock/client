import React, {useState} from 'react';

const Block = ({name, data}: {name: string; data: string}) => {
  return (
    <div className="flex flex-col justify-center items-center w-40 h-20">
      <div className="text-sm">{data}</div>
      <div className="text-gray-400 text-xs">{name}</div>
    </div>
  );
};

const SideView = ({fullData}: {fullData: any}) => {
  const venueData = fullData.venue;
  return (
    <div className="m-8">
      <div className="flex flex-col bg-white shadow-lg">
        <div className="font-semibold m-1">Stadium</div>
        <div className="flex flex-row items-center">
          <Block name={'city'} data={venueData.city} />
          <div className="w-px h-14 bg-gray-200" />
          <Block name={'name'} data={venueData.name} />
        </div>
        <div className="w-64 h-px bg-gray-200" />
        <div className="flex flex-row items-center">
          <Block name={'surface'} data={venueData.surface} />
          <div className="w-px h-14 bg-gray-200" />
          <Block name={'capacity'} data={venueData.capacity} />
        </div>
      </div>
    </div>
  );
};

export default SideView;
