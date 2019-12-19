// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Here: you import classes in between these divs. Underneath, class App is importing <Board /> from class Board. */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) Here: you are stating the default value of each key when the game is started
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Here: here you put in the arguments that the function is going to take 
    const { gameBoard, currentPlayer, winner } = this.state
    // 4) Here: this if statement states the initial values of currentPlayer on the start of the game
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
      })
    }
    if(winner === null){
      // 5) Here: this states that if there is no winner, the game will keep going.
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: this sets the state of the current player that inputs either of the winning combinations to be the winner.
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: this shows the arguments that this function is going to take.
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) Here: this determines what attributes each square is going to hold  */}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here: this will display who the current player is on the screen */}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here: this will display the winner of the game at the end of the game on the screen */}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here: this will output the squares on to the gameboard. */}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: this function is used to decide what the app does when a player clicks on a square while game play is on.
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here: this function is used to decide what the value to set the square to once it has been clicked. */}
        { this.props.value }
      </div>
    )
  }
}

export default App
