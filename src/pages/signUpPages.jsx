
import { APP_BASE_URL } from "../utils/const";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useAuthenticated } from "../hooks/useAuth";

function SignUpPages(){
  const navigate = useNavigate()
  useAuthenticated("signup")

  const navigateToHome = () => {
    navigate('/')
  }
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [namaDepan, setNamaDepan] = useState("");
const [namaBelakang, setNamaBelakang] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit =  () => {
      const data = {
        name: namaDepan +" "+ namaBelakang,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
        }
      fetch(APP_BASE_URL + "api/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => {

        if(data.success){
          localStorage.setItem("token",data.token)
          navigateToHome()
           navigate('/login')
        }else {

          alert(data.message)
        }

      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    }
  


    return(
        
        <div className='flex items-center justify-center w-full '>
        <div className='grid gap-1 w-750px  bg-gradient-to-b from-[#B9D6F2] to-white h-full py-44 px-16 '>
          <h1 className='text-5xl my-3 font-bold'>Buat Akun HEAL YOU</h1>
          <div className="flex w-full gap-2">
            <div className="w-full" >
                <label className="form-label">Nama depan</label><br></br>
                <input type="text" className="pl-2 w-full h-10 border-2 rounded-lg border-black" placeholder='    masukkan nama depan' onChange={(e) => setNamaDepan(e.target.value)}></input>
            </div>
            <div className="w-full">
                <label className="form-label">Nama belakang</label><br></br>
                <input type="text" className="pl-2 w-full h-10 border-2 rounded-lg border-black" placeholder='    masukkan nama belakang'  onChange={(e) => setNamaBelakang(e.target.value)}></input>
            </div>
          </div>
          <div>
            <label className="form-label">Email address</label><br></br>
            <input type="email" className="pl-2 w-full h-10 border-2 rounded-lg border-black" placeholder='    myemail@email.com'   onChange={(e) => setEmail(e.target.value)} ></input>
          </div>
        
        <div>
          <label className="form-label">Password</label><br></br>
          <input type="password" className="pl-2 w-full h-10 border-2 rounded-lg border-black" placeholder='   your secret password'  onChange={(e) => setPassword(e.target.value)} ></input>
        </div>

        <div>
          <label className="form-label">Password confirmation</label><br></br>
          <input type="password" className="pl-2 w-full h-10 border-2 rounded-lg border-black" placeholder='   your secret password'  onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
          <h6>It must be a combination of minimum 8 letters, numbers, and symbols.</h6>
        </div>

        <br></br>
        <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}  >Sign Up</button>
        </div>
        <br></br>
        
        <p>already have an account? <a onClick={() => {navigate('/login')}}>Login</a></p>
    </div>
  </div>
    )
}

export default SignUpPages;