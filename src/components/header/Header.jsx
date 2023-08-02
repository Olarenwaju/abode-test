import React from 'react'
import './Header.css'
import headeravatar from '../../assets/images/header-avatar.png'

const Header = () => {
  return (
    <div className='header' style={{height: '181px'}}>
      {/* <img className='header-img' src={headerimg} alt='headerimg' /> */}
      
      <div className='header-head'>

        <div className='header-avatar'>
          <img src={headeravatar} alt='header-avatar' /> 
          <span className='header-online'></span>
        </div>
        
        <span className='header-detail'>
          <div className='header-name'>Oke Samuel</div>
          <div className='header-mail'>okesamuel@gmail.com</div>
        </span>
      </div>
      
    
    </div>
  )
}

export default Header