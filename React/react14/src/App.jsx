import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import store from './config/store'
import Home from './COMPONENT/Home'
import MyHome from './Pages/MyHome'
import Routing from './config/Routing'

function App() {
 

  return (
 <Provider store={store}>
<Routing/>
 </Provider>
  )
}

export default App
