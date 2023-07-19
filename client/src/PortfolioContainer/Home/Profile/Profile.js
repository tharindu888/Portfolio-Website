import React from 'react'
import Typical from 'react-typical'
import './Profile.css';

export default function () {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/tharindu.sahan.121'> 
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/tharindu_sahan_20/'> 
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/IT21207822?tab=repositories'> 
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/tharindu-sahan-senarathne/'> 
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I' m <span className='highlighted-text'>Tharindu Sahan</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={["Undergraduate",1000,
                                    "Tech Enthusiast",1000,
                                    "AI Enthusiast", 1000
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                        
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        Hire Me{" "}
                    </button>
                    <a href='Tharindu_Sahan Senarathne_Resume.pdf' download='Tharindu Sahan.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
