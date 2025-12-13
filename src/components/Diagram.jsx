import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import Section from "./Section";

export default function Diagram({ weather, curCity, hourly }) {
  const object = weather.filter((el) => el[0].location.name === curCity)[0];

  const arr = object
    ? object[0].forecast.forecastday[0].hour.map((obj) => obj.heatindex_c)
    : [];

  const data = {
    labels: [
      "12 am",
      "1 am",
      "2 am",
      "3 am",
      "4 am",
      "5 am",
      "6 am",
      "7 am",
      "8 am",
      "9 am",
      "10 am",
      "11 am",
      "12 pm",
      "1 pm",
      "2 pm",
      "3 pm",
      "4 pm",
      "5 pm",
      "6 pm",
      "7 pm",
      "8 pm",
      "9 pm",
      "10 pm",
      "11 pm",
    ],
    datasets: [
      {
        data: arr,
        borderWidth: 3,
        borderColor: "#FFB36C",
        pointStyle: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        position: "top",
        border: { display: false },
        grid: { drawOnChartArea: true, tickLength: 30 },
        ticks: {
          padding: 15,
          font: {
            size: 10,
            family: "Montserrat, sans-serif",
          },
        },
      },
      y: {
        border: { display: false },
        grid: { drawOnChartArea: true, tickLength: 45 },
        ticks: {
          padding: 15,
          font: {
            size: 10,
            family: "Montserrat, sans-serif",
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  if (arr.length && hourly)
    return (
      <Section title={"Daily weather in " + curCity}>
        <div className="bg-neutral-400 rounded-[20px] px-4 sm:px-12 md:px-24 py-6 sm:py-16 grid grid-cols-1 gap-x-16 gap-y-12 overflow-x-auto">
          <div className="min-w-[400px] w-full h-[250px] sm:h-[350px]">
            <Chart type="line" data={data} options={options} />
          </div>
        </div>
      </Section>
    );
}
