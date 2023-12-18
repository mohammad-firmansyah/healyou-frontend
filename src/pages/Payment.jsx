import "react";
import "../App.css";
import "../assets/css/payment.css";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import useSnap from '../hooks/useSnap'
import { useEffect, useState,useRef } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { APP_BASE_URL } from "../utils/const";

export default function Payment() {
  const {snapEmbed} = useSnap()
  const params = useParams()
  const token = localStorage.getItem('token')
  const [snapToken,setSnapToken] = useState("")
  const [dataInput,setDataInput] = useState({
    id_donasi:parseInt(params.id),
    price:"",
    nama_donatur:"",
    dukungan:""
  })
  const [snapShow,setSnapShow] = useState(false)
  const navigate = useNavigate();
  const buttonSubmit = useRef();
  const nameRef = useRef();
  const chkRef = useRef();
  
  const handleChange = (e) => {
    setDataInput(prev => ({
        ...prev,
        [e.target.name]: e.target.value

    }))
  }

  const createPayment = () => {
    
    fetch(APP_BASE_URL + 'api/payment/create',{
        method:'post',
        headers:{
            'Authorization':'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(dataInput)
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            setSnapToken(data.token_snap_midtrans)
            setSnapShow(true)
            snapEmbed(data.token_snap_midtrans,'snap-container',{
                onSuccess: function (res) {
                    console.log("success",res);
                    navigate('/success-donation')
                    setSnapShow(false)
                },
                onPending: function (res) {
                    console.log("pending",res);
                    setSnapShow(false)
                },
                onClose: function (res) {
                    console.log("close",res);
                    navigate('/failed-donation')
                    setSnapShow(false)
                }
            })
        } else {
            alert("error")
        }
    })   
  }

  const submit = () => {
    createPayment()
  }
  
  const hideName = () => {
    if(chkRef.current.checked != false) {
        nameRef.current.value = "orang baik"
        nameRef.current.readOnly = true
        setDataInput(prev => ({
            ...prev,
            nama_donatur:'orang baik'
        }))
    } else {
        nameRef.current.value = ""
        nameRef.current.readOnly = false

    }

  }


  return (
    <>
     {!snapShow && (
                <>
                
                <Nav/>
        <div className="bg-gradient-to-b from-[#B9D6F2] to-white ">
           
        <div className=" px-[34px] pt-[34px]" >
            
        </div>

        <div className=" m-[34px] ">

           
            
            <div className="flex-column ">
                <label htmlFor="">Isi Nominal Donasi</label>
                <br />
                <input type="text" onChange={handleChange} name="price" id="price"  className="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" placeholder="" />

            


                <p className="font-regular text-center mt-[24px] mb-2">Lengkapi Data Diri Dibawah Ini</p>
                <hr className="border-black border-1 w-full mb-8" />

                <label htmlFor="name">Nama</label>
                <br />
                <input type="text" onChange={handleChange} name="nama_donatur" ref={nameRef} id="name" className="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" placeholder="Nama Anda"/>
                
                
                {/* <label htmlFor="">Email</label>
                <br />
                <input type="text" onChange={handleChange} name="email" id="price" className="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" placeholder="0.00"/> */}

                <div className="flex flex-row mb-4 mt-5">

                    <p className="font-regular text-left">Sembunyikan nama saya</p>
                    <div className="ml-[46px]" onClick={hideName}>
                        <label className="switch">
                        <input type="checkbox" ref={chkRef}/>
                        <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                

                <hr className="border-black border-1 w-full mb-8" />
                 
                <label htmlFor="">Sertakan Dukungan</label>
                <br />
                 <textarea type="text" onChange={handleChange} name="dukungan" id="price" className="w-full block mt-3  rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4"/>
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


