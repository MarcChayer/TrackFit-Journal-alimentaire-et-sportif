/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel,
} from 'victory';

import food from 'src/assets/images/trackers/icone-alimentation.svg';

const StatFood = () => (
  <li className="statistic statistic__food">
    <img src={food} alt="food" className="statistics__rounded-img" />
    <VictoryChart
      width={700}
      height={380}
      theme={VictoryTheme.material}
      maxDomain={{ y: 10 }}
      minDomain={{ y: 0 }}
      domainPadding={{ x: 18 }}
    >
      <VictoryLabel
        text="Jours"
      />
      <VictoryLabel
        text="Calories"
        angle={-90}
        textAnchor="end"
      />
      <VictoryAxis
        labels="jours"
        style={{
          axis: { stroke: '#3D5499' },
        }}
        tickFormat={(t) => `${Math.round(t)}`}
        tickLabelComponent={(
          <VictoryLabel
            style={
          { fill: '#3D5499' }
        }
          />
        )}
      />
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: '#3D5499' },
        }}
        tickLabelComponent={(
          <VictoryLabel
            style={
          { fill: '#3D5499' }
        }
          />
        )}
      />
      <VictoryLine
        interpolation="natural"
        labels={({ datum }) => datum.y}
        // labelComponent={<VictoryLabel renderInPortal dy={-20} />}
        style={{
          data: { stroke: '#A7CB6B' },
          parent: { border: '1px solid #ccc' },
          labels: { fontSize: 12, fill: '#A7CB6B' },
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 },
          { x: 6, y: 9 },
          { x: 7, y: 7 },
        ]}

      />
    </VictoryChart>
  </li>
);

export default StatFood;
