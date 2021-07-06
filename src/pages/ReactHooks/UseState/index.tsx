import { useState, Component } from 'react';

class Example extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          changeCount
        </button>
      </>
    );
  }
}

const Example1 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>changeCount</button>
    </>
  );
};

const UseState = () => {
  return (
    <div>
      <Example />
      <hr />
      <Example1 />
    </div>
  );
};

export default UseState;
