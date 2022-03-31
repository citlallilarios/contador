import { useState } from "react";
import "./app.css";

const App = () => {
  const [valor, setValor] = useState(0);

  const handleClick = (v) => {
    console.log(v);
    setValor(v + 1);
  };


  return (
    <div className="App">
      <h3>contador</h3>
      <hr />
      <h2 className="text-center">{valor} </h2>
      <hr />
      <div className="margin-button">
      <button   className="btn btn-primary me-2" 
      onClick={()=> handleClick(valor)}>+1</button>
      </div>
    </div>
  );
}

export default App;
