import React from "react";
import "./InputWithButtonStyles.css";

type InputWithButtonProps = {
  SetContainerInput: (intpu: string) => void;
};

const InputWithButton = (props: InputWithButtonProps) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="mainContainer">
      <input
        type="text"
        placeholder="Enter text here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => props.SetContainerInput(inputValue)}>
        Submit
      </button>
    </div>
  );
};

export default InputWithButton;
