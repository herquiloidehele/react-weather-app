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
            <div><span>{weather.diaSemana}</span></div>
            <img alt={"Icon da Temperatura"} src={weather.icon}/>
            <div><span>{weather.temperatura}</span></div>
        </Div>
    );
}


export default WeekDay;


const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;
