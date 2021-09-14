import React from "react";
import styled from "styled-components";
import BreakPoints from '../../../utils/Breakpoints'
import Header from "./Header";
import WeekDaysList from "./WeekDaysList";
import DailySummary from "./DailySummary";

const RightContent: React.FC = () => {

    return (
        <Section>
            <Header/>
            <WeekDaysList/>
            <DailySummary/>
        </Section>
    )
}

export default RightContent;

const Section = styled.section`   
  width: 70%;
  height: 100%;
  background-color: #F7F6F9;
  border-radius: 0 30px 30px 0;
  padding: 20px;
  overflow-y: scroll;

  @media all and ${BreakPoints.preMedium}{
    width: auto;
    margin: 0;
    border-radius: 0;
    border: 0;
    height: auto;
    overflow: hidden;
  }
  
`
