import "react";
import "../App.css";
import "../assets/css/payment.css";
import Nav from "../components/Nav"
import Footer from "../components/Footer";

export default function Home() {
 
  return (
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
                <input type="text" name="price" id="price" class="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4" placeholder="0.00"/>

            

                <label htmlFor="" >Pilih Metode Pembayaran</label>
                <br />
                <select type="text" name="price" id="price" class="block mt-3 w-full rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00">
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
                 <textarea type="text" name="price" id="price" class="w-full block mt-3  rounded-[15px] border-2 border-solid border-black py-2 pl-7  pr-20 text-black-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-4"> </textarea>
            </div>

            <button className="mt-[50px] w-full bg-[#27187E] p-2 text-white rounded-full">Rp</button>
        </div>
        </div>

       <Footer/>
    </>
    
  );
}


