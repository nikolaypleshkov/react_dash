import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// const data = [
//   {
//     year: "2013",
//     totalsales: 0,
//   },
//   {
//     year: "2014",
//     totalsales: 25,
//   },
//   {
//     year: "2015",
//     totalsales: 40,
//   },
//   {
//     year: "2016",
//     totalsales: 55,
//   },
//   {
//     year: "2017",
//     totalsales: 40,
//   },
//   {
//     year: "2018",
//     totalsales: 25,
//   },
//   {
//     year: "2019",
//     totalsales: 30,
//   },
//   {
//     year: "2020",
//     totalsales: 40,
//   },
//   {
//     year: "2021",
//     totalsales: 60,
//   },
// ];
const data01 = [
  {
    year: "2013",
    totalsales: 25,
  },
  {
    year: "2014",
    totalsales: 40,
  },
  {
    year: "2015",
    totalsales: 55,
  },
  {
    year: "2016",
    totalsales: 60,
  },
  {
    year: "2017",
    totalsales: 55,
  },
  {
    year: "2018",
    totalsales: 45,
  },
  {
    year: "2019",
    totalsales: 60,
  },
  {
    year: "2020",
    totalsales: 75,
  },
  {
    year: "2021",
    totalsales: 100,
  },
];

// const data02 = [
//   { x: 30, y: 20 },
//   { x: 50, y: 180 },
//   { x: 75, y: 200 },
//   { x: 100, y: 100 },
//   { x: 120, y: 190 },
// ];

const LineChart1 = () => {
  return (
    <div style={{ width: window.innerWidth <= 940 ? 360 : 460, height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          width={window.innerWidth <= 940 ? 360 : 460}
          height={300}
          margin={{
            top: 55,
            right: 30,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
          <XAxis dataKey="year" tick={{ fill: "#000000", fontSize: "13px" }} />
          <YAxis tick={{ fill: "#000000", fontSize: "13px" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#3dcc74", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          />
          <Line
            type="monotone"
            data={data01}
            dataKey="totalsales"
            stroke="#3dcc74"
            strokeWidth="5"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart1;
