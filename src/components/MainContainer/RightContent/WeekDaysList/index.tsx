import React, {useContext} from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import WeekDay from "./WeekDay";
import BreakPoints from '../../../../utils/Breakpoints'
import {GlobalContext} from "../../../../store/GlobalStore";


const WeekDaysList: React.FC = () => {

    const { weatherForecast } = useContext(GlobalContext)

    const breakpoints = {
        320: {
            slidesPerView: 2.5,
                spaceBetween: 10
        },
        480: {
            slidesPerView: 3,
                spaceBetween: 10
        },
        740: {
            slidesPerView: 4.3,
            spaceBetween: 10
        },
        900: {
            slidesPerView: 5.2,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 5.4,
            spaceBetween: 10
        },
        1490: {
            slidesPerView: 7,
            spaceBetween: 15
        }
    };

    return (
      <WeekDaysListContainer>
          <Swiper
              breakpoints={breakpoints}>
              {weatherForecast.map((forecast, index) => (
                  <SwiperSlide key={index}>
                      <WeekDay forecast={forecast}/>
                  </SwiperSlide>
              ))}
          </Swiper>
      </WeekDaysListContainer>
    );
}

export default WeekDaysList;

const WeekDaysListContainer = styled.div`

  display: flex;
  overflow: scroll;
  margin-top: 2em;

  div.swiper-slide{
      height: 120px;
      background-color: white;
      border-radius: 8px;
      border: none;
      display: flex;
      align-items: center;
      align-content: center;
    cursor: pointer;
    }

  @media all and ${BreakPoints.preMedium}{
    margin-top: 1em;
  }


`;
