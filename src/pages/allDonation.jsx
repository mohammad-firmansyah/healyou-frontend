import 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useState } from "react";
import { APP_BASE_URL } from "../utils/const";

export default function allDonation(){

  
    const getDonations = () => {
      fetch(APP_BASE_URL + "api/payment/data/all", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => {
          setDonations(data.data_payment);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    };
  
    useEffect(() => {
      getDonations();
    }, []);
  
    {console.log(donations);}

    return(
        <div className='h-full bg-gradient-to-b from-white to-indigo-100 '>
        <Nav/>
            <div className='px-7 py-3'>
                <h1 className='font-medium'>home  {'>'}  Donasi</h1>
                <h1 className='font-semibold mt-5'>Healyou</h1>
                <h1 className='text-5xl font-bold mb-10'>ayo bantu wujudkan upaya kami</h1>
                <p>Setiap donasi, tidak peduli seberapa kecilnya, dapat membantu kami memberikan perawatan medis, makanan, dan tempat tinggal sementara bagi kucing-kucing yang membutuhkan. Dengan berdonasi hari ini, Anda dapat membantu kami menyelamatkan lebih banyak nyawa dan memberikan masa depan yang lebih baik bagi kucing-kucing ini.</p>
                <div className='flex items-center justify-center my-5 '>
                    <img className=' shadow-xl rounded-xl' srcSet='/assets/1.jpg'/>
                </div>
                <p className='text-center'>pilih donasi kamu:</p>
                <div className='grid grid-cols-2 flex-auto p-10 gap-10 justify-center'>
                    <div className='basis-1/2 w-auto bg-white  rounded-xl'>
                        <img srcSet='/assets/1.jpg' className='w-full h-56 object-cover  rounded-t-xl'/>
                        <div className='p-4'>
                            <p>donasi</p>
                            <p className='font-bold text-lg'>anak kucing terlantar</p>
                            <p className='my-4'>bantu berikan susu kepada kucing yang terlantar</p>
                            <div className=' flex justify-center'>
                                <button className='text-white bg-blue-900 w-full p-2 rounded-3xl'>bantu sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 w-auto bg-white  rounded-xl'>
                        <img srcSet='/assets/1.jpg' className='w-full h-56 object-cover  rounded-t-xl'/>
                        <div className='p-4'>
                            <p>donasi</p>
                            <p className='font-bold text-lg'>anak kucing terlantar</p>
                            <p className='my-4'>bantu berikan susu kepada kucing yang terlantar</p>
                            <div className=' flex justify-center'>
                                <button className='text-white bg-blue-900 w-full p-2 rounded-3xl'>bantu sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 w-auto bg-white  rounded-xl'>
                        <img srcSet='/assets/1.jpg' className='w-full h-56 object-cover  rounded-t-xl'/>
                        <div className='p-4'>
                            <p>donasi</p>
                            <p className='font-bold text-lg'>anak kucing terlantar</p>
                            <p className='my-4'>bantu berikan susu kepada kucing yang terlantar</p>
                            <div className=' flex justify-center'>
                                <button className='text-white bg-blue-900 w-full p-2 rounded-3xl'>bantu sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 w-auto bg-white  rounded-xl'>
                        <img srcSet='/assets/1.jpg' className='w-full h-56 object-cover  rounded-t-xl'/>
                        <div className='p-4'>
                            <p>donasi</p>
                            <p className='font-bold text-lg'>anak kucing terlantar</p>
                            <p className='my-4'>bantu berikan susu kepada kucing yang terlantar</p>
                            <div className=' flex justify-center'>
                                <button className='text-white bg-blue-900 w-full p-2 rounded-3xl'>bantu sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 w-auto bg-white  rounded-xl'>
                        <img srcSet='/assets/1.jpg' className='w-full h-56 object-cover  rounded-t-xl'/>
                        <div className='p-4'>
                            <p>donasi</p>
                            <p className='font-bold text-lg'>anak kucing terlantar</p>
                            <p className='my-4'>bantu berikan susu kepada kucing yang terlantar</p>
                            <div className=' flex justify-center'>
                                <button className='text-white bg-blue-900 w-full p-2 rounded-3xl'>bantu sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}