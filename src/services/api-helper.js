import axios from 'axios';



export const stockInfo = async (props) => {
    
  const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.rightnow}&apikey=URALLLSYVMYC9IZ9`);
  return response;
}

