import React from 'react';
import PieChart from 'react-minimal-pie-chart';

function Chart(props) {

    return (
        <div className="ManageChart">
{/* <img className="imgStyle" src="https://i.imgur.com/Ebx1fBN.jpg"></img> */}
<img className="imgStyle" src="https://i.imgur.com/xUe35or.jpg"></img>
        {props.open &&
        <PieChart
            data={[
                { title: `open: ${props.open}`, value: Math.floor(props.open), color: '#5cc743' },
                { title: `high: ${props.high}`, value: Math.floor(props.high), color: '#ce331b' },
                { title: `low: ${props.low}`, value: Math.floor(props.low), color: '#2e5dff' },
            ]}
            className="chartClass" style={{ width: "30%" }}
              label={(labelProps) => {console.log(labelProps); return ` ${Math.floor(labelProps.data.percentage)} %`}}
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


{/* <div className="ManageChart">
<img className="imgStyle" src="https://i.imgur.com/Ebx1fBN.jpg"></img>
{this.state.open &&
  <PieChart
    data={[
      { title: `open: ${this.state.open}`, value: Math.floor(this.state.open), color: '#4c8fb4' },
      { title: `high: ${this.state.high}`, value: Math.floor(this.state.high), color: '#ffff52' },
      { title: `low: ${this.state.low}`, value: Math.floor(this.state.low), color: '#c4a7a4' },
    ]}
    className="chartClass" style={{ width: "30%" }}
    label={(labelProps) => labelProps.data.map((item, key) =>
      // console.log(item)
      (Math.floor(item.percentage) / 100)

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
  />}
</div> */}