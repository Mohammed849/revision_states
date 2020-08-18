import React from 'react';
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>counter</h1>
        <h1> {this.props.count}</h1>
        <button onClick={this.props.incrementFn}>+</button>
        <button onClick={this.props.decrementFn}>-</button>
      </div>
    );
  }
}
export default Counter;
