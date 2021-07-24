import "./App.css";
import ReactBoard from "./Board";

function App() {
  // <> = <Fragment>
  return (
    <div style={{ padding: "2em" }}>
      {/*
      {winner > 0 ? <Confetti /> : <></>}
      <h1>
        Winner:{winner > 0 ? ` Player ${winner}` : winner === -1 ? " Tie" : ""}
      </h1>
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
      */}
      <ReactBoard rows={6} cols={7} />
    </div>
  );
}

export default App;
