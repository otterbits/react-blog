/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var today = new Date();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var monthDay = month  + '월 ' + day + '일';

  let [글제목, 제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [likeCount, plusLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [userInput, setUserInput] = useState('');
  let [date, setDate] = useState(monthDay)

 

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

      {
        글제목.map(function(a, i){
          return (
          <div className='list' key={i}>
          <h4 onClick={
          modal == false ? ()=>{setModal(true); setTitle(i);} : ()=>setModal(false)}>{글제목[i]}
          <button onClick={(e)=>{
            e.stopPropagation();
            let copy = 글제목.filter((a, index) => index !== i);
            제목변경(copy);

          }}>글 삭제</button>
          </h4>
          <span onClick={()=>{
            let copy = [...likeCount]
            copy[i] ++;
            plusLike(copy)
            }}>👍</span> {likeCount[i]}
          <p>{date} 발행</p>
        </div>
      )})
      }

      <input onChange={(e)=>{
        setUserInput(e.target.value);
      }}>
      </input>
      <button onClick={()=>{
        userInput !== '' ? (()=>{
          let copyTitles = [...글제목];
          let copyLikes = [...likeCount];
          copyTitles.unshift(userInput);
          copyLikes.unshift(0);
          제목변경(copyTitles);
          plusLike(copyLikes);
        }) () :
            alert('<warning>Please input title')
      }}>
        글 작성
      </button>

      {
        modal == true ? <Modal title={title} 제목변경={제목변경} 글제목={글제목}></Modal> : null
      }
      
    </div>
  );
}

function Modal (props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {
        let copy = [...props.글제목]
        copy[0] = '여자 코트 추천';
        props.제목변경(copy)}}>글수정</button>
    </div>
  )
}

export default App;
