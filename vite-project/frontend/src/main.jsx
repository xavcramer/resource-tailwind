import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Nav from './Nav/Nav'
import Header from './Header/Header'
import Mainpage from './Mainpage/Mainpage'
import Secimg from './Secimg/Secimg'
import Cardsection from './Cardsection/Cardsection'
import Others from './Others/Others'
import Search from './Search/Search'
import Footer from './Footer/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Header/>
    <Mainpage/>
    <Secimg/>
    <Cardsection/>
    <Others/>
    <Search/>
    <Footer/>
  </StrictMode>,
)
