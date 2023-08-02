import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import google_logo from '../images/google_logo.jpg';
import Search from './Search';

function Home() {
  return (
    <div>
        <div className='home'>
        <div className='home_header'>
            <div className='home_header_left'>
                <Link to='about'>About</Link>
                <Link to='store'>Store</Link>
            </div>

            <div className='home_header_right'>
                <Link to='gmail'>Gmail</Link>
                <Link to='images'>Images</Link>
                <AppsIcon/>
                <Avatar/>
            </div>
        </div>

        <div className='home_body'>
            <img src={google_logo} alt='google_logo'/>

            <div className='home_inputContainer'>
               <Search hideButton/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home