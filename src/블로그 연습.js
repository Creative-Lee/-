import React, { useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';
import './블로그 연습.css';


function App(){
  //state 
  let [topic,topicChange] = useState(['daily news 📺','Today issue 🤩']);
  let [pageView,pageViewChange] = useState([0,0]);
  let [modalState,modalStateChange] = useState(false);
  let [topicNumber,topicNumberChange] = useState(0);
  //state

  //function
  function changeTopic(){
    let newTopic = [...topic];    // deep copy   
    if(topic[0] === 'daily news 📺'){
      newTopic = ['미스터리한 개발자 ✨','Mr.Lee의 등장! ✨'] ;
      topicChange(newTopic);
    }
    else{
      newTopic = ['daily news 📺','Today issue 🤩'] ;
      topicChange(newTopic);
    }
  }

  function listClick(i){
    let newPageview = [...pageView]; // deep copy  
    newPageview[i] = newPageview[i]+1 ;
    pageViewChange(newPageview);
  
    if(modalState===false){
      modalStateChange(!modalState);
      topicNumberChange(i);
    }
    else if(topicNumber===i){
      modalStateChange(!modalState);
    }
    else{
      topicNumberChange(i);
    }
  }
  //function
  
  //html
  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
        <button onClick={ changeTopic } className="changeTheme">secret room</button>
      </div>    
      {
        topic.map((a,i)=> {
          return (    
            <List topic={a} pageView={pageView[i]} listClick={ ()=>listClick(i) } />
          )
        })
      }
    

      {
        modalState === true
        ? <Modal topic={topic} topicNumber={topicNumber} date="21.04.26" detail="미스터리가 개발자를 선택한 이유" />
        : null
      }
    </div>
  );
  //html
}


export default App;
