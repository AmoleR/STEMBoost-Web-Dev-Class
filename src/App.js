import "./App.css";
import Col from "./Col";

function App() {
  const arr = Array.from(new Array(7), () => Array.from(new Array(6), () => 0));
  arr[6][5] = 2;
  arr[5][5] = 1;
  console.log(process.env.NODE_ENV);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {arr.map((vals, idx) => (
        <Col key={`col-${idx}`} col={idx} vals={vals} />
      ))}
    </div>
  );
}

export default App;
