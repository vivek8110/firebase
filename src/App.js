// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/React-toastify.css  '

function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer></ToastContainer> */}
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    // <Register />
  );
}

export default App;
