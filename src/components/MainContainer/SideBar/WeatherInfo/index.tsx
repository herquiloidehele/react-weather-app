import React, {useContext} from "react";
import styled from "styled-components";
import ExapleImage from '../../../../assets/images/icons/weather/example.svg'
import BreakPoints from '../../../../utils/Breakpoints'
import {GlobalContext} from "../../../../store/GlobalStore";
import {Weather} from "../../../../models";
import moment from "moment";
import {getWeekName} from '../../../../utils/functions'

interface Props{
    weather: Weather;
}

const WeatherInfo: React.FC<Props> = ({weather}) => {

    const context = useContext(GlobalContext);

    function formatWeekName() {
        return getWeekName(Number(weather.timestamp));
    }

    function formatTime(){
        if (!weather.timestamp){
            return ''
        }
        return `${moment(weather.timestamp).hour()}H : ${moment(weather.timestamp).minute()}Min`
    }

    return (
        <WeatherContainer>
            <img alt={"WeatherInfo Icon Example"} src={ExapleImage}/>

            <div>
                <h1>{weather.max}</h1>

                <h2>{context.unitMeasurement.name}</h2>
            </div>

            <WeekDay>
                <span>{formatWeekName()}, </span>
                <span>{formatTime()}</span>
            </WeekDay>
        </WeatherContainer>
    )
}


export default WeatherInfo;

const WeatherContainer = styled.div`
  margin: 3em auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  
  img{
    width: 100%;
    height: auto;
    max-width: 170px;
  }
  
  div{
    margin: 1em 0;
    position: relative;
    h1{
      font-size: 6.5em;
      color: white;
      font-weight: bolder;
      display: inline;
      &::after{
        content: "°C";
        font-size: 30px;
        position: absolute;
        top: 10px;
        right: -40px;
      }
    }
  }

  @media all and ${BreakPoints.small}{
    margin: 1em auto;
    
    img{
      max-width: 100px;
      //display: none;
    }

    div{
      margin-bottom: 0;
    }
    
  }
  
  
`;

const WeekDay = styled.div`
  
  span{
    font-size: 1.2em;
  }
   span:nth-child(1){
     color: white;
   }

  span:nth-child(2){
    color: rgba(255,255,255,0.5);
  }
`
