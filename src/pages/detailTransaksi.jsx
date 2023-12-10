import Nav from '../components/Nav'

export default function detailTransaksi(){
    return(
        <div >
            <Nav/>
            <div className=' px-36 flex justify-center bg-gradient-to-b from-sky-400 to-neutral-50 h-screen pt-9 '>
                <div className='w-1/5 flex items-center  flex-col gap-3 px-4 font-bold '>
                    <div>
                        <h1>akun {'>'} donasi saya</h1>
                    </div>
                    <div className='rounded-md flex flex-col gap-5 border-black border-2 px-3 py-3 text-sm font-semibold bg-white w-full' >
                        <a className='h-8 flex items-center rounded-md px-3 text-lg' href='/profile' >akun saya</a>
                        <h2 className='h-8 flex items-center bg-slate-300  rounded-md px-3 text-lg' >donasi saya</h2>
                    </div>
                </div>
                <div className='w-3/5 '>
                    <div className='flex items-center flex-col mb-4 ' >
                        <h1>Terima kasih!</h1>
                        <p>donasi mu telah kami terima dan akan segera salurkan</p>
                    </div>
                    <div className='flex flex-col  h-max rounded-md gap-8 border-black border-2 px-3 py-8 text-sm font-semibold mx-4  ' >
                        <table className="table-auto text-left">
                            <tbody>
                                <tr>
                                    <th>tanggal</th>
                                    <th>28 oktober 2023</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>metode pembayaran</th>
                                    <th>kantong donasi</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Id Donasi</th>
                                    <th>08122023120023001</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>status donasi</th>
                                    <th>berhasil</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='p-10 h-9'>
                        <img srcSet="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-contain object-center overflow-hidden max-md:max-w-full self-stretch'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}