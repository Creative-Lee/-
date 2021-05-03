import React, { useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';
import './블로그 연습.css';


function App(){
  //state 
  let [topic,topicChange] = useState(['daily news 📺','Today issue 🤩']);
  let [pageView,pageViewChange] = useState(0)
  let [name,nameChange] = useState({'도현' : '도짱' , '쩡이' : '쩡짱'});
  let [modalState,modalStateChange] = useState(false);
  //state

  //function
  function titleChange(){
    let newArray = [...topic];    // deep copy   
    if(topic[0] === 'daily news'){
      newArray = ['미스터리한 개발자','Mr.Lee의 등장!'] ;
      topicChange(newArray);
    }
    else{
      newArray = ['daily news','Today issue'] ;
      topicChange(newArray);
    }
  }

  function listClick(){
    pageViewChange(pageView + 1) ;
    if(modalState === false){
      modalStateChange(true);
    }
    else{
      modalStateChange(false);
    }
  }
  
  //function
  
  //html
  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
        <button onClick={ titleChange } className="changeTheme">secret room</button>
      </div>    
      <List topic={topic[0]} icon={'📺'} pageView={pageView} listClick={listClick} />
      <List topic={topic[1]} icon={'🤩'} pageView={pageView} listClick={listClick} />

      {
        topic.map(function(topic){
          return (
            <div className="list" onClick={ listClick }>
            <div className="topicSide">
                <h3> { topic } <span>{'📺'}</span>
                </h3>
            </div>
            <div className="dateViewSide">
              <p className="date">21.04.22</p>
              <div className="pageView">
                👀{ pageView }
              </div>
            </div>
            <hr/>
          </div>
          )
        })
      }

      {
        modalState === true
        ? <Modal title="Mr.Lee" writer={ name.쩡이 } date="21.04.26" detail="미스터리가 개발자를 선택한 이유" />
        : null
      }      
    </div>
  );
  //html
}


export default App;
