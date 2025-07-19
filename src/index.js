import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Nav from './components/navbar';
import Fpage from './components/Fpage';
import Aboutt from './components/about';
import Skil from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Navv from './project/rou';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<Nav ani="fade-down"></Nav>
<Fpage ani="fade-left"></Fpage>
<Aboutt ani="fade-right" anim="flip-left" anima="flip-down"></Aboutt>
<Skil></Skil>
<Navv></Navv>
<Contact animzz="fade-right" animz="flip-down"></Contact>
<Footer></Footer>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
