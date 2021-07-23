// Most hooks start with use

function Box(props) {
  // do stuff with box
  // for example return the box
  // for now we're gonna export it

  function getColor(val) {
    // val = 0, 1, 2

    if (val === 0) return "lightblue";
    if (val === 1) return "red";
    if (val === 2) return "yellow";

    throw new Error(`${val} is not 0, 1, or 2.`);
  }

  function onClick(event) {}
  // here is hook

  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: getColor(props.val),
        border: "1px solid black",
      }}
      onClick={onClick}
    />
  );
}

export default Box;

/**
 *  _____________
 * |            |
 * |     Box    |        <=        Col
 * |____________|
 *
 */
