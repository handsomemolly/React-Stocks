import React from "react";

const Stock = (props) => {
  // console.log(props.addStock);
  return (
    <div onClick={() => props.handleStock(props.stock)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text">{props.stock.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
