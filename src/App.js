import './App.css';
import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto' // note the /auto. This registers the stuff you import automatically
import { Line, Chart } from 'react-chartjs-2';
import annotationPlugin from "chartjs-plugin-annotation";

// register the annotation plugin against base ChartJS
ChartJS.register(
  annotationPlugin
);

function App() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: 70,
            borderColor: 'red',
            borderWidth: 2,
            label: {
              enabled: true,
              content: 'Threshold',
            },
          },
        ],
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '50%', height: '50vh' }}>
          {/* either of these will work */}
          <Chart type="line" data={data} options={options} />
          <Line data={data} options={options} />
        </div>
      </header>
    </div>
  );
}

export default App;
