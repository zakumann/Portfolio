import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/Main.png';
import '../Styles/Home.css';
import Typewriter from "typewriter-effect";
import transition from '../transition';

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${BannerImage})` }}>
      <div 
      className="headerContainer">
        <h1>
          포기하지 않는 {
            <Typewriter
          options= {{
            strings: ['개발자', '꿈', '이정관'],
            autoStart: true,
            loop: true,
          }}
        />
        }
        </h1>
        <Link to="/about">
          <button>소개하겠습니다.</button>
        </Link>
      </div>
    </div>
  )
}

export default transition(Home);