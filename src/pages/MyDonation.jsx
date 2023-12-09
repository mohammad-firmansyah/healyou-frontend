import Nav from "../components/Nav"

export default function MyDonation() {
    return (
        <>

            <div className='bg-gradient-to-b from-white to-indigo-100 '>
            <Nav/>
            

            <div className="flex-column">

                <div className='p-8  '>
                
                    <p className="font-semibold">Akun <span className="mx-3"> > </span>   Donasi Saya</p>
                </div>

                <div className="px-8 ">
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
            </div>
        
        </>
    )
}