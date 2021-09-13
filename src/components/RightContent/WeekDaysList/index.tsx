import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import WeekDay from "./WeekDay";

const WeekDaysList: React.FC = () => {

    const diasSemana = [1,2,3,4,5,6,7];

    return (
      <WeekDaysListContainer>
          <Swiper
              spaceBetween={10}
              slidesPerView={4.6}>
              {diasSemana.map((dia, index) => (
                  <SwiperSlide key={index}>
                      <WeekDay weather={{temperatura: 16, icon: '', diaSemana: 'Sabado'}}/>
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


`;
