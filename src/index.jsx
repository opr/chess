import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

const board = {};

ReactDOM.render(
    <Board layout={board} />,
    document.getElementById('app')
);