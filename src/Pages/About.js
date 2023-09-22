import React from 'react';
import '../Styles/About.css';
import transition from '../transition';
import Glasses from '../assets/glasses.jpg';
import Me from '../assets/me.png';

function About() {
  const imageUrl = window.innerWidth >= 670 ? Glasses : Me;

  return (
    <div className="about">
        <div
            className="aboutTop"
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="aboutBottom">
            <h1>About Me</h1>
            <h3>이정관</h3>
            <p>끊임 없이 공부하고 배움을 게을리하지 않는다는 약속을 하겠습니다.</p>
            <ul>
              <li>생년월일 : 1991년 3월 3일</li>
              <li>학력 : 대구대학교 문헌정보학과 졸업</li>
              <li>주소 : 대구광역시 달서운 화원읍 성화로 4길 13 105동 703호</li>
            </ul>
        </div>
        <div className="career">
          <h1>커리어</h1>
          <ul>
            <li>2010년 화원고등학교 졸업</li>
            <li>2014년 대구대학교 문헌정보학과 졸업</li>
            <li>2022년 대구 AI스쿨(2022.3.14 ~ 2022.8.29) 수료</li>
          </ul>
        </div>
    </div>
  )
}

export default transition(About);