import React from "react";
import { Bar } from 'react-chartjs-2';
import {ChartData} from "chart.js";
import styled from "styled-components";
import BreakPoints from './../../../../../utils/Breakpoints'


const WeartherChart: React.FC = () => {


    const data: ChartData = {
        labels:  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: true,
                },
            },
        },
    };

    return (
        <WeatherChartContainer>
            <Bar data={data} options={options} />
        </WeatherChartContainer>
    )
}

export default WeartherChart;


const WeatherChartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 2em;

  @media all and ${BreakPoints.preMedium}{
    padding: 10px;
  }
`;
