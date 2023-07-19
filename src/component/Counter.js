import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "increment" });
  };

  decrement = () => {
    this.props.dispatch({ type: "decrement" });
  };
  render() {
    return (
      <div style={{margin: "10px" , fontStyle:"italic"}}>
          <h1 style={{color:"Brown"}}>Counter using Redux</h1>
        <button onClick={this.decrement} style={{color:"red"}}> decrement</button>
        <div>{this.props.count}</div>
        <button onClick={this.increment}style={{color:"green"}}>increment</button>

        <h4>the value of counter is <span style={{color:"purple"}}>{this.props.count}</span></h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counterReducer,
  };
}

export default connect(mapStateToProps)(Counter);
