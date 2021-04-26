import React, { useState } from 'react';

import './블로그 연습.css';


function App(){
  let [topic,topicChange] = useState(['daily news','Today issue']);
  let [pageView,pageViewChange] = useState(0)

  function 제목바꾸기(){
    let newArray = [...topic];    // depp copy   
    if(topic[0] === 'daily news'){
      newArray = ['미스터리한 개발자','Mr.Lee의 등장!'] ;
      topicChange(newArray);
    }
    else{
      newArray = ['daily news','Today issue'] ;
      topicChange(newArray);
    }
  }

  function eyes(){
    pageViewChange(pageView + 1) 
  }

    return (
      <div className="App">
        <List eyes={eyes} topic={topic[0]} pageView={pageView} /> 
        <List eyes={eyes} topic={topic[1]} pageView={pageView} /> 
        <Modal title="Mr.Lee" date="21.04.26" detail="미스터리가 개발자를 선택한 이유" />
      </div>
    );
}

function List(props){
  return (
    <div className="list">
      <a  onClick={ props.eyes } target="_blank" href="https://www.naver.com"> 
        <div className="topicSide">
          <h3> {  props.topic } <span>📺</span>
          </h3>
        </div>
        <div className="dateViewSide">
          <p className="date">21.04.22</p>
          <div className="pageView">
            👀{ props.pageView }
          </div>
        </div>
      </a>
      <hr/>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 : {props.title}</h2>
      <p>날짜 : {props.date}</p>
      <p>상세내용 : {props.detail}</p>
    </div>
  )
}

export default App;
