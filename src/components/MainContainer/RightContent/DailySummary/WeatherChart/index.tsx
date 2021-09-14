import React, {useContext} from "react";
import { Bar } from 'react-chartjs-2';
import {ChartData} from "chart.js";
import styled from "styled-components";
import BreakPoints from './../../../../../utils/Breakpoints'
import {GlobalContext} from "../../../../../store/GlobalStore";
import {WeatherForecast} from "../../../../../models";
import {getShortWeekName} from "../../../../../utils/functions";

const WeartherChart: React.FC = () => {

    const {weatherForecast} = useContext(GlobalContext);

    function getData(): number[]{
        return weatherForecast.map((forecast: WeatherForecast) => Number(forecast.max))
    }

    function getDaysOfWeek(): string[]{
        return weatherForecast.map((forecast: WeatherForecast) => getShortWeekName(forecast.date?.getDay()))
    }

    const data: ChartData = {
        labels:  getDaysOfWeek(),
        datasets: [
            {
                label: 'Evolução da Temperatura',
                data: getData(),
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
