import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Donation from "../components/Donation";
import { useEffect, useState } from "react";
import { APP_BASE_URL } from "../utils/const";
import '../assets/css/donation.css'
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
export default function MyDonation() {
  useAuth('mydonation')
  const token = localStorage.getItem('token')
  const [donations, setDonations] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate('/detail-mydonation/'+id)  
  }

  const getDonations = () => {
    fetch(APP_BASE_URL + "api/payment/data/all", {
      method: "post",
      headers: {
        "Authorization": "Bearer "+ token,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          setDonations(data.data_payment);
        } else {
          alert("error")
        }
        console.log(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getDonations();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <Nav />

        <div className="flex w-full p-8 h-[556px]">
          <div className="flex-column">
            <div className="">
            </div>

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
          <div className="flex-column ml-6">
            <h1 className="font-bold text-xl">Donasi Saya</h1>

            {donations == null ? (
              <>
                
                <p className="font-regular text-medium mt-[21px]">
                  Anda belum pernah berdonasi. Apakah kamu tertarik untuk
                  memulainya?
                </p>

                <button className="py-2 px-7 mt-[21px] bg-indigo-900 text-white font-semi rounded-full text-sm">
                  Donasi Sekarang
                </button>
              </>
            ) : (
              <>
              <div className="scroll w-full h-[400px] overflow-y-scroll overflow-x-hidden">

              
                {donations?.map((element, index) => (
                  <Donation
                    key={index}
                    handleClick={() => handleClick(element.id)}
                    hero={element.data_donasi.id_data_donasi+"/"+element.data_donasi.gambar_donasi}
                    title={element.data_donasi.judul_donasi}
                  />
                ))}
                
                </div>
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
