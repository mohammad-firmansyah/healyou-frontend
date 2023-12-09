import "react";
import Nav from '../components/Nav'
export default function SuccessPayment(){
    return(
        <>
            <Nav/>

            <div className="bg-gradient-to-b from-indigo-50 to-white pt-[46px] text-center" >
                <img src="/assets/done.png" alt="done" className="mx-auto "/>

                <h1 className="font-bold text-3xl mt-[36px]">Terimakasih</h1>
                <h1 className="font-bold text-3xl">Telah Berdonasi</h1>

                <p className="w-1/2 mx-auto font-light text-md mt-[48px] ">
                    Terima kasih yang sebesar-besarnya atas kebaikan hati dan dukungan finansial Anda. Donasi Anda tidak hanya memberikan bantuan materi, tetapi juga memberi harapan kepada banyak orang yang membutuhkan.
                </p>

                <button className="py-2 px-7 mt-[21px] bg-indigo-900 text-white font-semi rounded-full text-sm">
                  Donasi Sekarang
                </button>
            </div>
        </>
    )
}