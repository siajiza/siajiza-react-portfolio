import React, { Component } from 'react';
import moment from "moment";
import PortfolioContainer from './portfolio/portfolio-container';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Siajiza</h1>
        <PortfolioContainer />
        <h1>Silvia Jimenez Zapata</h1>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <div>{moment().format("MMMM do YYYY, h:mm:ss a")}</div> 
      </div>
    );
  }
}
