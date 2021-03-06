import React from "react";
import styled from "styled-components";
import SunArrowUp from '../../../../../assets/images/icons/sun-arrow-up.svg';
import SunArrowDown from '../../../../../assets/images/icons/sun-arrow-down.svg';

interface Props{
    sunset: number | undefined,
    sunrise: number | undefined
}

const SunCard: React.FC<Props> = ({sunset, sunrise}) => {


    function timestampToHour(timestamp: number| undefined){
        if (!timestamp){
            return ''
        }
     return `${new Date(timestamp).getHours()}h:${new Date(timestamp).getMinutes()}min`
    }

    return (
        <SunCardContainer>
            <div>
                <img src={SunArrowUp} alt="Sun arrow up"/>
                <span>{timestampToHour(sunrise)}</span>
            </div>

            <div>
                <img src={SunArrowDown} alt="Sun arrow down"/>
                <span>{timestampToHour(sunset)}</span>
            </div>
        </SunCardContainer>
    )
}

export default SunCard;

const SunCardContainer = styled.div`
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  div{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: #525252;
    margin-bottom: 1em;
    
    img{
      width: 1.8em;
      height: auto;
    }
    
    span{
      margin-left: 1em;
      font-size: 0.9em;
      font-weight: 600;
    }
  }

`;
