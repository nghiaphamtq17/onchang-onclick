import React, { useState } from "react";

const App = () => {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  const [show, setDislay] = useState(true);

  const dislayTotal = () => {
    setDislay(!show);
    console.log(show);
  };

  return (
    <div>
      <form>
        <label htmlFor="">Tổng :</label> <div style={{display:show ? 'inline' : 'none'  }}>
          {Number(value1) + Number(value2)}
        </div>
        <br />
        <input
          type="text"
          name=""
          id="1"
          value={value1}
          onChange={(event) => setValue1(event.target.value)}
        />
        <br />
        <input
          type="text"
          name=""
          id="2"
          value={value2}
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
