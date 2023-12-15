import Nav from '../components/Nav'

export default function ProfilePages(){
    return(
        <div className='bg-gradient-to-b from-indigo-50 to-white'>
            <Nav/>
            <div className='  flex justify-center h-screen pt-9 '>
                <div className='w-max flex items-center  flex-col gap-3 px-4 font-bold '>
                    <div>
                        <h1>akun {'>'} edit profile</h1>
                    </div>
                    <div className="mt-6">
              <div className="inline-block bg-white w-[190px] h-[94px] rounded-md border-2 border-black">
                <ul className="p-2 ">
                  <li className="hover:bg-gray-100 p-2">
                    <a>Edit Profil</a>
                  </li>
                  <li className="hover:bg-gray-100 p-2">
                    <a>Donasi Saya</a>
                  </li>
                </ul>
              </div>
            </div>
                </div>
                <div className='flex flex-col w-3/5  h-max rounded-md gap-8 border-black border-2 px-3 py-8 text-sm font-semibold mx-4 bg-white '>
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