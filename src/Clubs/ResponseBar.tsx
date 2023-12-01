import {ResponsiveBar} from '@nivo/bar';

const ResponseBar = ({data, keys}: {data: any; keys: any}) => {
  return (
    // <div style={{width: '800px', height: '500px', margin: '0 auto'}}>
    <div className="w-1/2 ml-40 mr-8 h-96">
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy="country"
        margin={{top: 50, right: 130, bottom: 50, left: 60}}
        padding={0.3}
        groupMode="grouped"
        valueScale={{type: 'linear'}}
        indexScale={{type: 'band', round: true}}
        colors={{scheme: 'nivo'}}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fries',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'sandwich',
            },
            id: 'lines',
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          //TODO
          legend: 'Date',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          //TODO
          legend: '(M)',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e =>
          e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
        }
      />
    </div>
  );
};

export default ResponseBar;
