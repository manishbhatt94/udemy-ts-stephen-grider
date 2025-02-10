import React from "react";

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

export class App extends React.Component<AppProps, AppState> {
  state = {
    counter: 0,
  };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render(): React.ReactNode {
    const { color } = this.props;
    return (
      <div>
        <h1>Hello 👋!</h1>
        <p>{color ? `Favourite color is ${color}` : "No color preference"}</p>
        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>{" "}
        <button type="button" onClick={this.onDecrement}>
          Decrement
        </button>
        <p style={{ fontSize: "1.5rem" }}>{this.state.counter}</p>
      </div>
    );
  }
}
