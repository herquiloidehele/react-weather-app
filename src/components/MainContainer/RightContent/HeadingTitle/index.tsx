import styled from "styled-components";
import BreakPoints from '../../../../utils/Breakpoints'
import SkeletonLoader from "react-loading-skeleton";
import React, {useContext} from "react";
import {GlobalContext} from "../../../../store/GlobalStore";


interface Props{
    title: string | undefined;
}

const HeadingTitle: React.FC<Props> = ({title}) => {

    const { loading } = useContext(GlobalContext)

    if (loading) return (
        <SkeletonLoader width={"150px"} height={"20px"}/>
    )

    return (
        <Title>{title}</Title>
    );
}

export default HeadingTitle;


const Title = styled.h1`
  color: #317ACA;
  font-size: 1.3em;
  font-weight: bolder;
  
  @media all and ${BreakPoints.preMedium}{
    font-size: 1.2em;
  }

  @media all and ${BreakPoints.small}{
    font-size: 1em;
  }
`;
