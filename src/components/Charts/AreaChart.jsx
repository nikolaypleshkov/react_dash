import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "5k",
    uv: 20,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "5.5k",
    uv: 25.4,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "10k",
    uv: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "10.5k",
    uv: 40,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "15k",
    uv: 55,
    pv: 9800,
    amt: 2290,
  },

  {
    name: "15k.5",
    uv: 40,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "20k",
    uv: 57.7,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "20.5k",
    uv: 37.4,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "25k",
    uv: 64.36,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "25.5k",
    uv: 38.8,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "30k",
    uv: 56.3,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "30.5k",
    uv: 51.2,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "35k",
    uv: 62.3,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "35.5k",
    uv: 24.6,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "40k",
    uv: 28.3,
    pv: 80,
    amt: 2100,
  },
  {
    name: "40.5k",
    uv: 45.2,
    pv: 80,
    amt: 80,
  },
];

const AreaChart1 = () => {
  return (
    <div style={{ width: window.innerWidth <= 940 ? 360 : 800, height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          width={window.innerWidth <= 940 ? 360 : 460}
          height={300}
          margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" unit="%" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart1;
