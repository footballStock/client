import React, {useState} from 'react';

const SideView = ({fullData}: {fullData: any}) => {
  const venueData = fullData.venue;
  return (
    <div>
      <div>
        {venueData.city}
        {venueData.address}
        {venueData.surface}
        {venueData.capacity}
      </div>
    </div>
  );
};

export default SideView;
