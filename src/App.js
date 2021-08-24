import React from "react";

const App = () => {
  const total = () => {
    console.log("hello");
  };
  const onHandleChange = () => {
    console.log("on handle change!!!");
    let gt1 = document.getElementById("1");
    let gt2 = document.getElementById("2");
    document.querySelector("p").innerHTML = Number(gt1.value) + Number(gt2.value);
  };
  return (
    <div>
      <form>
        <input type="text" name="" id="1" onChange={() => onHandleChange()} />
        <br />
        <input type="text" name="" id="2" onChange={() => onHandleChange()} />

        <p></p>
      </form>

      <button onClick={() => total()}>tong</button>
    </div>
  );
};

export default App;
