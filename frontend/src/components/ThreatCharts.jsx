import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ThreatCharts = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        console.log("API URL:", process.env.REACT_APP_API_URL);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/threat-analytics`);
        const data = await response.json();
        if (data && data.top_countries) {
          const labels = data.top_countries.map(item => item[0]);
          const values = data.top_countries.map(item => item[1]);

          setChartData({
            labels,
            datasets: [
              {
                label: 'Reports by Country',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching threat analytics:", error);
      }
    };

    fetchAnalytics();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 10 Threat Countries',
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Threat Analytics</h2>
      <div style={{ height: '400px' }}>
        {chartData ? (
          <Bar options={options} data={chartData} />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div>
    </div>
  );
};

export default ThreatCharts;
