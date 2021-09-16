import React, {useContext} from "react";
import GoogleMapReact from 'google-map-react';
import GoogleMapsApiKey from "../../../../../api/GoogleMapsApiKey";
import {GlobalContext} from "../../../../../store/GlobalStore";
import CustomMarker from "../../../../../assets/images/icons/custom-marker.svg";
import styled from "styled-components";

const Marker: React.FC = () => {
    return (<img alt={"Custom Marker"} style={{width: "35px", height: "35px"}} src={CustomMarker}/>);
}

const WeatherMap: React.FC = () => {

    const {weather} = useContext(GlobalContext);

    function handleApiLoaded(map: any, maps: any){
        console.log({map, maps});
    }

    return (

        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GoogleMapsApiKey}}
                defaultZoom={10}
                center={weather.city?.coord}
                style={{
                    width: '100%',
                    height: '180px',
                    borderRadius: "12px !important",
                }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                <Marker/>
            </GoogleMapReact>
        </MapContainer>
    )
}


export default WeatherMap;


const MapContainer = styled.div`
  position: relative;
  border-radius: 12px;
  border: 9px solid white;
`;
