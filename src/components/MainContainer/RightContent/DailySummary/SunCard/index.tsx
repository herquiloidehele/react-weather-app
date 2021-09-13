import React from "react";
import styled from "styled-components";
import SunArrowUp from '../../../../../assets/images/icons/sun-arrow-up.svg';
import SunArrowDown from '../../../../../assets/images/icons/sun-arrow-down.svg';

const SunCard: React.FC = () => {

    return (
        <SunCardContainer>
            <div>
                <img src={SunArrowUp} alt="Sun arrow up"/>
                <span>06:27min</span>
            </div>

            <div>
                <img src={SunArrowDown} alt="Sun arrow down"/>
                <span>06:27min</span>
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
      width: 100%;
      height: auto;
    }
    
    span{
      margin-left: 1em;
      font-size: 1.1em;
      font-weight: 600;
    }
  }

`;
