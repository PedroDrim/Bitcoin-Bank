import * as React from "react";

export default class Person extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <tr>
                <td>{this.props.person.cpf}</td>
                <td>{this.props.person.name}</td>
                <td>{this.props.person.age}</td>
            </tr>
        );
    }
}

