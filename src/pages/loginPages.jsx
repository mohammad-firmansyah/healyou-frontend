
import { APP_BASE_URL } from "../utils/const";
import { useNavigate } from "react-router-dom";
import {useRef, useState} from "react";

function loginPages(){
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const userEmail = useRef()
const userPass = useRef()

    const handleSubmit =  () => {
      const data = {
        email: email,
        password: password
        }
      fetch(APP_BASE_URL + "api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => {

        localStorage.setItem("token",data.token)
        navigateToHome()
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        console.log("error login")
      });
    }
  
    return(
        
      <div className='flex items-center justify-center w-full '>
      <div className='grid gap-1 w-750px  bg-gradient-to-b from-sky-400 to-neutral-50 h-full py-44 px-16 border-x-blue-500 border-x-2'>
        <h1 className='text-5xl my-3 font-bold'>Masuk HEALYOU</h1>
        <div>
          <label className="form-label">Email address</label><br></br>
          <input type="email" className="w-full h-10 border-2 rounded-lg border-black" placeholder='    myemail@email.com' required ref={userEmail} onChange={(e) => setEmail(e.target.value)} ></input>
        </div>
      <br></br>
      <div>
        <label className="form-label">Password</label><br></br>
        <input type="password" className="w-full h-10 border-2 rounded-lg border-black" placeholder='   your secret password' required ref={userPass} onChange={(e) => setPassword(e.target.value)} ></input>
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
      <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit} >Sign in</button>
      </div>
      <br></br>
      
      <p>no account yet? <a href='./signUp'>Sign up</a></p>
  </div>
</div>
    )
}

export default loginPages;