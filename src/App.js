import './App.css';
// import Main from './component/main/main';
// import SignIn from './component/signIn/signIn';
import Main from './component/main/main'
// import SignIn from './component/signIn/signIn'

import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
