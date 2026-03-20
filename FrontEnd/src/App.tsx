import React, { useEffect, useState } from "react";
import "./App.css";
import InputWithButton from "./inputs/InputWithButton";
import OutputContainer from "./inputs/OutputContainer";
import { GetCustomerAge } from "./data/userFetchingLogic";

function App() {
  const [output, setOutput] = useState<React.ReactNode>(
    <div>Output will be displayed here.</div>
  );

  const [backendData, setBackendData] = useState<number>(-1);

  async function OnSetInput(input: string) {

    const returnData = await GetCustomerAge(input);

    console.log(returnData);

    setBackendData(returnData);
  }

  useEffect(() => {
    console.log("Hello", backendData);

    const backendComponent = (<>
      <div>{backendData}</div>
    </>);


    setOutput(backendComponent);

  }, [backendData]);

  return (
    <div className="mainAppContainer">
      <InputWithButton SetContainerInput={OnSetInput} />
      <OutputContainer>{output}</OutputContainer>
    </div>
  );
}

export default App;
