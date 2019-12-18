import React from 'react';


function ChartComponent(props){
    return(


<div className="rightStock">

<div>
  <p>Open</p><p>{props.open}</p>
</div>

<div>
  <p>High</p><p> {props.high}</p>
</div>

<div>
  <p>Low</p><p>{props.low}</p>
</div>

<div>
  <p>Close</p><p>{props.close}</p>
</div>

<div>
  <p>Volume</p><p> {props.volume}</p>
</div>

</div>
    )
}
export default ChartComponent;