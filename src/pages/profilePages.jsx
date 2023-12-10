import Nav from '../components/Nav'

export default function ProfilePages(){
    return(
        <div >
            <Nav/>
            <div className=' px-36 flex justify-center bg-gradient-to-b from-sky-400 to-neutral-50 h-screen pt-9 '>
                <div className='w-1/5 flex items-center  flex-col gap-3 px-4 font-bold '>
                    <div>
                        <h1>akun {'>'} edit profile</h1>
                    </div>
                    <div className='rounded-md flex flex-col gap-5 border-black border-2 px-3 py-3 text-sm font-semibold bg-white w-full' >
                        <h2 className='h-8 flex items-center bg-slate-300 rounded-md px-3 text-lg' >akun saya</h2>
                        <a className='h-8 flex items-center  rounded-md px-3 text-lg' href='/detailTransaksi'>donasi saya</a>
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