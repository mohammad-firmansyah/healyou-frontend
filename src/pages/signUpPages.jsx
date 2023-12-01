

function SignUpPages(){
    return(
        
        <div className='flex items-center justify-center w-full '>
        <div className='grid gap-1 w-750px  bg-gradient-to-b from-sky-400 to-neutral-50 h-full py-44 px-16 border-x-blue-500 border-x-2'>
          <h1 className='text-5xl my-3 font-bold'>Buat Akun HEAL YOU</h1>
          <div className="flex w-full gap-2">
            <div className="w-full" >
                <label className="form-label">Nama depan</label><br></br>
                <input type="text" className="w-full h-10 border-2 rounded-lg border-black" placeholder='    masukkan nama depan' ></input>
            </div>
            <div className="w-full">
                <label className="form-label">Nama belakang</label><br></br>
                <input type="text" className="w-full h-10 border-2 rounded-lg border-black" placeholder='    masukkan nama belakang' ></input>
            </div>
          </div>
          <div>
            <label className="form-label">Email address</label><br></br>
            <input type="email" className="w-full h-10 border-2 rounded-lg border-black" placeholder='    myemail@email.com' ></input>
          </div>
        
        <div>
          <label className="form-label">Password</label><br></br>
          <input type="password" className="w-full h-10 border-2 rounded-lg border-black" placeholder='   your secret password' ></input>
          <h6>It must be a combination of minimum 8 letters, numbers, and symbols.</h6>
        </div>

        <div className=' flex justify-between items-center '>
            <div className='leftSide'>
                <input type="checkbox" className="checkbox" placeholder='remember em'></input>
                <label> remember me</label>
            </div>
            <div>
              <a className='text-right items-end' href='./'>forgot password?</a>
            </div>
        </div>
        <br></br>
        <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
        </div>
        <br></br>
        
        <p>already have an account? <a href='./login'>Login</a></p>
    </div>
  </div>
    )
}

export default SignUpPages;