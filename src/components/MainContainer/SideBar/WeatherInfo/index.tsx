import React, {useContext} from "react";
import styled from "styled-components";
import BreakPoints from '../../../../utils/Breakpoints'
import {UnitiMeasurement, Weather} from "../../../../models";
import {getWeekName} from '../../../../utils/functions'
import {awsCloundFrontEndpoint} from "../../../../api/httpClient";
import {GlobalContext} from "../../../../store/GlobalStore";

interface Props{
    weather: Weather;
    unitMeasurement: UnitiMeasurement
}

const WeatherInfo: React.FC<Props> = ({weather, unitMeasurement}) => {

    const {loading} = useContext(GlobalContext);

    function formatWeekName() {
        return getWeekName(weather.date?.getDay());
    }

    function formatTime(){
        return `${(new Date()).getHours()}h:${(new Date()).getMinutes()}min`
    }


    if (loading) return (
        <></>
    )


    return (
        <WeatherContainer unidade={unitMeasurement.symbol}>
            <img alt={"WeatherInfo Icon Example"} src={`${awsCloundFrontEndpoint}${weather.icon}.svg`}/>

            <div>
                <h1>{weather.max}</h1>
            </div>

            <WeekDay>
                <span>{formatWeekName()}, </span>
                <span>{formatTime()}</span>
            </WeekDay>
        </WeatherContainer>
    )
}


export default WeatherInfo;


type PropsStyle = {
    unidade: string | undefined
}

const WeatherContainer = styled.div<PropsStyle>`
  margin: 1em auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  
  img{
    width: 100%;
    height: auto;
    max-width: 190px;
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
        content: "${((props) => props.unidade)}";
        font-size: 30px;
        position: absolute;
        top: 10px;
        right: -40px;
      }
    }
  }

  @media all and ${BreakPoints.small}{
    margin: 1em auto;
    
    .loading{
      display: none !important;
    }
    
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
