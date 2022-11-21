import React from 'react'
import './style/header.css'

export const Header = () => {
  return (
    <div className='header-'>
        <div className='header-left'>
            <div className="ui search header-left-content">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search" />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
            <div className="header-left-content">
                <a href='#'>About us</a>
            </div>
            <div className="header-left-content">
                <a href='#'>FAQ</a>
            </div>
        </div>

        <div className='header-middle'>
            <div className='header-middle-content'>AITU Edu</div>
        </div>
        <div className='header-right'>
            <div className='header-right-content'>
                <button className="ui inverted basic button">Log In</button>
                <button className="ui inverted basic button">Sign Up</button>
            </div>
        </div>
    </div>
  )
}
