import React from 'react';

const Cell = ({name, time, data}: {name: any; time: any; data: any}) => {
  return (
    <div className="flex flex-row justify-between w-full p-2 border-b border-black">
      <div className="flex-grow mr-4">
        <p>
          {name} <span className="text-gray-500">{time}</span>
        </p>
      </div>
      <div className="ml-4 font-bold">{data}</div>
    </div>
  );
};

const DisplayPanel = ({
  datas,
  names,
  times,
}: {
  datas: any;
  names: string[];
  times: string[];
}) => {
  return (
    <div className="flex flex-col mt-8">
      {datas &&
        names &&
        datas.map((data: any, i: number) => (
          <Cell name={names[i]} time={times[i]} data={data} key={i} />
        ))}
    </div>
  );
};

export default DisplayPanel;
