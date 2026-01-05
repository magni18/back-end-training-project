import React, { useEffect, useState } from "react";
import "./App.css";
import InputWithButton from "./inputs/InputWithButton";
import OutputContainer from "./inputs/OutputContainer";
import { GetWeather } from "./data/weatherFetchingLogic";

function App() {
  const [output, setOutput] = useState<React.ReactNode>(
    <div>Output will be displayed here.</div>
  );

  const [input, setInput] = useState<string>("");
  const [backendData, setBackendData] = useState<any>(null);

  useEffect(() => {
    const count = Number(input);
    if (Number.isNaN(count)) return;

    setBackendData(GetWeather(count));
  }, [input]);

  useEffect(() => {
    setOutput(<div>{backendData}</div>);
  }, [backendData]);

  return (
    <div className="mainAppContainer">
      <InputWithButton SetContainerInput={setInput} />
      <OutputContainer>{output}</OutputContainer>
    </div>
  );
}

export default App;
