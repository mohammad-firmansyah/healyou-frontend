import 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HistoryDonation from '../components/HistoryDonation'
import { useEffect, useState } from 'react'
import { APP_BASE_URL } from "../utils/const";
import {useParams,useNavigate} from 'react-router-dom'
import {formattedAmount} from '../utils/helpers'

export default function DetailDonasi() {

    const params = useParams();
    const navigate = useNavigate();
   

    const [donation,setDonation] = useState(null)
    const [perk,setPerk] = useState(0)
    const [donatur,setDonatur] = useState(0)
    const [percentage,setPercentage] = useState("0")
    const [historyDonation,setHistoryDonation] = useState(null)

    const data = {
        "id_donasi" : params.id
    }

    const getAllHistoryDonation = () => {
        fetch(APP_BASE_URL+"api/payment/data/donasi",{
            method:"get",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N5dWt1cmltYW4uY29tL3B1YmxpYy9hcGkvbG9naW4iLCJpYXQiOjE3MDIxMDM0NjYsImV4cCI6MTcwMjEzMjI2NiwibmJmIjoxNzAyMTAzNDY2LCJqdGkiOiJpYVhhQ1lIUVc5N1UwbG80Iiwic3ViIjoiMTEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ul6lWpWW5LSmNTQSAyq-91V3nL9jKMXmQZvsxZErPz0"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setHistoryDonation(data.data_payment)
            console.log(data);
        })
        .catch(err => {
        })
    }
    const getDetailDonation = () => {
        fetch(APP_BASE_URL+"api/pilihan/detail_data_donasi?id_data_donasi="+params.id)
        .then(res => res.json())
        .then(data => {
            setDonation(data.dataDonasi)
            console.log(data);
            let i = 0
            while (i < data.dataDonasi.length) {
                i++
            }
        })
        .catch(err => {
            alert("data donasi tidak ada")
            navigate('/')
        })
    }

    const getPayments = () => {
        fetch(APP_BASE_URL+"api/payment/data/donasi",{
            method:'post',
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            
            let i = 0
            while (i < data.data_payment.length) {
                if(data.data_payment[i].payment_status == 2 ){
                    let intValue = parseInt(data.data_payment[i].price, 10);
                    setPerk(prev => prev + intValue)
                }
                i++
            }
            let percentage = (perk/donation.target)*100
            console.log(percentage);
            if(percentage < 1){
                setPercentage("0")
            } else if (percentage > 1 && percentage <= 25) {
                setPercentage("1/4")
            } else if (percentage > 25 && percentage <= 50) {
                setPercentage("1/2")
            } else if (percentage > 50 && percentage <= 75) {
                setPercentage("1/3")
            } else {
                setPercentage("full")
            }
        })
        .catch(err => {
        })
    }

    useEffect(() => {
        getAllHistoryDonation()
        getDetailDonation()
        getPayments()
    },[])

    return (
        <div className='bg-gradient-to-b from-white to-indigo-100 '>
            <Nav/>

            <img src="/assets/1.jpg" className='w-full' alt="" />

            <div className='m-8 '>

                <h1 className='text-xl font-medium'>
                    {donation?.judul_donasi}
                </h1>

                <p className='mt-2 text-xl font-medium mb-2'>
                    {formattedAmount(donation?.target)}
                </p>

                <span className='text-indigo-700 font-bold text-sm'>
                    Terkumpul dari target{formattedAmount(perk)}
                </span>

                <div className='border-2  w-full h-3 rounded-full bg-blue-50 mt-3 overflow-hidden '>
                    <div className={'w-'+ percentage +' h-3 bg-blue-600'}/>
                </div>

                <button className='w-full font-regular bg-blue-600 text-white py-2 rounded-full mt-6 text-sm'>Donasi Sekarang</button>

                <div className='flex justify-around my-4'>
                    <div className='flex mx-4 '>
                        <img src="/assets/Heart.png" className='mx-2' alt="heart" />
                        1000 Donatur
                    </div>
                    <div className='border-black flex ml-5 border-l-2'>
                        <img src="/assets/Paper.png" className='mx-2' alt="heart" />
                        Kabar Terbaru
                    </div>
                    <div className='border-black ml-5 flex border-l-2'>
                        <img src="/assets/Time-Circle.png" className='mx-2' alt="heart" />
                        40 Hari Lagi
                    </div>
                </div>
            </div>

            <hr />

            <div className='m-8'>

               <h2 className='font-bold text-xl text-center mb-4'> Donasi Anak Kucing yang Terlantar</h2> 
                <p>
               Bayangkan sejenak, berjalan di jalanan dan melihat sepasang mata yang memandang Anda dengan penuh harapan. Itu adalah kucing jalanan yang terlantar, mencari makanan dan tempat yang hangat.

                Kami dari Healyou Foundation berdedikasi untuk memberikan kucing-kucing ini kesempatan kedua untuk hidup yang lebih baik. Dengan bantuan Anda, kita bisa memberikan mereka makanan, perawatan medis, dan rumah yang penuh kasih.
                Tapi kami tidak bisa melakukannya sendiri. Kami membutuhkan bantuan Anda.
                Dengan donasi sebesar yang anda mampu, Anda bisa memberi makan kucing jalanan selama seminggu. Dengan Rp200.000, Anda bisa membantu biaya vaksinasi dan sterilisasi. Setiap rupiah yang Anda sumbangkan akan langsung digunakan untuk membantu kucing-kucing ini.

                Jadi, apa yang Anda tunggu? Mari bergabung dengan kami dalam misi ini. Karena setiap kucing pantas mendapatkan hidup yang layak dan penuh kasih.
                Klik tombol ‘Donasi Sekarang’ dan mulailah membuat perbedaan. Ingat, tidak ada sumbangan yang terlalu kecil atau terlalu besar. Setiap bantuan Anda sangat berarti bagi mereka.
                </p>
 
            </div>
        <hr />

         <h2 className='font-bold text-xl text-center mb-4 m-8'> 
            Riwayat Donasi

            <div className='container-history-donation flex flex-column justify-center'>
                {
                    (historyDonation == null) ?(<></>) : (
                    historyDonation.map((e,i) => {
                        <HistoryDonation key={i} name="Firman" totalDonation={"20000"} time={""}/>
                    })
                    )
                }
            </div>
         </h2>

         <hr />
        
        <h2 className='font-bold text-xl text-center mb-4 m-8'> 
            Kabar Terbaru

            
           
         </h2>

          <div className='m-8'></div>
            <p className='text-center mb-8'>
                Belum ada kabar baru dari penyelenggara
            </p>

<Footer/>
        </div>

    )
}