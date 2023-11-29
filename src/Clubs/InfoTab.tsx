import React, {useState} from 'react';
import News from './News';
import Overview from './Overview';
import Squad from './Squad';
import Financial from './Financial';
import {FinancialData} from '../states/types';

const tablist = ['Overview', 'Squad', 'News', 'Financial'];
const TabBtn = ({
  tabName,
  isSelected,
  setTab,
}: {
  tabName: string;
  isSelected: Boolean;
  setTab: any;
}) => {
  return (
    <div
      onClick={() => setTab(tabName)}
      className={
        isSelected
          ? 'text-black m-4 text-lg font-semibold border-b-2 border-b-black'
          : 'text-gray-400 m-4 text-lg font-semibold'
      }>
      {tabName}
    </div>
  );
};

const TabContents = ({
  curTab,
  fullData,
  financialData,
}: {
  curTab: string;
  fullData: any;
  financialData: FinancialData;
}) => {
  switch (curTab) {
    case 'Overview':
      return <Overview seasonData={fullData.season} />;
    case 'Squad':
      return <Squad playerDict={fullData.player} />;
    case 'Financial':
      return <Financial financialData={financialData} />;
    default:
    case 'News':
      return <News newsList={fullData.news} />;
  }
};

const InfoTab = ({
  fullData,
  financialData,
}: {
  fullData: any;
  financialData: FinancialData;
}) => {
  const [tab, setTab] = useState<string>('Overview');

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-4">
        {tablist.map(item => (
          <TabBtn
            key={item}
            tabName={item}
            isSelected={item == tab}
            setTab={setTab}
          />
        ))}
      </div>
      <TabContents
        curTab={tab}
        fullData={fullData}
        financialData={financialData}
      />
    </div>
  );
};

export default InfoTab;
