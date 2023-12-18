import Nav from '../components/Nav'

export default function DetailMyDonation(){
    return(
        <div  className='bg-gradient-to-b from-indigo-50 to-white'>
            <Nav/>
            <div className='flex justify-center h-screen pt-9 '>
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
                    <div className='p-10'>
                        <img className="w-full h-44 object-cover  rounded-xl" srcSet="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></img>
                    </div>
                    <p className='pb-5'>membantu anak kucing yang terlantar</p>
                    <hr className='bg-black border-black border-2'></hr>
                    <div className='flex flex-row place-content-between'>
                        <p className=''>total donasi</p>
                        <p>Rp 123.000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}