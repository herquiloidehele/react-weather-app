import React from 'react';
import MainContainer from "./components/MainContainer";
import {GlobalStore} from "./store/GlobalStore";

function App() {
  return (
      <GlobalStore>
        <MainContainer/>
      </GlobalStore>
  );
}

export default App;
