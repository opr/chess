import React from 'react';

let divStyle = {
    height: '40px',
    width: '40px',
    position: 'relative',
    display: 'inline-block',
    float: 'left',
    color: 'red'
};

export default React.createClass({
    render: function() {
        divStyle.backgroundColor = this.props.isWhite ? '#000' : '#fff';
        return <div className="square" style={divStyle}>{this.props.squareId}</div>;

    }
});