import logo from './logo.svg';
import './App.css';
import React ,{useState, useEffect} from "react";

function App() {

let styles = {color : 'orange', fontSize: '30px'};
let posts='강남 고기 맛집';
function 함수(){
  return 100;
}
  const 블로그제목 = "개발 Blog";
  let [글제목,글제목변경] =  useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);

  let [숫자,변경될숫자] = useState(0);

  function 글제목바꿈(){
    var titleArray = [...글제목];
    titleArray[0] = titleArray[0].replace("남자","여자");
    titleArray.sort()
    글제목변경(titleArray);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div style={styles}>{블로그제목}</div>
      </div>

      <div className = "list">
        <h3 onClick={글제목바꿈 }>{글제목[0]} <span onClick ={ ()=>{변경될숫자(숫자+1)}}>👍</span>{숫자}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>  
      <div className = "list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>                         
    </div>
  );
}

export default App;
