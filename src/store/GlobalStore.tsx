import React, {useState} from "react";
import {UnitiMeasurement} from '../models'


//Initializing Instances
const _unitMeasurement: UnitiMeasurement = {}


export const GlobalContext = React.createContext({
        unitMeasurement :_unitMeasurement,
        setUnitMeasurement: (_: UnitiMeasurement) => {}
    }
);

export const GlobalStore: React.FC = ({children}) => {

    //States
    const [unitMeasurement, _setUnitMeasurement] = useState(_unitMeasurement);




    //Setters
    function setUnitMeasurement(unit: UnitiMeasurement) {
        _setUnitMeasurement(unit)
    }


    //wrapping all context together
    const allContext = {
        unitMeasurement,
        setUnitMeasurement
    };


    return (
        <GlobalContext.Provider value={allContext}>
            {children}
        </GlobalContext.Provider>
    )
}
