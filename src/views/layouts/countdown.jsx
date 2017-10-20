import * as React from "react";

export default class CountDown extends React.Component {

  constructor(props) {
    super();

    this.state = {
      list: {}
    };

    setInterval(() => {
      this.updateList();
    }, 1000);
  }

  updateList() {

    var data = JSON.stringify({});

    fetch("/get/list", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: data
    })
      .catch((err) => { throw new Error("Erro ao buscar lista atualizada: " + err.status); })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          list: res
        })
      })

  }

  render() {
    return (
      <p>Time: {JSON.stringify(this.state.list)}</p>
    );
  }
}