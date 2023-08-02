import React from 'react'
import rightarrowicon from '../../assets/icons/right-arrow-icon.svg'
import './MainContent.css'

const MainContent = () => {
  return (
    <div className='main-content'>

      <div className='main-content-header'>
        <div className='main-content-head'>Personal Information</div>
        <div className='main-content-head'>Next of Kin</div>
        <div className='main-content-head'>Identity Information</div>
        <div className='main-content-head'>Verification</div>
      </div>

      <div className='main-content-hr'></div>


      <div className='main-content-body'>

        <div className='main-content-b1'>
          Basic Details
        </div>

        <form className='form'>

          <div className='main-content-formhead'>

            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>First name</div>
              <input 
                className='main-content-forminput'
                type='text'
                placeholder='Ex. Bobby'
              />
            </div>

            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>Last name</div>
              <input 
                className='main-content-forminput'
                type='text'
                placeholder='Ex. Dehaze'
              />
            </div>
            
          </div>

          <div className='main-content-formhead'>

            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>Username</div>
              <input
                className='main-content-forminput'
                type='text'
                placeholder='Ex.bobby@gmail.com'
              />
            </div>  

            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>Phone number</div>
              <input 
                className='main-content-forminput'
                type='number'
                placeholder='080 0000 0000'
              />
            </div>  

          </div>

          <div className='main-content-formhead'>
            
            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>Email address</div>
              <input 
                className='main-content-forminput'
                type='email'
                placeholder='Ex.bobby@gmail.com'
              />
            </div>  

            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>Gender</div>
              <input 
                className='main-content-forminput'
                type='email'
                placeholder='Ex.bobby@gmail.com'
              />
            </div>  

          </div>

          <div className='main-content-formhead'>
            
            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>Occupation</div>
              <input 
                className='main-content-forminput'
                type='text'
                placeholder='Type here'
              />
            </div>  

            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>Date of Birth</div>
              <input 
                className='main-content-forminput'
                type='calendar'
                placeholder='Type here'
              />
            </div>  

          </div>

          <div className='main-content-formhead'>
            
            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>BVN Number</div>
              <input 
                className='main-content-forminput'
                type='number'
                placeholder='Ex. 67589065432'
              />
            </div>  

            <div className='main-content-formgroup'>
              <div className='main-content-formtext'>&nbsp;</div>
                {/* <button className='main-content-forminput'>Continue</button> */}
                <button className='main-content-button'>
                  <span>Continue </span>
                  <span className='main-content-btnicon'><img src={rightarrowicon} alt='right-arrow-icon'></img></span>
                </button>
            </div>  

          </div>


        </form>

      </div>
      
    </div>
  )
}

export default MainContent