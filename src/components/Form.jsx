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
          <option value={props.rightnow}>AAPL</option>
          <option value={props.rightnow}>LEGH</option>
          <option value={props.rightnow}>SPGI</option>
          <option value={props.rightnow}>SP</option>
          <option value={props.rightnow}>REI</option>
          <option value={props.rightnow}>COST</option>
          <option value={props.rightnow}>CSGS</option>
        </select>
        <input type="submit" value="submit!"></input>
      </form>
    </div>
  )
}

export default Form;

