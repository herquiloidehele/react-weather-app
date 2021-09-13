import React from "react";
import styled from "styled-components";
import HeadingTitle from "../HeadingTitle";
import SunCard from "./SunCard";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';
import Defaultcard from "./DefaultCard";
import UnitMeasurement from "./UnitMeasurement";

const DailySummary: React.FC = () => {

    return (
       <DailySummaryContainer>
           <HeadingTitle title={"Resumo Diário"}/>
           <Swiper slidesPerView={3} spaceBetween={20} className={"cardList"}>
               <SwiperSlide>
                   <Defaultcard title={"Ventos"} description={"Normal"}>
                       <UnitMeasurement value={12} unit={"km/h"}/>
                   </Defaultcard>
               </SwiperSlide>

               <SwiperSlide>
                   <Defaultcard title={"Nascer & Pôr do Sol"} description={"Verão"}>
                       <SunCard/>
                   </Defaultcard>
               </SwiperSlide>

               <SwiperSlide>
                   <Defaultcard title={"Humidade"} description={"Alta"}>
                       <UnitMeasurement value={18} unit={'%'}/>
                   </Defaultcard>
               </SwiperSlide>
           </Swiper>
       </DailySummaryContainer>
    )
}

export default DailySummary;


const DailySummaryContainer = styled.div`
  
  padding-top: 4em;
  padding-bottom: 10px;

  .cardList{
    margin-top: 2em;
  }
`;
