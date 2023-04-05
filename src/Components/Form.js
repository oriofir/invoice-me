import React from "react";

const Form = (props) => {
  return (
    <div className="form">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Form;
