import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  generateStocks = () => {
    return this.props.stocks.map((stock) => {
      return (
        <Stock key={stock.id} stock={stock} handleStock={this.props.addStock} />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.generateStocks()}
      </div>
    );
  }
}

export default StockContainer;
