import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList
} from 'recharts';

export default function AsteroidBarChart({ data }) {
  if (!data || data.length === 0) return null;

  const chartWidth = Math.max(data.length * 100, 800); 
  return (
    <div style={{ overflowX: 'auto'}}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
        width={chartWidth}
        height={400}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="label"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={100}
        />
        <YAxis
          tickFormatter={(value) => value.toLocaleString()}
          label={{ value: 'Miss Distance (km)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          formatter={(value) => value.toLocaleString()}
          labelStyle={{ fontWeight: 'bold' }}
        />
        <Bar dataKey="miss_distance" fill="#007bff" opacity={0.7}>
          <LabelList dataKey="miss_distance" position="top" formatter={(value) => Math.round(value).toLocaleString()} />
        </Bar>
      </BarChart>
    </div>
  );
}
