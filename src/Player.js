import { useState } from "react";

// var = NEVER USED
// const = Constant
// let = Mutable

// const obj = { username: "AmoleR", password: "SecretP@$$123",  }
// let ob = [ "Stemboost-Web-Class", "Blog", ]

// const age = 15;
// let newAge = 13;
//

export default function Player(props) {
  const [name, setName] = useState(`Player ${props.name}`);
  function click() {
    setName("Player John");
  }
  return <div onClick={click}>Name: {name}</div>;
}

/**
 * Same as
 * function Player() {
 *      ....
 * }
 *
 * export default Player;
 */
