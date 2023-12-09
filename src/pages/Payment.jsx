import "react";
import "../App.css";
import "../assets/css/payment.css";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import useSnap from '../hooks/useSnap'
import { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { APP_BASE_URL } from "../utils/const";

export default function Home() {
  const {snapEmbed} = useSnap()
  const [snapToken,setSnapToken] = useState("")
  const [snapShow,setSnapShow] = useState(false)
  const navigate = useNavigate();
  const buttonSubmit = useRef();
  const submit = () => {
    setSnapShow(true)
    snapEmbed("2b71b865-4a9b-475e-9240-c17a6dcbd826",'snap-container',{
        onSuccess: function (res) {
            console.log("success",res);
            navigate('/order-status?transaction_id=1')
            setSnapShow(false)
        },
        onPending: function (res) {
            console.log("pending",res);
            navigate('/order-status?transaction_id=1')
            setSnapShow(false)
        },
        onClose: function (res) {
            console.log("close",res);
            navigate('/order-status?transaction_id=1')
            setSnapShow(false)
        }
    })
  }
  
  const createSnapToken = () => {
    const body = {
        'id_donasi':12,
        'price':1000
    }
    const url = APP_BASE_URL+"api/payment/create"
    fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N5dWt1cmltYW4uY29tL3B1YmxpYy9hcGkvbG9naW4iLCJpYXQiOjE3MDIwMzg2NzEsImV4cCI6MTcwMjA0MjI3MSwibmJmIjoxNzAyMDM4NjcxLCJqdGkiOiJ6OHV4RzI5WDRETVduVlBuIiwic3ViIjoiMTEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.CgZoA6aq9HI8gaL9qrY_xa4eO5z_rDlciJPdL97KIks',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
    .then(res => res.json())  // Parse the JSON response
    .then(data => {
        // Assuming the token_snap_midtrans is a property in the response JSON
        setSnapToken(data.token_snap_midtrans);
        console.log(data.token_snap_midtrans);
    })
    .catch(err => {
        // Handle error
    });


    
  }

  useEffect(() => {
    createSnapToken()
  },[])


  return (
    <>
     {!snapShow && (
                <>
                
                <Nav/>
        <div className="bg-gradient-to-b from-[#B9D6F2] to-white ">
           
        <div className=" px-[34px] pt-[34px]" >
            <a className="font-medium">
                Home   >  
            </a>
            <a className="font-medium  mx-2">
                Donasi  >  
            </a>
            <a className="font-medium">
                Pembayaran  >  
            </a>
        </div>

        <div className=" m-[34px] ">

           
            
            <div className="flex-column ">
                <label htmlFor="">Isi Nominal Donasi</label>
                <br />
                <input type="text" name="price" id="price"  className="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" placeholder="0.00"/>

            

                <label htmlFor="" >Pilih Metode Pembayaran</label>
                <br />
                <select type="text" name="price" id="price" className="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00">
                    <option value="">Transfer Bank</option>
                    <option value="">Qris</option>
                </select>

                <p className="font-regular text-center mt-[24px] mb-2">Lengkapi Data Diri Dibawah Ini</p>
                <hr className="border-black border-1 w-full mb-8" />

                <label htmlFor="">Isi Nominal Donasi</label>
                <br />
                <input type="text" name="price" id="price" className="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" placeholder="0.00"/>
                
                
                <label htmlFor="">Email</label>
                <br />
                <input type="text" name="price" id="price" className="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" placeholder="0.00"/>

                <div className="flex flex-row mb-4 mt-5">

                    <p className="font-regular text-left">Sembunyikan nama saya</p>
                    <div className="ml-[46px]">
                        <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                

                <hr className="border-black border-1 w-full mb-8" />
                 
                <label htmlFor="">Sertakan Dukungan</label>
                <br />
                 <textarea type="text" name="price" id="price" className="w-full block mt-3  rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4"/>
            </div>

             <button ref={buttonSubmit} onClick={submit} className="mt-[50px] w-full bg-[#27187E] p-2 text-white rounded-full">Rp</button>
           

           
        </div>
        </div>

       <Footer/>
            </>
            )}
        
        <div id="snap-container" className="w-full"></div>
    </>
    
  );
}


