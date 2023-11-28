import React from 'react';

import './loginPages.css';

function loginPages(){
    return(
        <>
            <div className='container'>
      <div className='login-box'>
        
        <h2>log in to HEAL YOU</h2>
        <div>
        <label className="form-label">Email address</label><br></br>
        <input type="email" className="form-control" placeholder='    myemail@email.com' ></input>
        </div>
        
        <br></br>
        <div>
        <label className="form-label">Password</label><br></br>
        <input type="password" className="form-control" placeholder='   your secret password' ></input>
        <h6>It must be a combination of minimum 8 letters, numbers, and symbols.</h6>
        </div>

        <div className='confirmation'>
          <div className='leftSide'>
            <input type="checkbox" className="checkbox" placeholder='remember em'></input>
            <label> remember me</label>
          </div>
          <div className='rightSide'>
            <a>forgot password?</a>
          </div>
          <div>

          </div>
        </div>
        
        </div>
      </div>
        </>
    )
}

export default loginPages;