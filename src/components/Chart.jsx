import React from 'react';
import PieChart from 'react-minimal-pie-chart';

function Chart(props) {

  return (
    <div className="ManageChart">
      <img className="imgStyle" src="https://i.imgur.com/xUe35or.jpg"></img>
      {props.open &&
        <PieChart
          data={[
            { title: `open: ${props.open}`, value: Math.floor(props.open), color: '#5cc743' },
            { title: `high: ${props.high}`, value: Math.floor(props.high), color: '#ce331b' },
            { title: `low: ${props.low}`, value: Math.floor(props.low), color: '#2e5dff' },
          ]}
          className="chartClass" style={{ width: "30%" }}
          label={(labelProps) => { console.log(labelProps); return ` ${Math.floor(labelProps.data[0].percentage)} %` }}
          // label={(labelProps) => labelProps.data.map((item, key) =>
          // (`${Math.floor(item.percentage) / 1000} %`)
          // (`${(item.percentage) / 1000} %`)

          // )}
          labelPosition={50}
          labelStyle={{
            fill: '#121212',
            fontFamily: 'sans-serif',
            fontSize: '5px'
          }}

        />}
    </div>

  )

}

export default Chart;