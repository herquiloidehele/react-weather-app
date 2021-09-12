import React from "react";
import styled from "styled-components";
import BreakPoints from '../../utils/Breakpoints'

const RightContent: React.FC = () => {

    return (
        <Section>
            <h1>Main Container</h1>
        </Section>
    )
}

export default RightContent;

const Section = styled.section`   
  width: 70%;
  height: 100%;
  background-color: #F7F6F9;
  border-radius: 0 40px 40px 0;
  padding: 20px;

  @media all and ${BreakPoints.preMedium}{
    width: 100%;
    margin: 0;
    border-radius: 0;
    border: 0;
  }
  
`
