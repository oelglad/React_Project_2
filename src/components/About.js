import React from 'react';
import ChartComponent from './ComponentChart'

const About =(props)=>{
return (
    <div> This is the about page.
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