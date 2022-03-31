import { useState } from "react";
import "./app.css";

const App = () => {
  const [cuenta, setCuenta] = useState({valor: 0, paso: 1}); 

  const handleClick = (v) => {
    setCuenta({...cuenta, valor: cuenta.valor + cuenta.paso });
  };

  const handleChange = (e) => {
    const paso = Number(e.target.value);
    if(isNaN(paso)){
      return 
    }
    setCuenta({...cuenta, paso: Number(e.target.value)});
  };

  const handleKeyDown = (e) => {
    const value = Number(e.key);
    if(
      e.key == "Backspace" ||
      e.key == "Enter" ||
      e.key == "Delete" ||
      e.key == "ArrowLeft" ||
      e.key == "ArrowRight" ||
      e.key == "ArrowUp" ||
      e.key == "ArrowDown" ||
      e.key == "Tab" 
    ) {
      return;
    }
     if (isNaN(value) || e.key === " "){
      e.preventDefault();
      return;
    }
  };
  return (
    <div className="App">
      <h3>contador</h3>
      <hr />
      <h2 className="text-center">{cuenta.valor} </h2>
      <hr />
      <div className="margin-button">
        <label>
          paso
        <input type="text" style={{ width: "60px", margin: "5px" }} onChange={handleChange} onKeyDown={handleKeyDown} />
        </label>
      <button   className="btn btn-primary me-2" 
      onClick={ handleClick}>+{cuenta.paso} </button>
      </div>
    </div>
  );
}

export default App;
