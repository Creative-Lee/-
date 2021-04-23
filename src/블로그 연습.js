import React, { useState } from 'react';
import './블로그 연습.css';



function App() {

  
  let [글제목,글제목변경] = useState(['daily news','Today issue']);
  let [pageView,pageViewChange] = useState(0)

  function 제목바꾸기(){
    let newArray = [...글제목];
    {newArray === ['daily news','Today issue'] ?
    ( newArray = ['미스터리한 개발자','Mr.Lee의 등장!'] , 글제목변경( newArray ) ) :
    ( newArray = ['daily news','Today issue'] ,글제목변경( newArray ))}
  }


  function eyes(){
    pageViewChange(pageView + 1) 
  }

  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
        <button className="changeTheme" onClick={ 제목바꾸기 }>change Theme!</button>
      </div>
      <div className="list">
        <h3> {글제목[0]} <span>📺</span></h3> 
          <p className="date">21.04.22</p> <p className="pageView"  onClick= { eyes }>👀{ pageView }</p>
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
