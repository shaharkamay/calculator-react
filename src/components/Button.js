import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button id={this.props.id} className={this.props.className} onClick={() => this.props.onClick(this.props.value)}>{this.props.value}</button>
        );
    }
} 

export default Button;