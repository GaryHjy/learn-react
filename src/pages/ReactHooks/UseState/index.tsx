import { useState, Component } from 'react';

/**
 * 类组件与函数式组件写法的区别
 * 1. 类组件定义state是直接在this.state中定义
 * 2. 函数式组件的state定义是通过useState hook来定义
 */

// 类组件
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

// 函数式组件
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
