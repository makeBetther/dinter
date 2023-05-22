import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

import ChatList from './components/chatList/chatList';
import MatchList from './components/chatList/matchList';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
    <div className='Match'>
      <h2>새 매치</h2>
      <MatchList />
    </div>
    <div className='Message'>
      <h2>메세지</h2>
      <ChatList />
    </div>
  </div>
  );
}

export default App;
