import React, { useState } from 'react';
import './App.css';



function App() {

  
  let [글제목,글제목변경] = useState(['daily news','Today issue']);
  let [pageView,pageViewChange] = useState('0')

  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{  } } >📺</span></h3> 
         <p>21.04.22</p> <span className="pageView">👀{ pageView }</span>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]} <span>📺</span> </h3>
        <p>21.04.22</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]} <span>📺</span> </h3>
        <p>21.04.22</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
