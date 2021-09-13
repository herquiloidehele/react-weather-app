import React from "react";
import styled from "styled-components";

interface Props{
    title: string;
    description: string
}

const Defaultcard: React.FC<Props> = ({children, title, description}) => {
    return (
        <CardContainer>
            <div className={"container"}>
                <div className={"title"}>
                    <span>{title}</span>
                </div>

                {children}

                <div className={"description"}>
                    {description}
                </div>
            </div>
        </CardContainer>
    )
}


export default  Defaultcard;


const CardContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  border-radius: 8px;

  div.container {
    background-color: transparent;
    height: 100%;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .title {
    color: #858585;
    font-size: 1em;
  }

  .description {
    color: #4f4f4f;
  }
`;
