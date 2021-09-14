import React from "react";
import styled from "styled-components";
import NuvemExemplo from '../../../../assets/images/icons/weather/NuvemExemplo.svg'
import Precipitacao from '../../../../assets/images/icons/weather/Precipitacao.svg'
import Breakpoints from '../../../../utils/Breakpoints'
import {Weather} from "../../../../models";

interface Props{
    weather: Weather;
}

const Footer: React.FC<Props> = ({weather}) => {

    return (
        <FooterContainer>
            <div id={"addicional-data"}>
                <div>
                    <img alt="Icon Nuvens" src={NuvemExemplo}/>
                    <span>{weather.condition}</span>
                </div>

                <div className={"info"}>
                    <img alt="Icon precipitação" src={Precipitacao}/>
                    <span>Precipitação - {weather.rain}%</span>
                </div>
            </div>

            <div id={"city-image"}>
                <img alt={"Imagem da Cidade"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7y18MBsl0VLMNhFE6p-YHmeIcB4lQQXRqhFAfalRd_feDTGJsbsyWmHSzNzQrCWppurM&usqp=CAU"}/>
                <div className={"sombra"}>
                    <h6>{String(weather.city?.name).toUpperCase()} - {weather.city?.country}</h6>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
  margin: 1em 0;

  #addicional-data {
    div {
      margin-bottom: 1em;
      color: white;

      img {
        margin-right: 1em;
      }
      
      .info{
        display: flex;
        justify-content: left;
        align-content: center;
        align-items: center;
      }

      span {
        font-size: 1.1em;
        text-transform: capitalize;
      }
    }
  }

  #city-image {
    margin-top: 1em;
    height: 100px;
    width: 100%;
    border-radius: 8px;
    background-color: red;
    overflow-y: hidden;
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .sombra {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      
      h6{
        color: white;
        font-weight: bolder;
        font-size: 1.3em;
      }
    }
  }
  
  @media all and ${Breakpoints.preMedium}{
    #addicional-data {
      display: none;
    }
  }
`;
