import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import logo from '../../assets/images/abodelogo.jpg'
import dashicon from '../../assets/icons/dash-icon.svg'
import assetsicon from '../../assets/icons/assests-icon.svg'
import mortgageicon from '../../assets/icons/mortgage-icon.svg'
import savingsicon from '../../assets/icons/savings-icon.svg'
import marketplaceicon from '../../assets/icons/marketplace-icon.svg'
import referralicon from '../../assets/icons/referral-icon.svg'
import communityicon from '../../assets/icons/community-icon.svg'
import toolsicon from '../../assets/icons/tools-icon.svg'
import logouticon from '../../assets/icons/logout-icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className='sidebar-logo' src={logo} alt='logoImg' />

      <div className='sidebar-main'>

        <Link to="/" className='sidebar-link'>
          <div className='sidebar-list'>
            <span className='sidebar-icon'>
              <img src={dashicon} alt='dash-icon'/>
            </span>
              Dashboard  
          </div>
        </Link>
        
        <Link to="/" className='sidebar-link'>
          <div className='sidebar-list'>
            <span className='sidebar-icon'>
              <img src={assetsicon} alt='assetsicon' />
            </span>
            Assets
          </div>
        </Link>

        <Link to="/" className='sidebar-link'>
          <div className='sidebar-list'>
            <span className='sidebar-icon'> 
              <img src={mortgageicon} alt='mortgageicon' />
            </span>
            Mortgage
          </div>
        </Link>
        
        <Link to='/' className='sidebar-link'>
          <div className='sidebar-list'>
            <span className='sidebar-icon'>
              <img src={savingsicon} alt='savingsicon' />
            </span>
            Savings
          </div>
        </Link>
        
        <Link to='/' className='sidebar-link'>
          <div className='sidebar-list'>
            <span className='sidebar-icon'>
              <img src={marketplaceicon} alt='marketplace' />
            </span>
            Marketplace
          </div>
        </Link>
        

        <hr className='sidebar-hr'/>

        <Link to='/' className='sidebar-link'>
          <div className='sidebar-list'>
            <span className='sidebar-icon'>
              <img src={referralicon} alt='referral-icon' />
            </span>
            Referral
          </div>
        </Link>
        

        <Link to='/' className='sidebar-link'>
          <div className='sidebar-list'>
            <span className='sidebar-icon'>
              <img src={communityicon} alt='communityicon' />
            </span>
            Community
          </div>
        </Link>
        
        <Link to='/' className='sidebar-link'>
          <div className='sidebar-list'>
            <span className='sidebar-icon'>
              <img src={toolsicon} alt='toolsicon' />
            </span>
            Tools
          </div>
        </Link>
        
        <Link to='/' className='sidebar-link'>
          <div className='sidebar-list sidebar-last'>
            <span className='sidebar-icon'>
              <img src={logouticon} alt='logouticon'/>
            </span>
            Logout
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Sidebar