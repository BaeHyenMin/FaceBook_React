import './App.css';
import Main from './component/main/main';
import SignIn from './component/signIn/signIn';
// import Main from './component/main/main';
// import SignIn from './component/signIn/signIn';
import Main from './component/Main/main'
import SignIn from './component/SignIn/signIn'

import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
