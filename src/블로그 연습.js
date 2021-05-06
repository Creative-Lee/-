import React, { useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';
import './블로그 연습.css';


function App(){
  //state 
  let [topic,setTopic] = useState(['daily news 📺','Today issue 🤩']);
  let [pageView,setPageView] = useState([0,0]);
  let [modalState,setModalState] = useState(false);
  let [topicNumber,setTopicNumber] = useState(0);
  let [inputValue,setInputValue] = useState("");
  //state

  //function
  function changeTopic(){
    let newTopic = [...topic];    // deep copy   
    if(topic[0] === 'daily news 📺'){
      newTopic = ['미스터리한 개발자 ✨','Mr.Lee의 등장! ✨'] ;
      setTopic(newTopic);
    }
    else{
      newTopic = ['daily news 📺','Today issue 🤩'] ;
      setTopic(newTopic);
    }
  }

  function listClick(arg){
    let newPageview = [...pageView]; // deep copy  
    newPageview[arg] = newPageview[arg]+1 ;
    setPageView(newPageview);
  
    if(modalState===false){
      setModalState(!modalState);
      setTopicNumber(arg);
    }
    else if(topicNumber===arg){
      setModalState(!modalState);
    }
    else{
      setTopicNumber(arg);
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
        topic.map((a,i)=>{
          return <List key={i} topic={a} pageView={pageView[i]} onClick={() => listClick(i) } />
        })
      }
    <input type="text" onChange={ (e)=>{ setInputValue(e.target.value ) } }/>

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
