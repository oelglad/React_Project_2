import React, { Component } from 'react';
import { stockInfo } from './services/api-helper';
import { Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import ChartComponent from './components/ComponentChart';
import Chart from './components/Chart';

import About from './components/About';


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
        <nav>
          <Link to="/about">About Page</Link>
        </nav>
        <main>
          <Route path="/about" render={() => <About />} />
        </main>
        <Header />
        <Form onClick={this.handleClick} onChange={this.handleChange} />
        <p>Date: {this.state.date}</p>
        <Chart
          open={this.state.open}
          high={this.state.high}
          low={this.state.low}
        />
        <ChartComponent
          open={this.state.open}
          low={this.state.low}
          high={this.state.high}
          close={this.state.close}
          volume={this.state.volume}
        />
        <Footer />
      </div>
    );
  }
}
export default App;


{/* <Form onClick={this.handleClick} onChange={this.handleChange} /> */ }


