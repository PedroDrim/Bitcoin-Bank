var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          <div>{this.props.name}</div>
        </body>
      </html>
    );
  }
}

module.exports = HelloMessage;