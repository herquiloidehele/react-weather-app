import React, {useContext} from "react";
import styled from "styled-components";
import SkeletonLoader from "react-loading-skeleton";
import {GlobalContext} from "../../../../../store/GlobalStore";

interface Props{
    title: string;
    description: string
}

const Defaultcard: React.FC<Props> = ({children, title, description}) => {

    const {loading} = useContext(GlobalContext);

    return (
        <CardContainer style={{overflow: "hidden"}}>
            {loading ? (<SkeletonLoader width={"600px"} height={"180px"}/>) : (
                <div className={"container"}>
                    <div className={"title"}>
                        <span>{title}</span>
                    </div>

                    <div className={"childrenElement"}>{children}</div>

                    <div className={"description"}>
                        {description}
                    </div>
                </div>
            )}

        </CardContainer>
    )
}


export default  Defaultcard;


const CardContainer = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 8px;

  div.container {
    height: 100%;
    padding: 1.4em 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .title {
    color: #858585;
    font-size: 0.9em;
  }

  .description {
    color: #4f4f4f;
    font-size: 0.9em;
  }
  
  .childrenElement{
    height: 50px;
    margin: 2em 0;
  }
  
`;
