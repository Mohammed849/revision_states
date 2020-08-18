import React from 'react';
import Counter from './components/Counter';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        {/* <h1> Counter </h1>
        <h2>{this.state.count}</h2> */}
        {/* <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button> */}
        <Counter
          incrementFn={this.incrementCount}
          decrementFn={this.decrementCount}
          count={this.state.count}
        />
      </div>
    );
  }
}
export default App;
