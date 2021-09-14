import React, {useContext} from "react";
import styled from "styled-components";
import BreakPoints from '../../../utils/Breakpoints'
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import {GlobalContext} from "../../../store/GlobalStore";


const SideBar: React.FC = () => {

    const {weather, unitMeasurement} = useContext(GlobalContext);

    return (
        <SideBarContainer>
            <Search/>
            <WeatherInfo weather={weather} unitMeasurement={unitMeasurement} />
            <hr/>
            <Footer weather={weather}/>
        </SideBarContainer>
    )
}

export default SideBar;


const SideBarContainer = styled.aside`

  height: 100%;
  background: linear-gradient(180deg, #0759B3 16.85%, rgba(0, 122, 255, 0) 138.95%);
  width: 30%;
  border-radius: 30px 0 0 30px;
  padding: 20px;
  overflow-y: scroll;

  @media all and ${BreakPoints.preMedium}{
    width: auto;
    margin: 0;
    border: 0;
    border-radius: 0;
    height: auto;
    overflow: hidden;
    background: #0759B3;
    hr{
      display: none;
    }
  }


  @media all and ${BreakPoints.medium}{
    border: 0;
    border-radius: 0;
  }
  
  

`;
