import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((stockData) => this.setState({ stocks: stockData }));
  }

  addStock = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({ portfolio: [...this.state.portfolio, stock] });
    }
  };

  removeStock = (stock) => {
    if (this.state.portfolio.includes(stock)) {
      let newPort = this.state.portfolio.filter((stonk) => stonk !== stock);
      this.setState({ portfolio: newPort });
    }
  };

  sortStocks = (e) => {
    if (e.target.value === "Alphabetically") {
      let newStocks = this.state.stocks.sort((a, b) =>
        a.name < b.name ? -1 : 1
      );
      this.setState({ stocks: newStocks });
    } else {
      let newStocks = this.state.stocks.sort((a, b) =>
        a.price < b.price ? -1 : 1
      );
      this.setState({ stocks: newStocks });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <MainContainer
          portfolio={this.state.portfolio}
          stocks={this.state.stocks}
          addStock={this.addStock}
          removeStock={this.removeStock}
          sortStocks={this.sortStocks}
        />
      </div>
    );
  }
}

export default App;
