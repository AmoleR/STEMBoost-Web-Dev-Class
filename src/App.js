import "./App.css";
import Col from "./Col";
import { useState } from "react";
import Confetti from "react-confetti";

function App() {
  const [arr, setArr] = useState(
    Array.from(new Array(7), () => Array.from(new Array(6), () => 0))
  );
  const [curr, setCurr] = useState(1);
  const [winner, setWinner] = useState(0);

  function onColClick(col) {
    if (!!winner) return;

    let colArr = arr[col];

    for (let i = colArr.length - 1; i >= 0; i = i - 1) {
      if (colArr[i] === 0) {
        arr[col][i] = curr;
        setCurr(3 - curr);
        setArr(arr);
        setWinner(hasWon(arr));

        return;
      }
    }

    alert("You failed to click the right column.");
  }

  // allEqual([1, 2, 1, 1])
  // allEqual(1,2,1,1)
  function allEqual(...arr) {
    return new Set(arr).size === 1;
  }

  // Returns 0, 1, or 2
  // ++ same as i = i + 1
  function hasWon(arr) {
    for (let i = 0; i < arr.length && arr[i + 3]; i++)
      for (let j = 0; j < arr[i].length; j++)
        if (
          allEqual(arr[i][j], arr[i + 1][j], arr[i + 2][j], arr[i + 3][j]) &&
          arr[i][j] !== 0
        )
          return arr[i][j];

    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr[i].length; j++)
        if (
          allEqual(arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i][j + 3]) &&
          arr[i][j] !== 0
        )
          return arr[i][j];

    for (let i = 0; i < arr.length && arr[i + 3]; i++)
      for (let j = 0; j < arr[i].length; j++)
        if (
          allEqual(
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
          allEqual(
            arr[i][j],
            arr[i + 1][j - 1],
            arr[i + 2][j - 2],
            arr[i + 3][j - 3]
          ) &&
          arr[i][j] !== 0
        )
          return arr[i][j];

    return 0;
  }

  // <> = <Fragment>
  return (
    <div style={{ padding: "2em" }}>
      {!!winner ? <Confetti /> : <></>}
      <h1>Winner:{!!winner ? ` Player ${winner}` : ""}</h1>
      <div
        className="App"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {arr.map((vals, idx) => (
          <Col key={`col-${idx}`} col={idx} vals={vals} onClick={onColClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
