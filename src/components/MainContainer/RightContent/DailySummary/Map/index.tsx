import React from "react";
import GoogleMapsApiKey from '../../../../../api/GoogleMapsApiKey';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '160px',
    borderRadius: "12px"
};

const center = {
    lat: -25.951803,
    lng: 32.597797
};

const Map: React.FC = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GoogleMapsApiKey
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(mapCalback) {
        //@ts-ignore
        if (window.google){
            //@ts-ignore
            const bounds = new window.google.maps.LatLngBounds();
            mapCalback.fitBounds(bounds);
            setMap(mapCalback)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map])
    //
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <>
        Loading Map...
    </>
}

export default Map;
