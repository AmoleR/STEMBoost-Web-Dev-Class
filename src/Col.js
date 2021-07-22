import Box from "./Box";

function Col(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {props.vals.map((val, idx) => (
        <Box key={`box-${idx}`} row={idx} col={props.col} val={val} />
      ))}
    </div>
  );
}

export default Col;
