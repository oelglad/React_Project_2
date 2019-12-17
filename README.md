## Project title: 

Stocknomics

## Discreption 

This application is required searching by the date and the symbol (company name) and the response coming back will include the stock market information (prices and volumes) in a daily bases


## API Used
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=URALLLSYVMYC9IZ9 


## Wireframes

direct Link: (https://i.imgur.com/jnV5pbR.jpg)



## MVP

The Stocknomics App is an easy app for the user to get the daily stock market updates based of searching by the 
company's symbol

## Goals

The application goal is to give the user an overview of how the market data updated daily for a fast and easy invesment 

 ## API (URL queries, Website	Sample Query) : 
 (https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=URALLLSYVMYC9IZ9)  

## source: Alpha Vantage documentation

 (https://www.alphavantage.co/documentation/) 

## Component Hierarchy

Use this section to define your React components and the data architecture of your app.
src
|__ assets/
      |__ data-tests
      |__ fonts - awsome
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Form.jsx
      |__ Volumes.jsx
      |__ Charts.jsx
      |__ Prices.jsx
      |__ search.jsx
      |__ Footer.jsx
|__ services/
      |__api-helper.js


## Component Breakdown

Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.
Component	Type	state	props	Description
Header	functional ---	The header will contain the name of the app 
 Form.jsx will     --- contain the serch boxes
 Volumes.jsx will  --- render the daily volume 
 Charts.jsx will   --- contain the market chart 
 Prices.jsx will   --- contain a function to render the daily stock prices
 search.jsx will   --- handle the symbol search function 
Footer	functional --- The footer will show info about me and a link to my portfolio.

Header	functional --- 2hrs
 Form.jsx will     --- 2hrs
 Volumes.jsx will  --- 2-3 hrs
 Charts.jsx will   --- 3-5hrs 
 Prices.jsx will   --- 2-3hrs
 search.jsx will   --- 2hrs
Footer	functional --- 2hrs




## Post-MVP

use the text animation 


## Project Delivery

functions will be used are :

ComponentDidMount
onChange
onSubmit

