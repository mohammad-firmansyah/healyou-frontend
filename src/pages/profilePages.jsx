import Nav from '../components/Nav'
import { useAuth } from '../hooks/useAuth'

export default function ProfilePages(){
    useAuth('profile')
    return(
        <div >
            <Nav/>
            <div className='flex justify-center bg-gradient-to-b from-indigo-50 to-white h-screen p-8 '>
               <div className="shadow-sm ">
              <div className="inline-block bg-white w-[190px] h-[94px] rounded-lg shadow-sm">
                <ul className="p-2 ">
                  <li className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <a>Edit Profil</a>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <a>Donasi Saya</a>
                  </li>
                </ul>
              </div>
            </div>
                <div className='flex flex-col w-full h-max rounded-md gap-8  px-4 shadow-sm py-8 text-sm font-semibold mx-4 bg-white rounded-md '>
                    <div>
                        <h1 className='font-bold text-3xl'>DATA DIRI</h1>
                    </div>
                    <div className='flex w-full gap-4'>
                        <div className='w-full'>
                            <label>First name:</label>
                            <input className="w-full h-10 border-2 rounded-lg border-black bg-slate-200  " placeholder='    AIDA@gmail.com' type="text" id="lname" name="lname" disabled ></input>
                        </div>
                        <div className='w-full'>
                            <label>Last name:</label>
                            <input className="w-full h-10 border-2 rounded-lg border-black bg-slate-200 " placeholder='    SEBRINA' type="text" id="lname" name="lname" disabled ></input>
                        </div>
                    </div>
                    <div>
                        <label>Email terdaftar</label>
                        <input className="w-full h-10 border-2 rounded-lg border-black bg-slate-200 " placeholder='    SEBRINA' type="text" id="lname" name="lname" disabled ></input>
                    </div>
                    <div>
                    <label>Email terdaftar</label>
                        <input className="w-full h-10 border-2 rounded-lg border-black bg-slate-200 " placeholder='    masukkan nomor telepon anda' type="text" id="lname" name="lname" ></input>
                    </div>
                    <div className='flex flex-row-reverse ' >
                        <button type="button" className=' border-2 border-black py-2 px-4 rounded-lg bg-blue-800 text-white'  >perbarui</button>
                    </div>
                </div>
            </div>
        </div>
    )
}