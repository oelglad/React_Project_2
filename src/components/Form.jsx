import React from 'react';
import ComponentChart from './ComponentChart';

function Form(props) {
  return (
    <div>
      <form className="search" onSubmit={props.onClick}>
        {/* <input type="text" name="0" onChange={props.onChange} placeholder="search date" name="date"/> */}
        {/* <input type="text" name="0" onChange={props.onChange} placeholder="search company" name="rightnow" /> */}
        <select id="country" onChange={props.onChange} name="rightnow" >
          <option value={props.rightnow}>MSFT</option>
          <option value={props.rightnow}>NDAQ</option>
          <option value={props.rightnow}>goog</option>
        </select>
       
        <input type="submit" value="submit!"></input>
        {/* <button onClick={props.onClick}>Breeds list</button> */}
      </form>
    </div>
  )
}

export default Form;
{/* <button onClick={props.onClick}>Breeds list</button> */ }
