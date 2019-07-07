import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" style={{
        width: '60px',
        height: '60px',
      }}>
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="board-row">
          <Square value={0}/>
          <Square value={1}/>
          <Square value={2}/>
        </div>
        <div className="board-row">
          <Square value={3}/>
          <Square value={4}/>
          <Square value={5}/>
        </div>
        <div className="board-row">
          <Square value={6}/>
          <Square value={7}/>
          <Square value={8}/>
        </div>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
