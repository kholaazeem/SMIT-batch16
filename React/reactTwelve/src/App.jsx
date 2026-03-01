import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import store from './config/store'
import Home from './COMPONENT/Home'

function App() {
 

  return (
 <Provider store={store}>
  <Home/>
 </Provider>
  )
}

export default App
