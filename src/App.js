import React, { Component } from 'react';
import { stockInfo } from './services/api-helper';
import Form from './components/Form'
import './App.css';


//API_KEY : URALLLSYVMYC9IZ9
// https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=URALLLSYVMYC9IZ9
// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=URALLLSYVMYC9IZ9
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      symbol: ""

    }
  }
  componentDidMount = async () => {
    const resp = await stockInfo(this.state)
    this.setState({
      stocks: resp

    })
  }
  render() {
    console.log(this.state.stocks)
    return (
      
      < div >
      <Form />
      </div >
    );
  }
}
export default App;
