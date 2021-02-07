import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  generatePortfolio = () => {
    return this.props.portfolio.map((port) => {
      return (
        <Stock
          key={port.id}
          stock={port}
          handleStock={this.props.removeStock}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.generatePortfolio()}
      </div>
    );
  }
}

export default PortfolioContainer;
