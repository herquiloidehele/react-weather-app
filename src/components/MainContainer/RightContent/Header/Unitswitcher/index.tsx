import React, {useContext} from "react";
import styled from "styled-components";
import BreakPoints from '../../../../../utils/Breakpoints'
import {GlobalContext} from "../../../../../store/GlobalStore";
import {UnitiMeasurement, UnitNames} from "../../../../../models";


const UnitSwitcher: React.FC = () => {

    const { unitMeasurement, setUnitMeasurement } = useContext(GlobalContext);
    // const {updateUnitMesument} = use

    function updateUnitMesument(name: string) {
        const unitMeasument: UnitiMeasurement = {
            symbol: name === UnitNames.CELSIUS ? '°C' : '°F',
            name: name
        }
        setUnitMeasurement(unitMeasument);
    }

    return (
        <UnitSwitcherContainer>
            <svg
                onClick={() => updateUnitMesument(UnitNames.CELSIUS) }
                className={UnitNames.CELSIUS === unitMeasurement.name ? 'selected'  : ''} width="45" height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="22.5" cy="22.5" r="22.5" fill="#3e8bfa"/>
                <path d="M9.47656 15.9375C9.47656 15.0469 9.79297 14.2852 10.4258 13.6523C11.0586 13.0195 11.8047 12.7031 12.6641 12.7031C13.5156 12.7031 14.25 13.0195 14.8672 13.6523C15.4922 14.2773 15.8047 15.0391 15.8047 15.9375C15.8047 16.8359 15.4922 17.5938 14.8672 18.2109C14.25 18.8203 13.5156 19.125 12.6641 19.125C11.8203 19.125 11.0781 18.8203 10.4375 18.2109C9.79688 17.5938 9.47656 16.8359 9.47656 15.9375ZM12.6641 17.3906C13.0781 17.3906 13.418 17.2539 13.6836 16.9805C13.957 16.6992 14.0938 16.3516 14.0938 15.9375C14.0938 15.5312 13.957 15.1797 13.6836 14.8828C13.418 14.5859 13.0781 14.4375 12.6641 14.4375C12.25 14.4375 11.9023 14.5859 11.6211 14.8828C11.3398 15.1797 11.1992 15.5312 11.1992 15.9375C11.1992 16.3438 11.3398 16.6875 11.6211 16.9688C11.9102 17.25 12.2578 17.3906 12.6641 17.3906ZM32.2461 24.3164C32.1133 26.1523 31.4336 27.5977 30.207 28.6523C28.9883 29.707 27.3789 30.2344 25.3789 30.2344C23.1914 30.2344 21.4688 29.5 20.2109 28.0312C18.9609 26.5547 18.3359 24.5312 18.3359 21.9609V20.918C18.3359 19.2773 18.625 17.832 19.2031 16.582C19.7812 15.332 20.6055 14.375 21.6758 13.7109C22.7539 13.0391 24.0039 12.7031 25.4258 12.7031C27.3945 12.7031 28.9805 13.2305 30.1836 14.2852C31.3867 15.3398 32.082 16.8203 32.2695 18.7266H28.7539C28.668 17.625 28.3594 16.8281 27.8281 16.3359C27.3047 15.8359 26.5039 15.5859 25.4258 15.5859C24.2539 15.5859 23.375 16.0078 22.7891 16.8516C22.2109 17.6875 21.9141 18.9883 21.8984 20.7539V22.043C21.8984 23.8867 22.1758 25.2344 22.7305 26.0859C23.293 26.9375 24.1758 27.3633 25.3789 27.3633C26.4648 27.3633 27.2734 27.1172 27.8047 26.625C28.3438 26.125 28.6523 25.3555 28.7305 24.3164H32.2461Z" fill="white"/>
            </svg>

            <svg
                onClick={() => updateUnitMesument(UnitNames.FAHRENHEIT) }
                className={UnitNames.FAHRENHEIT === unitMeasurement.name ? 'selected'  : ''}
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="22.5" cy="22.5" r="22" fill="white" stroke="#DEDEDE"/>
                <path d="M9.47656 15.9375C9.47656 15.0469 9.79297 14.2852 10.4258 13.6523C11.0586 13.0195 11.8047 12.7031 12.6641 12.7031C13.5156 12.7031 14.25 13.0195 14.8672 13.6523C15.4922 14.2773 15.8047 15.0391 15.8047 15.9375C15.8047 16.8359 15.4922 17.5938 14.8672 18.2109C14.25 18.8203 13.5156 19.125 12.6641 19.125C11.8203 19.125 11.0781 18.8203 10.4375 18.2109C9.79688 17.5938 9.47656 16.8359 9.47656 15.9375ZM12.6641 17.3906C13.0781 17.3906 13.418 17.2539 13.6836 16.9805C13.957 16.6992 14.0938 16.3516 14.0938 15.9375C14.0938 15.5312 13.957 15.1797 13.6836 14.8828C13.418 14.5859 13.0781 14.4375 12.6641 14.4375C12.25 14.4375 11.9023 14.5859 11.6211 14.8828C11.3398 15.1797 11.1992 15.5312 11.1992 15.9375C11.1992 16.3438 11.3398 16.6875 11.6211 16.9688C11.9102 17.25 12.2578 17.3906 12.6641 17.3906ZM29.1172 23.0273H22.3672V30H18.8516V12.9375H29.9609V15.7852H22.3672V20.1914H29.1172V23.0273Z" fill="black"/>
            </svg>
        </UnitSwitcherContainer>
    );
}


export default UnitSwitcher;


const UnitSwitcherContainer = styled.div`

  svg {
    margin: 0 5px;
    width: 35px;
    height: auto;
    cursor: pointer;
     circle{
       fill: white;
     }
    
    path{
      fill: black;
    }
  }

  .selected {
    circle {
      fill: #3e8bfa;
    }

    path {
      fill: white;
    }
  }

  
  
  @media all and ${BreakPoints.preMedium} {
    svg {
      width: 32px;
    }
  }

`;
