import React from "react";
import "./Inputs.css";
const Input = (props) => {
  function handleInput(e) {
    const newValue = e.target.value;
    props.onInputChange(props.fieldName, newValue);
    console.log(newValue)
  }
  return (
    <div className="inputs">
      <div className="inputs-left">
        <span>{props.title}</span>
      </div>
      <div className="input-fields">
        <input
          type={props.type}
          name={props.fieldName}
          value={props.value}
          placeholder={props.placeholder}
          onChange={handleInput}
          required
        />
      </div>
    </div>
  );
};

export default Input;