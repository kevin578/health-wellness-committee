import React, { useState } from "react";



const GoalInput = (props) => {

  const [goals, setGoals] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function getGoals() {
    return goals.map((goal)=> <ul>{goal}</ul>)
  }

  function handleOnClick() {
    setGoals([...goals, inputValue]);
    setInputValue("");
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div class="column-container">
      <h2>{props.name}</h2>
      <input class="dashboard-goal-input" onChange = {handleInputChange} value = {inputValue}/>
      <button class="dashboard-goal-add" onClick = {handleOnClick}>+</button>
      <ul>
        {getGoals()}
      </ul>
    </div>
  );
};

export default GoalInput;
