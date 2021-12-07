import { Component, PureComponent } from 'react';

class SetState extends Component {
  state = {
    count: 0,
  };

  addCount = () => {
    const { count } = this.state;
    console.log('before', this.state.count);
    // 多次调用setState会直接取最后一次setState
    // this.setState({
    //   count: count + 1
    //   // count: 1
    // })
    // this.setState({
    //   count: count + 1
    //   // count: 1
    // })
    // this.setState({
    //   count: count + 1
    //   // count: 1
    // })
    this.setState(
      {
        count: count + 1,
      },
      () => {
        // 第二个参数的回调函数会在re render之后触发
        console.log(this.state.count);
      },
    );
    console.log('after', this.state.count);
  };

  componentDidUpdate() {
    console.log('更新', this.state.count);
  }

  render() {
    return (
      <div>
        SetState
        {this.state.count}
        <button onClick={this.addCount}>点击</button>
      </div>
    );
  }
}

export default SetState;
