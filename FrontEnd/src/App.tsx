import React, { useEffect, useState } from "react";
import "./App.css";
import InputWithButton from "./inputs/InputWithButton";
import OutputContainer from "./inputs/OutputContainer";
import { GetCustomerAge } from "./data/userFetchingLogic";
import type { Customer } from "./data/userDataInterfaces";
import { SetCustomer } from "./data/userSettingLogic";

function App() {
  const [output, setOutput] = useState<React.ReactNode>(
    <div>Output will be displayed here.</div>
  );

  const [inputFeedback, setInputFeedback] = useState<React.ReactNode>(
    <div>Nothing Yet!</div>
  );

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(-1);

  const [backendData, setBackendData] = useState<number>(-1);

  async function OnSetInput(input: string) {

    const returnData = await GetCustomerAge(input);

    console.log(returnData);

    setBackendData(returnData);
  }

  async function OnSetDatabase() {
    const setterObject : Customer = { Id: Math.round(Math.random() * 1000), Age: age, Name: name }
    
    const returnObj = await SetCustomer(setterObject);

    console.log(returnObj);

    setInputFeedback(<div>{inputFeedback}</div>);
  }

  useEffect(() => {
    console.log("Hello", backendData);

    const backendComponent = (<>
      <div>{backendData}</div>
    </>);


    setOutput(backendComponent);

  }, [backendData]);

    useEffect(() => {
      if (age !== -1 && name !== ""){
        OnSetDatabase();
      }
  }, [age, name]);

  return (
    <div className="mainAppContainer">
      <div>
        <InputWithButton SetContainerInput={OnSetInput} />
        <OutputContainer>{output}</OutputContainer>
      </div>
      <div>
        <InputWithButton SetContainerInput={( input: string ) => setName(input)}/>
        <InputWithButton SetContainerInput={( input: string ) => setAge(Number.parseInt(input))} />
        <OutputContainer>{inputFeedback}</OutputContainer>
      </div>
    </div>
  );
}

export default App;
