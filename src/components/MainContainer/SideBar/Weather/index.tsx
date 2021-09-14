import React, {useContext} from "react";
import styled from "styled-components";
import ExapleImage from '../../../../assets/images/icons/weather/example.svg'
import BreakPoints from '../../../../utils/Breakpoints'
import {GlobalContext} from "../../../../store/GlobalStore";

const Weather: React.FC = () => {

    const context = useContext(GlobalContext);

    return (
        <WeatherContainer>
            <img alt={"Weather Icon Example"} src={ExapleImage}/>

            <div>
                <h1>12</h1>

                <h2>{
                    context.unitMeasurement.name}</h2>
            </div>

            <WeekDay>
                <span>Segunda Feira, </span>
                <span>13:45</span>
            </WeekDay>
        </WeatherContainer>
    )
}


export default Weather;

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
