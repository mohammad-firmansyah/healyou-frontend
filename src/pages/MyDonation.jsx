import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function MyDonation() {
    return (
        <>

            <div className='bg-gradient-to-b from-indigo-5  0 to-white'>
            <Nav/>
            
            <div className="flex w-full  p-8 h-[556px]">

            
                <div className="flex-column">

                    <div className=''>
                        <p className="font-semibold">Akun <span className="mx-3"> > </span>   Donasi Saya</p>
                    </div>

                    <div className="mt-6">
                        <div className="inline-block bg-white w-[190px] h-[94px] rounded-md border-2 border-black">
                            
                            <ul className="p-2 ">
                                <li className="hover:bg-gray-100 p-2">
                                    <a>
                                        Edit Profil
                                        </a>
                                        
                                </li>
                                <li className="hover:bg-gray-100 p-2">
                                    <a>
                                        Donasi Saya
                                        </a>
                                        
                                </li>
                            </ul>
                        </div>
                    </div>

                    </div>

                    <div className="flex-column ml-6">
                        <h1 className="font-bold text-xl">Donasi Saya</h1>

                        <p className="font-regular text-medium mt-[21px]">
                            Anda belum pernah berdonasi. Apakah kamu tertarik untuk memulainya? 
                        </p>

                        <button className="py-2 px-7 mt-[21px] bg-indigo-900 text-white font-semi rounded-full text-sm">Donasi Sekarang</button>
                    </div>
                </div>

                
            <Footer/>
            </div>
        
        </>
    )
}