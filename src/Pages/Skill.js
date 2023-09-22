import React from 'react';
import '../Styles/Skill.css';
import transition from '../transition';


const Skill = () => {
    return (
        <div className="skill-section"id="skill">
            <div className="skill-continer">
                <div className="skill-section_title center">
                    <h1>Skill</h1>
                    <h2>보유 기술 숙련도</h2>
                </div>
                <div className="skill-skill-items">
                    <div className="skill-item">
                        <div className="skill-info">
                            <p>HTML</p>
                            <p>75%</p>
                        </div>
                        <div className="skill-line" dt-percent="75%">
                            <span style={{width: "75%"}}></span>
                        </div>
                    </div>
                </div>
                <div className="skill-skill-items">
                    <div className="skill-item">
                        <div className="skill-info">
                            <p>CSS</p>
                            <p>70%</p>
                        </div>
                        <div className="skill-line" dt-percent="70%">
                            <span style={{width: "70%"}}></span>
                        </div>
                    </div>
                </div>
                <div className="skill-skill-items">
                    <div className="skill-item">
                        <div className="skill-info">
                            <p>Javascript</p>
                            <p>60%</p>
                        </div>
                        <div className="skill-line" dt-percent="60%">
                            <span style={{width: "60%"}}></span>
                        </div>
                    </div>
                </div>
                <div className="skill-skill-items">
                    <div className="skill-item">
                        <div className="skill-info">
                            <p>Node.js</p>
                            <p>55%</p>
                        </div>
                        <div className="skill-line" dt-percent="60%">
                            <span style={{width: "60%"}}></span>
                        </div>
                    </div>
                </div>
                <div className="skill-skill-items">
                    <div className="skill-item">
                        <div className="skill-info">
                            <p>React</p>
                            <p>65%</p>
                        </div>
                        <div className="skill-line" dt-percent="60%">
                            <span style={{width: "60%"}}></span>
                        </div>
                    </div>
                </div>
                <div className="skill-skill-items">
                    <div className="skill-item">
                        <div className="skill-info">
                            <p>Typescript</p>
                            <p>45%</p>
                        </div>
                        <div className="skill-line" dt-percent="45%">
                            <span style={{width: "45%"}}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default transition(Skill);