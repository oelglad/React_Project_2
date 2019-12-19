import React from 'react';
import ChartComponent from './ComponentChart';

const Result =(props)=>{
return (
    <div>
         This show the search result for the company stock'a market
         <ChartComponent
          open={props.open}
          low={props.low}
          high={props.high}
          close={props.close}
          volume={props.volume}
        />
    </div>

)
}
export default Result;