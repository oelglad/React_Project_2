import React from 'react';

function Form(props) {
  return(
      <div className="search">
      <form  onSubmit={props.onClick}>
      <p>Company</p>
      {/* <input type="text" name="0" onChange={props.onChange} placeholder="search date" name="date"/> */}
      <input type="text" name="0" onChange={props.onChange} placeholder="search company" name="rightnow"/>
      <input type="submit" value="submit!"></input>
      {/* <button onClick={props.onClick}>Breeds list</button> */}
      </form>
      </div>
  )
}

export default Form;
{/* <button onClick={props.onClick}>Breeds list</button> */}