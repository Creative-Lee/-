import React, { useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';
import './블로그 연습.css';


function App(){
  //state 
  let [topic,topicChange] = useState(['daily news','Today issue']);
  let [pageView,pageViewChange] = useState(0)
  let [name,nameChange] = useState({'도현' : '도짱' , '쩡이' : '쩡짱'});
  //state

  //function
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
  //function

  //html
  return (
    <div className="App">
      <div className="nav">
        <div>Mr.Lee Blog</div>
        <button onClick={ 제목바꾸기 } className="changeTheme">secret room</button>
      </div>    
      <List href={'https://news.naver.com/'} topic={topic[0]} icon={'📺'} pageView={pageView} eyes={eyes} /> 
      <List href={'https://news.naver.com/main/list.nhn?mode=LSD&mid=sec&sid1=001'} topic={topic[1]} icon={'🤩'} pageView={pageView} eyes={eyes} /> 
      <Modal title="Mr.Lee" writer={ name.쩡이 } date="21.04.26" detail="미스터리가 개발자를 선택한 이유" />
    </div>
  );
  //html
}


export default App;
