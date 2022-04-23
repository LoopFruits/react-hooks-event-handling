import React from "react";

function Tickler() {

  function tickle() { // this is the event function
    console.log("Teehee!");
  }
    //calls our tickle function?
  return <button onClick={tickle}>Tickle me!</button>;

  // this can also  eliminate the need a of writing more code by using an arrow function over an actual function
  // function Tickler() {
  //   return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;
  // }
}

export default Tickler;
