import React, {useState} from 'react';
import News from './News';
import Overview from './Overview';
import Squad from './Squad';

const tablist = ['overview', 'squad', 'news'];
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
      style={{color: isSelected ? 'black' : 'gray'}}>
      {tabName}
    </div>
  );
};

const TabContents = ({curTab, fullData}: {curTab: string; fullData: any}) => {
  switch (curTab) {
    case 'overview':
      return <Overview seasonData={fullData.season} />;
    case 'squad':
      return <Squad playerDict={fullData.player} />;
    default:
    case 'news':
      return <News newsList={fullData.news} />;
  }
};

const InfoTab = ({fullData}: {fullData: any}) => {
  const [tab, setTab] = useState<string>('overview');

  return (
    <div className="flex flex-col bg-green-100">
      <div className="flex flex-row  gap-x-10">
        {tablist.map(item => (
          <TabBtn
            key={item}
            tabName={item}
            isSelected={item == tab}
            setTab={setTab}
          />
        ))}
      </div>
      <TabContents curTab={tab} fullData={fullData} />
    </div>
  );
};

export default InfoTab;
