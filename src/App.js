import React, { Component } from 'react';
import { stockInfo } from './services/api-helper';
import PieChart from 'react-minimal-pie-chart';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';


import './App.css';


//API_KEY : URALLLSYVMYC9IZ9
// https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=URALLLSYVMYC9IZ9
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=URALLLSYVMYC9IZ9
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      symbols: ["MSFT", "NDAQ", "goog"],
      rightnow: "MSFT",
      volume: "",
      // date: ["2019-12-10", "2019-12-17", "2019-12-15"],
      date: "2019-12-10",
      open: "",
      high: "",
      low: "",
      close: "",
    }
  }

  componentDidMount = async () => {
    // for(let i=0; i<this.state.symbols.length; i++){
    // this.state.rightnow = this.state.symbols[i];
    // }

    const response = await stockInfo(this.state)
    const dates = Object.keys(response.data["Time Series (Daily)"]);
    console.log(dates)
    this.setState({
      rightnow: response.data["Meta Data"]["2. Symbol"],
      volume: response.data["Time Series (Daily)"][this.state.date]["5. volume"],
      open: response.data["Time Series (Daily)"][this.state.date]["1. open"],
      high: response.data["Time Series (Daily)"][this.state.date]["2. high"],
      low: response.data["Time Series (Daily)"][this.state.date]["3. low"],
      close: response.data["Time Series (Daily)"][this.state.date]["4. close"],
      date: dates[0],
    })
  }
  handleChange = (e) => {
    const name = e.target.name
    e.preventDefault();
    this.setState({
      rightnow: e.target.value
    })
  }

  handleClick = async (e) => {
    e.preventDefault();
    const response = await stockInfo(this.state)
    const dates = Object.keys(response.data["Time Series (Daily)"]);
    this.setState({
      rightnow: response.data["Meta Data"]["2. Symbol"],
      volume: response.data["Time Series (Daily)"][this.state.date]["5. volume"],
      open: response.data["Time Series (Daily)"][this.state.date]["1. open"],
      high: response.data["Time Series (Daily)"][this.state.date]["2. high"],
      low: response.data["Time Series (Daily)"][this.state.date]["3. low"],
      close: response.data["Time Series (Daily)"][this.state.date]["4. close"],
      date: dates[0],
    })
  }


  render() {
    console.log(this.state.low);
    return (

      <div>
        <Header />
        <p>Date: {this.state.date}</p>
        <div className="ManageChart">
        <img className="imgStyle" src="https://i.imgur.com/Ebx1fBN.jpg"></img>
        {this.state.open && 
        <PieChart
          data={[
            { title: `open: ${this.state.open}`, value: Math.floor(this.state.open), color: '#4c8fb4' },
            { title: `high: ${this.state.high}`, value: Math.floor(this.state.high), color: '#ffff52' },
            { title: `low: ${this.state.low}`, value: Math.floor(this.state.low), color: '#c4a7a4' },
          ]}
          className ="chartClass" style={{width: "30%" }}
           label={(labelProps) => labelProps.data.map((item,key) => 
              // console.log(item)
              Math.round(item.percentage)
           
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
        <Form onClick={this.handleClick} onChange={this.handleChange} />
        <div className="lefttStock">
      
          {/* <h3>{this.state.stocks}</h3> */}
        </div>
      
        
        </div>

        <div className="rightStock">

          <div>
            <p>Open</p><p>{this.state.open}</p>
          </div>

          <div>
            <p>High</p><p> {this.state.high}</p>
          </div>

          <div>
            <p>Low</p><p>{this.state.low}</p>
          </div>

          <div>
            <p>Close</p><p>{this.state.close}</p>
          </div>

          <div>
            <p>Volume</p><p> {this.state.volume}</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

{/* <div>
<Header />
<Form onClick={this.handleClick} onChange={this.handleChange} />
<div className="stockInfo">
<div className="lefttStock">
<p>Open</p>
<p>High</p>
<p>Low</p>
<p>Close</p>
<p>Volume</p>
</div>
<div className="rightStock">
  <p>{this.state.date}</p>
 <p>{this.state.open}</p>
  <p> {this.state.high}</p>
  <p>{this.state.low}</p>
  <p>{this.state.close}</p>
  <p>Volume</p><p> {this.state.volume}</p>
  </div>
</div >
<Footer />
</div> */}
