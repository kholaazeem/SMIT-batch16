import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import store from './config/store'
import Home from './COMPONENT/Home'
import MyHome from './Pages/MyHome'

function App() {
 

  return (
 <Provider store={store}>
<MyHome/>
 </Provider>
  )
}

export default App
