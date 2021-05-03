import React, { useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';
import './블로그 연습.css';


function App(){
  //state 
  let [topic,topicChange] = useState(['daily news 📺','Today issue 🤩']);
  let [pageView,pageViewChange] = useState([0,0]);
  let [name,nameChange] = useState({'도현' : '도짱' , '쩡이' : '쩡짱'});
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

  
  function listClick(arg){
    let newPageview = [...pageView] // deep copy  
    newPageview = [pageView[0]+1,pageView[1]+1];
    pageViewChange(newPageview);

    topicNumberChange(arg);
  }
  
  //function
  
  //html
  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
        <button onClick={ changeTopic } className="changeTheme">secret room</button>
      </div>    
      {/* <List topic={topic[0]} pageView={pageView} listClick={listClick} /> */}
      {/* <List topic={topic[1]} pageView={pageView} listClick={listClick} />  */}

      {
        topic.map((a,i)=> {
          return (    
            <List topic={a} pageView={pageView[i]} listClick={ ()=>listClick(i) } />
          //  <div className="list" onClick= { ()=>{listClick(i)} }>
          //  <div className="topicSide">
          //      <h3> { a }
          //      </h3>
          //  </div>
          //  <div className="dateViewSide">
          //    <p className="date">21.04.22</p>
          //    <div className="pageView">
          //      👀{ pageView[i] }
          //    </div>
          //  </div>
          //  <hr/>
          //</div>
          )
        })
      }
    

      {
        modalState === true
        ? <Modal topic={topic} topicNumber={topicNumber}  writer={ name.쩡이 } date="21.04.26" detail="미스터리가 개발자를 선택한 이유" />
        : null
      }
      <button onClick={ ()=>{modalStateChange(!modalState)} }>모달 on/off</button>
      
    </div>
    
  );
  //html
}


export default App;
