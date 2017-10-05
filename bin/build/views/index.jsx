var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

module.exports = HelloMessage;