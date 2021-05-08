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
  let [pageView,setPageView] = useState([0,0]);
  let [modalSelect,setModalSelect] = useState(0);
  let [inputValue,setInputValue] = useState("");
  //state

  //function
  function themeChange(){      
    if(topicSelect===0){
      setTopicSelect(1);    
    }
    else{
      setTopicSelect(0);
    }
    setModalSelect(0);
  }

  function listClick(arg){
    let newPageview = [...pageView];  // deep copy  
    if(modalSelect===0){
      newPageview[arg] = newPageview[arg]+1 ;
      setPageView(newPageview);
  
    }
    else if(!(topicNumber===arg)){
      newPageview[arg] = newPageview[arg]+1 ;
      setPageView(newPageview);
    }

    if(modalSelect===0){  
        if(topicSelect===0){
          setModalSelect(1);
        }
        else{
          setModalSelect(2);
        }
        setTopicNumber(arg);
    }
    else if(topicNumber===arg){
      setModalSelect(0);
    }
    else{
      setTopicNumber(arg);
    }
  }
  
  // function listClick(arg){
  //   let newPageview = [...pageView];  // deep copy  

  //   if(modalSelect===0){
  //     newPageview[arg] = newPageview[arg]+1 ;
  //     setPageView(newPageview);
      

  //   }
  //   else if(!(topicNumber===arg)){
  //     newPageview[arg] = newPageview[arg]+1 ;
  //     setPageView(newPageview);
  //   }


  //   if(modalSelect===0){  
  //       if(topicSelect===0){
  //         setModalSelect(1);
  //       }
  //       else{
  //         setModalSelect(2);
  //       }
  //       setTopicNumber(arg);
  //   }
  //   else if(topicNumber===arg){
  //     setModalSelect(0);
  //   }
  //   else{
  //     setTopicNumber(arg);
  //   }
  // }

  //function
  
    
  
  //html
  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
        <button onClick={ themeChange } className="secretRoom">secret room</button>
      </div>    
      {
        topicSelect === 0
        ? topic.map((a,i)=>{
          return <List key={i} topic={a} pageView={pageView[i]} onClick={() => listClick(i)} />
          })
        : topic_.map((a,i)=>{
          return <List key={i} topic={a} pageView={pageView[i]} onClick={() => listClick(i)} />
          })
      }

      {
        modalSelect === 1
        ? <Modal topic={topic} topicNumber={topicNumber} date="21.04.26" detail="미스터리가 개발자를 선택한 이유" /> :
        modalSelect === 2
        ? <Modal topic={topic_} topicNumber={topicNumber} date="21.04.26" detail="미스터리가 개발자를 선택한 이유" />
        : null
      }
      <div className="searchBox">
        <input className="getSearch"  type="text" onChange={ (e)=>{ setInputValue(e.target.value ) } }/>
        <h4> 박스안에 적은 글이 복사 됩니다.</h4>
        <input className="copySearch" type="text" defaultValue={inputValue}></input>
      </div>
      <div className="publish">
        <input className="goButton" type="button" value="글 작성" ></input>
      </div>
    </div>
  );
  //html
}


export default App;
