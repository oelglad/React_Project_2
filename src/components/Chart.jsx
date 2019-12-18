import React from 'react';
import PieChart from 'react-minimal-pie-chart';

function Chart (props){

    return(
        // {props.open && 
        <PieChart
        data={[
          { title: `open: ${props.open}`, value: Math.floor(props.open), color: '#4c8fb4' },
          { title: `high: ${props.high}`, value: Math.floor(props.high), color: '#ffff52' },
          { title: `low: ${props.low}`, value: Math.floor(props.low), color: '#c4a7a4' },
        ]}
        className ="chartClass" style={{width: "30%" }}
         label={(labelProps) => labelProps.data.map((item,key) => 
            // console.log(item)
           ( Math.floor(item.percentage)/100)
         
         )}
         
        //  label={(labelProps) => {console.log(labelProps); return ` ${Math.floor(labelProps.data[0].percentage)} %`}}
        // labelPosition={50}
        // labelStyle={{
        //   fill: '#121212',
        //   fontFamily: 'sans-serif',

        labelPosition={50}
        labelStyle={{
          fill: '#121212',
          fontFamily: 'sans-serif',
          fontSize: '5px'
        }}
      />
    // }
    )
}
export default Chart;