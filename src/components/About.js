import React from 'react';
import ChartComponent from './ComponentChart'

const About =(props)=>{
return (
    <div> This show the search result for the company stock'a market
        <ChartComponent 
            open={props.open}
            high={props.high}
            low={props.low}
            close={props.close}
            volume={props.volume}
          />}
    </div>

)
}
export default About;