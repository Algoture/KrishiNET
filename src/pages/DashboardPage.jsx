import React, { useEffect, useRef } from "react";
import SideBar from "../components/UI/SideBar";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("lineChart").getContext("2d");
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "Wheat Yield (tons/ha)",
            data: [2.5, 3.0, 2.2, 4.0, 4.5],
            fill: false,
            borderColor: "#4CAF50",
            tension: 0.1,
            pointBackgroundColor: "#4CAF50",
          },
          {
            label: "Rice Yield (tons/ha)",
            data: [3.0, 2.2, 4.0, 3.8, 5.0],
            fill: false,
            borderColor: "#FF6384",
            tension: 0.1,
            pointBackgroundColor: "#FF6384",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Crop Yield Over Time",
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="lg:ml-60 w-full p-6">
        <p className="text-2xl font-semibold mb-6">Crop Yield Dashboard</p>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <canvas id="lineChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
