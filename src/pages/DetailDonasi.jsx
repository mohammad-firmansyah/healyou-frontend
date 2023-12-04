import 'react'
import Nav from '../components/Nav'

export default function DetailDonasi() {
    return (
        <>
        <div className="container">

        
            <Nav/>

            <img className="w-full" src="/assets/1.jpg" alt="" />

            <div className='m-8 '>

                <h1 className='text-xl font-medium'>
                    Donasi Anak Kucing yang Terlantar 
                </h1>

                <p className='mt-2 text-xl font-medium mb-2'>
                    Rp. 7.500.000
                </p>

                <span className='text-indigo-700 font-bold text-sm'>
                    Terkumpul dari target Rp.10.000.000
                </span>

                <div className='w-full h-3 rounded-full bg-blue-50 mt-3 overflow-hidden '>
                    <div className='w-[75%] h-3 bg-blue-600'/>
                </div>

                <button className='w-full font-regular bg-blue-600 text-white py-2 rounded-full mt-6 text-sm'>Donasi Sekarang</button>
            </div>
</div>
        </>
    )
}