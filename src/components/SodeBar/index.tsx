import React from "react";
import styled from "styled-components";
import BreakPoints from '../../utils/Breakpoints'
import Search from "../Search";


const SideBar: React.FC = () => {

    return (
        <SideBarContainer>
            <Search/>
        </SideBarContainer>
    )
}

export default SideBar;


const SideBarContainer = styled.aside`

  height: 100%;
  background: linear-gradient(180deg, #0759B3 16.85%, rgba(0, 122, 255, 0) 138.95%);
  width: 30%;
  border-radius: 40px 0 0 40px;
  padding: 20px;

  @media all and ${BreakPoints.preMedium}{
    width: auto;
    margin: 0;
    border: 0;
    border-radius: 0;
  }
  
  

`;
