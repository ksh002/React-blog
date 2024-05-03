/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
 
  let post = 'ReactBlog';
  let [one, a] = useState(['나백억커피 망우점', '가백억커피 중랑점', '다백억커피 중화역점'])
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>{post}</div>
      </div>
      <button onClick={() =>{
        let sortArr = [...one].sort();
        a(sortArr)
      }}>정렬</button>
      <div className="list">
        <h4>{one[0]} <span style={{cursor : 'pointer'}} onClick={() => { 따봉변경( 따봉 + 1 ) }}>👍</span> {따봉}</h4>
        <p>5월 4일 발행</p>
        <span style={{cursor : 'pointer',display : 'block', marginBottom : '20px'}} onClick = {() => {
          let copy = [...one];
          copy[0] = '백억커피 망우점 짱';
          a(copy);
        }}>✨</span>
      </div>



      <div className="list">
        <h4>{one[1]}</h4>
        <p>5월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{one[2]}</h4>
        <p>5월 4일 발행</p>
      </div>
      
    </div>
  )
}

export default App;
