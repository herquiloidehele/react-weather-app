import React from "react";
import styled from "styled-components";

interface Props {
    weather: {
       temperatura: number,
       icon: string,
       diaSemana: string
    }
}

const WeekDay: React.FC<Props> = ({weather}) => {

    return (
        <Div>
            <div><span>{weather.diaSemana.substr(0,3)}</span></div>
            <img alt={"Icon da Temperatura"} src={weather.icon}/>
            <div className={"temps"}>
                <span className={"max"}>{weather.temperatura}</span>
                <span className={"min"}>{weather.temperatura + 3}</span>
            </div>
        </Div>
    );
}


export default WeekDay;


const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 300px !important;
  height: 100%;
  
  div:nth-child(1){
    font-size: 0.9em;
    color: #858585;
  }

  div.temps{
    span.max{
      color: #333;
      font-weight: bolder;
      font-size: 1.1em;
      position: relative;
      &::after{
        content: "°";
        font-size: 0.6em;
        position: absolute;
        top: 0px;
        right: -7px;
      }
    }


    span.min{
      color: #858585;
      margin-left: 1em;
      font-size: 0.8em;
      position: relative;
      &::after{
        content: "°";
        font-size: 0.8em;
        position: absolute;
        top: 0px;
        right: -5px;
      }
    }
  }
  
  
  
`;
