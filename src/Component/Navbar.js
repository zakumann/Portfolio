import React, { useState } from 'react';
import Logo from '../assets/coding_icon.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css'

function Navbar(){
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return(
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt=""/>
                <div className="hiddenLinks">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/project"> Project </Link>
                <Link to="/skill"> Skill </Link>
                <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/project"> Project </Link>
                <Link to="/skill"> Skill </Link>
                <Link to="/contact"> Contact </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;