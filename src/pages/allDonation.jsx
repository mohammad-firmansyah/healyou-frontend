import 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_BASE_URL, APP_BASE_URL_IMG } from "../utils/const";

export default function allDonation(){
    const [donations, setDonations] = useState(null);
    const navigate = useNavigate();
  
    const getDonations = () => {
      fetch(APP_BASE_URL + "api/pilihan/data_donasi", {
        method: "get",
        headers: {
            
          "Content-Type": "application/json",
        },
        
      })
        .then((res) => res.json())
        .then((data) => {
        console.log(data.dataDonasi)
          setDonations(data.dataDonasi);
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
                
                    {(donations != null ) ? donations.map((element, index) => (
                    <>
                        <div key={index} className='basis-1/2 w-auto bg-white  rounded-xl'>
                        <img srcSet={APP_BASE_URL_IMG+element.id_data_donasi+"/"+element.gambar_donasi} className='w-full h-56 object-cover  rounded-t-xl'/>
                        <div className='p-4'>
                            <p>donasi</p>
                            <p className='font-bold text-lg'>{element.judul_donasi}</p>
                            <p className='my-4'>{element.deskripsi_donasi}</p>
                            <div className=' flex justify-center'>
                                <button onClick={()=>{navigate('/payment/'+element.id_data_donasi)}} className='text-white bg-blue-900 w-full p-2 rounded-3xl'>bantu sekarang</button>
                            </div>
                        </div>
                    </div>
                    </>
                )
                
                ) : (<></>)}
                </div>
            </div>
        <Footer/>
        </div>
    )
}