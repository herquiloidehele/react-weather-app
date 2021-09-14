import React, {useState} from "react";


export const Context = React.createContext({});

const GlobalStore: React.FC = ({children}) => {

    const [unitMeasurement, setUnitMeasurement] = useState('CELSIUS');

    const allContext = {
        unitMeasurement,
        setUnitMeasurement
    };

    return (
        <Context.Provider value={allContext}>
            {children}
        </Context.Provider>
    )
}


export default GlobalStore;
