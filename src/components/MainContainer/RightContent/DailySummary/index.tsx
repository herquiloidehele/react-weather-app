import React, {useContext} from "react";
import styled from "styled-components";
import HeadingTitle from "../HeadingTitle";
import SunCard from "./SunCard";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';
import Defaultcard from "./DefaultCard";
import UnitMeasurement from "./UnitMeasurement";
import Map from "./Map";
import WeartherChart from "./WeatherChart";
import BreakPoints from '../../../../utils/Breakpoints'
import {GlobalContext} from "../../../../store/GlobalStore";
import {UnitiMeasurement, UnitNames} from "../../../../models";
import SkeletonLoader from "react-loading-skeleton";


const DailySummary: React.FC = () => {

    const {weather, unitMeasurement, loading} = useContext(GlobalContext);

    const breakpoints = {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 1.9,
            spaceBetween: 10
        },
        740: {
            slidesPerView: 2.3,
            spaceBetween: 10
        },
        900: {
            slidesPerView: 2.9,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }

    /**
     * Calculate the wind speed in Km/h
     * @param speedValue
     * @param unitMeasurement
     */
    function getWindSpeedInKmPerHour(speedValue: number | undefined, unitMeasurement: UnitiMeasurement): number{
        if (unitMeasurement.name === UnitNames.CELSIUS){
            return Math.round(Number(speedValue) * 3.6);
        }else{
            return Math.round(Number(speedValue) * 1.609);
        }
    }

    return (
       <DailySummaryContainer>
           <HeadingTitle title={"Resumo Diário"}/>
           <Swiper
               slidesPerView={3}
               spaceBetween={20}
               breakpoints={breakpoints}
               className={"cardList"}>
               <SwiperSlide>
                   <Defaultcard title={"Ventos"} description={"Normal"}>
                       <UnitMeasurement value={getWindSpeedInKmPerHour(weather.wind, unitMeasurement)} unit={"km/h"}/>
                   </Defaultcard>
               </SwiperSlide>

               <SwiperSlide>
                   <Defaultcard title={"Nascer & Pôr do Sol"} description={"Verão"}>
                       <SunCard sunset={weather.sunset} sunrise={weather.sunrise}/>
                   </Defaultcard>
               </SwiperSlide>

               <SwiperSlide>
                   <Defaultcard title={"Humidade"} description={"Alta"}>
                       <UnitMeasurement value={weather.humidity} unit={'%'}/>
                   </Defaultcard>
               </SwiperSlide>
           </Swiper>

           <div className={"map-container"}>

               {loading ? <SkeletonLoader width={"100%"} height={"180px"}/> : (
                   <>
                       <WeartherChart/>
                       <Map/>
                   </>
               )}

           </div>
       </DailySummaryContainer>
    )
}

export default DailySummary;


const DailySummaryContainer = styled.div`
  
  padding-top: 4em;
  padding-bottom: 10px;

  .cardList{
    margin-top: 1.4em;
  }
  
  .map-container{
    margin-top: 2em;
    margin-bottom: 3em;
  }

  @media all and ${BreakPoints.preMedium}{
    padding-top: 2em;
  }
  
`;
