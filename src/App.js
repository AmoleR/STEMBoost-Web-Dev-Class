import "./App.css";
import ReactBoard from "./Board";
import { useState, useRef } from "react";

function App() {
  const [rows, setRows] = useState(6);
  const [cols, setCols] = useState(7);
  const board = useRef(null);
  /**
   * function test(...args) {
   *    console.log(args);
   * }
   *
   * test(1) => [ 1 ]
   * test("Hello World", false, 3, 9, null, undefined) => [ "Hello World", false, 3, 9, null, undefined ]
   *
   * Java
   * C++
   * RUST
   * C
   * Pascal
   */

  function checkVal(val) {
    // NaN
    // less than 1
    // greater than 10
    // valid
    /*
    if (isNaN(val)) return false;
    if (val < 1) return false;
    if (val > 10) return false;
    return true;
    */

    return !(isNaN(val) || val < 1 || val > 10);
  }

  return (
    <div style={{ padding: "2em" }}>
      <ReactBoard ref={board} rows={rows} cols={cols} />
      <label for="num-rows">Number of Rows:</label>
      <br />
      <input
        type="number"
        min="1"
        max="10"
        id="num-rows"
        placeholder="Number of Rows"
        value={rows}
        onChange={function (event) {
          const val = parseInt(event.target.value);
          if (checkVal(val)) setRows(val);
        }}
      />
      <br />

      <label for="num-cols">Number of Columns:</label>
      <br />
      <input
        type="number"
        min="1"
        max="10"
        id="num-cols"
        placeholder="Number of Cols"
        value={cols}
        onChange={function (event) {
          const val = parseInt(event.target.value);
          if (checkVal(val)) setCols(val);
        }}
      />

      <br />
      <button
        onClick={() => {
          if (!!board.current && !!board)
            board.current.initBoard({ rows, cols });
          // { rows: rows, cols: cols }
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default App;

/**
 * Context => Provider
 *         => Consumer
 *         => Data
 * Provider => WRITE to data
 * Consumer => READ the data
 *
 * <Provider >
 *    ...
 *    ...
 * </Provider>
 *
 * Document =>
 * <Consumer>
 *    {value => {
 *        // whatever
 *    }}
 * </Consumer>
 */

/*
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>

 */

/*
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}

*/
