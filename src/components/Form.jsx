import React from 'react';

function Form(props) {
  return (
    <form className="search" onSubmit={props.handleSubmit}>
      <input type="text" name="0" onChange={props.handleChange} placeholder="search date" />
      <input type="text" name="0" onChange={props.handleChange} placeholder="search company" />
      </form>
  )
}

export default Form;