import { Component } from "react";
import Confetti from "react-confetti";
import Col from "./Col";

/**
 * useEffect = componentDidMount, componentShouldUpdate, AND componentWillUnmount
 */

// class, new, this, constructor, extends

class Board {
  numPlayers = 2;
  curr = 1;
  winner = 0;

  constructor(rowSize, colSize) {
    this.rows = rowSize;
    this.cols = colSize;
    this.board = Array.from(new Array(this.cols), () =>
      Array.from(new Array(this.rows), () => 0)
    );
  }

  // allEqual([1, 2, 1, 1])
  // allEqual(1,2,1,1)
  static allEqual(...arr) {
    return new Set(arr).size === 1;
  }

  // Returns 0, 1, or 2
  // ++ same as i = i + 1
  hasWon() {
    const arr = this.board;

    for (let i = 0; i < arr.length && arr[i + 3]; i++)
      for (let j = 0; j < arr[i].length; j++)
        if (
          Board.allEqual(
            arr[i][j],
            arr[i + 1][j],
            arr[i + 2][j],
            arr[i + 3][j]
          ) &&
          arr[i][j] !== 0
        )
          return arr[i][j];

    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr[i].length; j++)
        if (
          Board.allEqual(
            arr[i][j],
            arr[i][j + 1],
            arr[i][j + 2],
            arr[i][j + 3]
          ) &&
          arr[i][j] !== 0
        )
          return arr[i][j];

    for (let i = 0; i < arr.length && arr[i + 3]; i++)
      for (let j = 0; j < arr[i].length; j++)
        if (
          Board.allEqual(
            arr[i][j],
            arr[i + 1][j + 1],
            arr[i + 2][j + 2],
            arr[i + 3][j + 3]
          ) &&
          arr[i][j] !== 0
        )
          return arr[i][j];

    for (let i = 0; i < arr.length && arr[i + 3]; i++)
      for (let j = 0; j < arr[i].length; j++)
        if (
          Board.allEqual(
            arr[i][j],
            arr[i + 1][j - 1],
            arr[i + 2][j - 2],
            arr[i + 3][j - 3]
          ) &&
          arr[i][j] !== 0
        )
          return arr[i][j];

    for (let i = 0; i < arr.length && arr[i + 3]; i++)
      for (let j = 0; j < arr[i].length; j++) if (arr[i][j] === 0) return 0;

    return -1;
  }

  place(col) {
    if (this.winner)
      throw new Error(
        this.winner === -1
          ? "The game has ended in a draw"
          : `Player ${this.winner} already won.`
      );

    let colArr = this.board[col];

    for (let i = colArr.length - 1; i >= 0; i = i - 1) {
      if (colArr[i] === 0) {
        this.board[col][i] = this.curr;
        this.curr = 3 - this.curr;
        this.winner = this.hasWon();

        return;
      }
    }

    throw new Error(`Column is already full; try another one.`);
  }
}

// const, function, let, var, if, for, while, else, return

// new, this, class, constructor
// initialize (create) the class => send request to google
/**
 * class GoogleSearch {
 *      query = "";
 *
 *      constructor(query) {
 *          this.query = query;
 *          this.searchGoogle();
 *      }
 *
 *      // some other functions
 * }
 *
 * const stemboost = new GoogleSearch("stemboost");
 */

/**
 * BOARD Class
 *
 *  - hasWon
 *
 * board VARIABLE
 *
 *  - allEqual
 *  - constructor
 */

/**
 * CAR CLASS
 *   - ON
 *   - OFF
 *   - FORWARD
 *   - BACKWARD
 *   - LEFT
 *   - RIGHT
 *
 * FERRARI EXTENDS CAR
 *   - SUNROOF
 *   - REBOOT
 * [
 *   - ON
 *   - OFF
 *   - FORWARD
 *   - BACKWARD
 *   - LEFT
 *   - RIGHT
 * ]
 */

//       CHILD  inherits   PARENT
class ReactBoard extends Component {
  state = {
    error: "",
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    if (typeof props.rows !== "number")
      throw new Error("Rows is not a number.");
    if (typeof props.cols !== "number")
      throw new Error("Cols is not a number.");
    if (props.cols <= 0 || props.cols > 10)
      throw new Error("There must be between 1 and 10 columns.");
    if (props.rows <= 0 || props.rows > 10)
      throw new Error("There must be between 1 and 10 rows.");
    this.board = new Board(props.rows, props.cols);
  }

  onClick(col) {
    try {
      this.board.place(col);
      this.setState({ error: "" });
    } catch (err) {
      this.setState({ error: err });
    }
    this.forceUpdate();
  }

  render() {
    console.log(`Type of error is ${typeof this.state.error}`);
    const winner = this.board.winner;
    return (
      <div>
        {winner > 0 ? <Confetti /> : <></>}
        <h1>
          Winner:
          {winner > 0 ? ` Player ${winner}` : winner === -1 ? " Tie" : ""}
        </h1>
        <div
          className="App"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {this.board.board.map((vals, idx) => (
            <Col
              key={`col-${idx}`}
              col={idx}
              vals={vals}
              onClick={() => this.onClick(idx)}
            />
          ))}
        </div>
        <div style={{ color: "red" }}>{this.state.error.message}</div>
      </div>
    );
  }
}

export default ReactBoard;
