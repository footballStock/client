import React from 'react';
import {StockOverview, TeamImage} from 'src/states/types';
import TableSheet from './TableSheet';
import AD from '../static/AD.png';

const MainOverview: React.FC<{
  teamsImage: TeamImage[];
  teamsStockOverview: StockOverview[];
}> = ({teamsImage, teamsStockOverview}) => {
  return (
    <section>
      <div>
        <img src={AD} alt="advertise" className=" w-[60rem] h-[24rem]"></img>
        <TableSheet
          teamsImage={teamsImage}
          teamsStockOverview={teamsStockOverview}
        />
      </div>
    </section>
  );
};

export default MainOverview;
