import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Donation from "../components/Donation";
import { useEffect, useState } from "react";
import { APP_BASE_URL } from "../utils/const";
import '../assets/css/donation.css'

export default function MyDonation() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDonations = () => {
    fetch(APP_BASE_URL + "api/payment/data/all", {
      method: "post",
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N5dWt1cmltYW4uY29tL3B1YmxpYy9hcGkvbG9naW4iLCJpYXQiOjE3MDIxMDM0NjYsImV4cCI6MTcwMjEzMjI2NiwibmJmIjoxNzAyMTAzNDY2LCJqdGkiOiJpYVhhQ1lIUVc5N1UwbG80Iiwic3ViIjoiMTEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ul6lWpWW5LSmNTQSAyq-91V3nL9jKMXmQZvsxZErPz0",
        "Content-Type": "application/json",
      },
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
  return (
    <>
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <Nav />

        <div className="flex w-full p-8 h-[556px]">
          <div className="flex-column">
            <div className="">
              <p className="font-semibold">
                Akun <span className="mx-3"> {">"} </span> Donasi Saya
              </p>
            </div>

            <div className="mt-6">
              <div className="inline-block bg-white w-[190px] h-[94px] rounded-lg shadow-sm">
                <ul className="p-2 ">
                  <li className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <a>Edit Profil</a>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <a>Donasi Saya</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-column ml-6">
            <h1 className="font-bold text-xl">Donasi Saya</h1>

            {donations.length < 1 ? (
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

              
                {donations.color?.map((element, index) => (
                  <Donation
                    key={index}
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
