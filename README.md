## Project title: 

Stocknomics

## Discreption 

This application is required searching by the date and the symbol (company name) and the response coming back will include the stock market information (prices and volumes) in a daily bases


## API Used
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=URALLLSYVMYC9IZ9 


## Wireframes

direct Link: (https://i.imgur.com/jnV5pbR.jpg)



## MVP

The Stocknomics App is an easy app for the user to get the daily stock market update based of searching"selecting from the drop down list" by the company's symbol

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
      |__ About.jsx
      |__ Form.jsx
      |__ Volumes.jsx
      |__ Chart.jsx
      |__ ComponentChart.jsx
      |__ Nav.jsx
      |__ Result.jsx
      |__ Footer.jsx
|__ services/
      |__api-helper.js


## Component Breakdown

Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.
Component	Type	state	props	Description
Header	functional ---	The header will contain the name of the app 
 Form.jsx will     --- contain the serch boxes
 Volumes.jsx will  --- render the  volume based on the company name search 
 Chart.jsx will   --- handle the chart Component percentage for the 
 Nav.jsx will   --- contain the navigation links to the other pages
 Result .jsx will   ---  handle the API result values
 ComponentChart.jsx ----  handle the (low, high, close) on hover contain the market chart 
 Footer	--- The footer will show info about me and a link to my portfolio.

Header	      --- 2hrs
 About.jsx         ---3hrs
 Form.jsx will     --- 2hrs
 Volumes.jsx will  --- 2-3 hrs
 Chart.jsx will    --- 3-5hrs 
 Nav.jsx will      --- 2-3hrs
 Result.jsx will   --- 2hrs
 ComponentChart.jsx--- 5hrs
 Footer.jsx	       --- 2hrs
 Header.jsx        ---2hrs
     
     
      
      


## Post-MVP

use the pie chart


## Project Delivery

functions will be used are :

ComponentDidMount
handleClick
handleSubmit

