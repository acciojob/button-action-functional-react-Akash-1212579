import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let text = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy."
 const[paras,setParas] = useState([]);
 function handlePara()
 {  
  setParas(prev=>[...prev,text]);
 
 }
  console.log(paras);
  return (
    <div id="main">
      
      <button id="click" onClick={()=>handlePara()}>Click</button>
      
     {
  paras.map((ele, index) => (
    <p id="para" key={index}>{ele}</p>
  ))
}

    </div>
  );
}


export default App;
