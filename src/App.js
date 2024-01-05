/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [likeCount, plusLike] = useState(0);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(a){
    console.log(a)
  })

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임
          <button onClick={() => {
            let copy = [...글제목];
            copy.sort();
            제목변경(copy);
          }}>가나다순정렬</button>
          <button onClick={() => {
            let copy = [...글제목];
            copy[0] = '여자 코트 추천';
            제목변경(copy)
            }}>제목 변경</button>
          </h4>
      </div>
      <div className='list'>
        <h4 onClick={
          modal == false ? ()=>setModal(true) : ()=>setModal(false)}>{글제목[0]}
          <span onClick={()=>plusLike(likeCount + 1)}>👍</span> {likeCount}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modal == true ? <Modal></Modal> : null
      }
      
    </div>
  );
}

function Modal () {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
