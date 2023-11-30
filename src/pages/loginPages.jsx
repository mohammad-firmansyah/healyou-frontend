

import './loginPages.css';

function loginPages(){
    return(
        <>
          <div className='container'>
            <div className='grid gap-1 w-750px bg-white h-full py-44 px-16'>
              <h1 className='text-5xl my-3 font-bold'>log in to HEAL YOU</h1>
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
                  <a href='./'>forgot password?</a>
                </div>
            </div>
            <br></br>
            <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            <br></br>
            <div>
              <button type="submit" className='flex w-full justify-center rounded-md gap-1 border-indigo-600 border-2 px-3 py-1.5 text-sm font-semibold'>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.25" viewBox="0 0 488 512"><path fill="#000000" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg> sign in with google
              </button>
            </div>
            <p>no account yet? <a href='./signUp'>sign up</a></p>
        </div>
      </div>
        </>
    )
}

export default loginPages;