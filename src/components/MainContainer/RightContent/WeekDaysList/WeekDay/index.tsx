import React from "react";
import styled from "styled-components";
import {WeatherForecast} from "../../../../../models";
import SolIcon from "../../../../../assets/images/icons/weather/sol.svg";
import {getShortWeekName} from "../../../../../utils/functions";

interface Props {
    forecast: WeatherForecast
}

const WeekDay: React.FC<Props> = ({forecast}) => {


    return (
        <Div>
            <div><span>{getShortWeekName(forecast.date?.getDay())}</span></div>
            <img alt={"Icon da Temperatura"} src={SolIcon}/>
            <div className={"temps"}>
                <span className={"max"}>{forecast.max}</span>
                <span className={"min"}>{forecast.min}</span>
            </div>
        </Div>
    );
}


export default WeekDay;


const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 300px !important;
  height: 100%;
  
  div:nth-child(1){
    font-size: 0.9em;
    color: #858585;
  }

  div.temps{
    span.max{
      color: #333;
      font-weight: bolder;
      font-size: 1.1em;
      position: relative;
      &::after{
        content: "°";
        font-size: 0.6em;
        position: absolute;
        top: 0px;
        right: -7px;
      }
    }


    span.min{
      color: #858585;
      margin-left: 1em;
      font-size: 0.8em;
      position: relative;
      &::after{
        content: "°";
        font-size: 0.8em;
        position: absolute;
        top: 0px;
        right: -5px;
      }
    }
  }
  
  
  
`;
