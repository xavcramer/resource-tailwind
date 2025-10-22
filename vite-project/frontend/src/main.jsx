import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Nav from './Nav/Nav'
import Header from './Header/Header'
import Mainpage from './Mainpage/Mainpage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Header/>
    <Mainpage/>
  </StrictMode>,
)
