import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export class Counter extends Component<CounterProps, CounterState> {
  // if props is not there then <{},CounterState>, if state is not there <CounterProps>
  state = {
    count: 0,
  };

  handleCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleCount}>Increase Count</button>
        <p>
          {this.props.message} {this.state.count}
        </p>
      </div>
    );
  }
}
