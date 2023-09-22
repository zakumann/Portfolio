import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://github.com/zakumann"><GitHubIcon/></a><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=[samuel742able@gmail.com]"><GoogleIcon /></a><a href="https://www.linkedin.com/in/jung-kwan-lee-develop/"><LinkedInIcon /></a>
        </div>
        <p>&copy; 2023 JungKwanLee</p>
        <a href="https://drive.google.com/file/d/1QxPd5QBaMqzXcAO41XNNNMT-PLz4V36i/view?usp=sharing">이력서</a>
    </div>
  )
}

export default Footer