import React, {useContext} from "react";
import GoogleMapsApiKey from '../../../../../api/GoogleMapsApiKey';
import {Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {GlobalContext} from "../../../../../store/GlobalStore";

const containerStyle = {
    width: '100%',
    height: '160px',
    borderRadius: "12px"
};

const Map: React.FC = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GoogleMapsApiKey
    });

    const [map, setMap] = React.useState(null);
    const {weather} = useContext(GlobalContext);

    const onLoad = React.useCallback(function callback(mapCalback) {
        //@ts-ignore
        if (window.google){
            //@ts-ignore
            const bounds = new window.google.maps.LatLngBounds();
            console.log({bounds});
            mapCalback.fitBounds(bounds);
            setMap(mapCalback)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map])
    //
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])




    return (weather && isLoaded) ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={weather.city?.coord}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <>
                <Marker
                    key={1}
                    title={weather.city?.name}
                    position={weather.city?.coord}
                />
            </>
        </GoogleMap>
    ) : <>
        Loading Map...
    </>
}

export default Map;
