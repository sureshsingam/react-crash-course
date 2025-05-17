
import './App.css'
import './components/PostsList'
import { useState } from 'react';
import MainHeader from "./components/MainHeader";
import PostsList from './components/PostsList'

function App() {
  const [ modalVisible, setModalIsVisible] = useState(false);

  function showModalHandler(){
      setModalIsVisible(true);
  }

  function hideModalHandler(){
      setModalIsVisible(false);
  }


  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList onStopPosting={hideModalHandler} isPosting={modalVisible}/>
      </main>
    </>
  )
}

export default App
