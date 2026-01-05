import React, { useEffect, useState } from "react";
import "./App.css";
import InputWithButton from "./inputs/InputWithButton";
import OutputContainer from "./inputs/OutputContainer";
import { GetWeather } from "./data/weatherFetchingLogic";
import type { WeatherData } from "./data/weatherInterface";

function App() {
  const [output, setOutput] = useState<React.ReactNode>(
    <div>Output will be displayed here.</div>
  );

  const [backendData, setBackendData] = useState<WeatherData[][]>([]);

  async function OnSetInput(input: string) {
        
    const count = Number(input);
    if (Number.isNaN(count)) return;

    const returnData = await GetWeather(count);

    setBackendData(returnData);
  }

  useEffect(() => {
    console.log("Hello", backendData);
    
    const tempList = backendData.map(item => {
      
    });

    const backendComponent = (<>
      <div>{}</div>
    </>);

  }, [backendData]);

  return (
    <div className="mainAppContainer">
      <InputWithButton SetContainerInput={OnSetInput} />
      <OutputContainer>{output}</OutputContainer>
    </div>
  );
}

export default App;
