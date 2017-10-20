import * as React from "react";

export default class CountDown extends React.Component {

  constructor(props) {
    super();

    this.state = {
      time: 1
    };

    setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  render() {
    return (
      <p>Time: {this.state.time}</p>
    );
  }
}

// https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50