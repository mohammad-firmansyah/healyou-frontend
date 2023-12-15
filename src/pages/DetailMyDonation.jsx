import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { APP_BASE_URL } from "../utils/const";
import {useParams,useNavigate} from 'react-router-dom'
import {formattedAmount} from '../utils/helpers'

export default function DetailMyDonation(){
    const navigate = useNavigate();
   

    const [isLoading,setIsLoading] = useState(false)
    const [payment,setPayment] = useState(false)
    const [perk,setPerk] = useState(0)
    const [donatur,setDonatur] = useState(0)
    const [percentage,setPercentage] = useState("0")
    const [historyDonation,setHistoryDonation] = useState(null)
    const token = localStorage.getItem('token')

    const params = useParams()

    const data = {
        id_payment : params.id 
    }

    const getDetailPayment = () => {
        fetch(APP_BASE_URL + 'api/payment/data',{
            method:'post',
            headers:{
                'Authorization':'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        },
        ).then(res => res.json())
        .then(data => {
            if (data.success){
               setPayment(data.data_payment)
            }
        })
    }

    useEffect(()=>{
        getDetailPayment()
    },[])
    return(
        <div  className='bg-gradient-to-b from-indigo-50 to-white'>
            <Nav/>
            <div className='flex justify-center h-screen pt-9 '>
                <div className='w-max flex items-center  flex-col gap-3 px-4 font-bold'>
                     <div className="inline-block bg-white w-[190px] h-[94px] rounded-lg shadow-sm">
                <ul className="p-2 ">
                  <li onClick={()=>{navigate('/profile')}} className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <a>Edit Profil</a>
                  </li>
                  <li onClick={()=>{navigate('/mydonation')}} className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
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
                        {(payment == null) ?(<> 
                            <p>
                                Loading...
                            </p>
                        </>) :(
                            <>
                             <table className="table-auto text-left">
                            <tbody>
                                <tr>
                                    <th>tanggal</th>
                                    <th>{payment?.created_at}</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Donasi</th>
                                    <th>{payment?.data_donasi?.judul_donasi}</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>status donasi</th>
                                    <th>{(payment?.payment_status ==  2) ? "Berhasil" : 'Menunggu Pembayaran'}</th>
                                </tr>
                            </tbody>
                        </table>
                            </>
                        ) } 
                       
                    </div>
                    <div className='p-10'>
                        <img className="w-full h-44 object-cover  rounded-xl" srcSet="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></img>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}