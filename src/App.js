import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Products from './components/pages/products';
import Basket from './components/pages/Cart/Baskets';
import Auth from './components/pages/auth/auth';
import Reg from './components/pages/auth/reg';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import DeepCard from './components/elements/card/deepCard';

function App() {

  const testAuth = useSelector(state => state.login.authUser)
  const getAuthToken = localStorage.getItem('authToken')
  console.log(testAuth)
// const [auth, setAuth] = useState(true)
// const login =() => {
//   console.log('=', auth)
// setAuth(!auth)
// console.log('click', auth)
// }

  return (
    <>
    <Routes>
      {
      getAuthToken
        ? <>
        <Route path='/' element={<Products />}/>
         <Route path='/cart' element={<Basket/>}/>
         <Route path='/products/:id' element={<DeepCard/>}/>
         </>
         : <>
         <Route path='*' element={<Auth/>}/>
         <Route path='/reg' element={<Reg/>}/>
         </>
      }
      {/* <Route path='/' element={<Auth/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/cart' element={<Basket/>}/>
      <Route path='/products/:id' element={<DeepCard/>}/> */}
    </Routes>
    </>
  );
}

export default App;
