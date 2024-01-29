import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import './index.css'
import Profile from './pages/Profile';
import HomeTemplate from './templates/HomeTemplate';
import UserTemplate from './templates/UserTemplate';
import DashBoard from './pages/DashBoard';
import Users from './pages/Users';
import Product from './pages/Product'
import ReactLifeCycle from './pages/ReactLifeCycle/ReactLifeCycle';
//setup redux
import {Provider} from 'react-redux'
import {store} from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          {/* index là thuộc tính component mặc định load trên <outlet/> của template */}
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='lifecycle' element={<ReactLifeCycle />}></Route>
          <Route path='*' element={<Navigate to="/" />}></Route>
        </Route>

        <Route path='user' element={<UserTemplate />}>
            <Route index element={<DashBoard />} ></Route>
            <Route path='index' element={<Users />} ></Route>
            <Route path='product' element={<Product />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

//cmd + ~
