import React, { useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';
import './블로그 연습.css';


function App(){
  //state 
  let [topic,setTopic] = useState(['daily news 📺','Today issue 🤩']);
  let [topic_,setTopic_] = useState(['미스터리한 개발자 ✨','Mr.Lee의 등장! ✨'])

  let [topicSelect,setTopicSelect] = useState(0);
  let [topicNumber,setTopicNumber] = useState(0);
  let [modalSelect,setModalSelect] = useState(null);

  let [pageView,setPageView] = useState([0,0]);
  let [pageView_,setPageView_] = useState([0,0]);
  let [pageViewSelect,setPageViewSelect] = useState(0);
  
  let [inputValue,setInputValue] = useState("");
  //state

  //function
  function themeChange(){      
    if(topicSelect===0){
      setTopicSelect(1);
      setPageViewSelect(1);
    }
    else{
      setTopicSelect(0);
      setPageViewSelect(0);    
    }
    setModalSelect(null);
  }

  function listClick(arg){
    let newPageView = [...pageView];  // deep copy  
    let newPageView_ = [...pageView_]; // deep copy
    setTopicNumber(arg);    //토픽넘버는 0,1 따라감

    if(topicSelect===0){
      setModalSelect(0);
    }
    else{
      setModalSelect(1);
    }

    if( modalSelect === null || !( topicNumber === arg )){
      if( pageViewSelect === 0 ){
        newPageView[arg] = newPageView[arg] + 1 ;
        setPageView(newPageView);
      }
      else{
        newPageView_[arg] = newPageView_[arg] + 1 ;
        setPageView_(newPageView_);
      }
    }
    else{
      setModalSelect(null);
    }
  }
  
  function pushTopic(){
    let newTopic = [...topic]
    newTopic.push(inputValue);
    setTopic(newTopic);
  }
  



  //html
  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
        <button onClick={ ()=> themeChange() } className="secretRoom">secret room</button>
      </div>    
      {
        topicSelect === 0
        ? topic.map((a,i)=>{
          return <List key={i} topic={a} pageView={pageView[i]} onClick={ () => listClick(i)} /> 
          }):       
        topicSelect === 1  
        ? topic_.map((a,i)=>{
          return <List key={i} topic={a} pageView={pageView_[i]} onClick={ () => listClick(i)}/>
          })
        : null   //setTopicSelect(0)
      }

      {
        modalSelect === 0
        ? <Modal topic={topic} topicNumber={topicNumber} date="21.04.26" detail="미스터리가 개발자를 선택한 이유" /> :
        modalSelect === 1
        ? <Modal topic={topic_} topicNumber={topicNumber} date="21.04.26" detail="미스터리가 개발자를 선택한 이유" />
        : null
      }
      <div className="searchBox">
        <input className="getSearch"  type="text" onChange={ (e)=>{ setInputValue(e.target.value ) } }/>
        <h4> 박스안에 적은 글이 복사 됩니다.</h4>
        <input className="copySearch" type="text" defaultValue={inputValue}></input>
      </div>
      <div className="publish">
        <input className="goButton" type="button" value="글 작성" onClick={ () => pushTopic() }></input>
      </div>
    </div>
  );
  
  //html
}


export default App;
