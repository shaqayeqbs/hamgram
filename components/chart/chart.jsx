import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "نمودار فالور های یک اکانت در روز های مختلف",
    },
  },
};
const DummyData = [
  {
    id: 1,
    total_followers: 200,
    created: "2022-7-21T20:35:49",
  },
  {
    id: 2,
    total_followers: 300,
    created: "2022-7-22T20:35:49",
  },
  {
    id: 3,
    total_followers: 150,
    created: "2022-7-23T20:35:49",
  },
  {
    id: 4,
    total_followers: 450,
    created: "2022-7-24T20:35:49",
  },
  {
    id: 5,
    total_followers: 100,
    created: "2022-7-25T20:35:49",
  },
  {
    id: 6,
    total_followers: 300,
    created: "2022-7-26T20:35:49",
  },
];

const labels = DummyData.map((account) => account.created.slice(0, 9));

export const data = {
  labels,
  datasets: [
    {
      label: "نرخ تغییر تعداد فالور ها",
      data: DummyData.map((account) => account.total_followers),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function Chart() {
  return (
    <div className="w-[70%] mx-auto mt-20">
      <Line options={options} data={data} />
    </div>
  );
}

export default Chart;
