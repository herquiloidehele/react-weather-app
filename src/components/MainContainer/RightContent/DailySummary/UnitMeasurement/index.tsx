import React from "react";
import styled from "styled-components";

interface Props{
    value: number;
    unit: string;
}

const UnitMeasurement: React.FC<Props> = ({value, unit}) => {

    return (
        <UnitMeasurementContainer>
            <h1>{value}</h1> <span>{unit}</span>
        </UnitMeasurementContainer>
    )
}

export default UnitMeasurement;

const UnitMeasurementContainer = styled.div`
  text-align: center;

  h1 {
    color: #525252;
    font-size: 5.3em;
    text-align: center;
    display: inline;
    font-weight: bolder;
  }

  span {
    font-size: 1.3em;
    color: #868686;
    margin-left: 0.2em;
  }
`;
