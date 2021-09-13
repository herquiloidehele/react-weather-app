import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import RightContent from "./RightContent";
import BreakPoints from '../../utils/Breakpoints'

const MainContainer: React.FC = () => {

    return (
        <Main>
            <SideBar/>
            <RightContent/>
        </Main>
    )
}


const Main = styled.main`
  height: 90vh;
  width: 90vw;
  background-color: #F7F6F9;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  display: flex;
  overflow: hidden;
  max-width: 1500px;
  max-height: 1500px;
  
  
  @media all and ${BreakPoints.preMedium}{
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    flex-direction: column;
    border-radius: 0;
  }
  
`;

export default MainContainer;
