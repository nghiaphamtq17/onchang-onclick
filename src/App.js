import React, { useState } from "react";

const App = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [show, setDislay] = useState(true);

  const dislayTotal = () => {
    setDislay(!show);
    console.log(show);
  };

  return (
    <div>
      <form>
        <div style={{display:show ? 'inline' : 'none'  }}>
          {Number(value1) + Number(value2)}
        </div>
        <br />
        <input
          type="text"
          name=""
          id="1"
          onChange={(event) => setValue1(event.target.value)}
        />
        <br />
        <input
          type="text"
          name=""
          id="2"
          onChange={(event) => setValue2(event.target.value)}
        />

        <p></p>
      </form>

      <button onClick={() => dislayTotal()}>
        {show == true ? "Hiện" : "Ẩn"}
      </button>
    </div>
  );
};

export default App;
