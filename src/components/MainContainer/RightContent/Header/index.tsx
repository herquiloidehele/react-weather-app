import React, {useContext} from "react";
import styled from "styled-components";
import HeadingTitle from "../HeadingTitle";
import BreakPoints from '../../../../utils/Breakpoints'
import UnitSwitcher from "./Unitswitcher";
import {GlobalContext} from "../../../../store/GlobalStore";


const Header: React.FC = () => {

    const {weather} = useContext(GlobalContext);

    function getTitle(){
        return String(`${weather.city?.name} - ${weather.city?.country}`)
    }

    return (
        <HeaderContainer>
            <HeadingTitle title={getTitle()}/>
            <UnitSwitcher/>
        </HeaderContainer>
    )
}


export default Header;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    padding-left: 0;
    align-items: center;

  @media all and ${BreakPoints.preMedium}{
    padding: 0;
    svg{
      width: 30px;
    }
  }
`;
