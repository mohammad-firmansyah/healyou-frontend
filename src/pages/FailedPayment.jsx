import "react";
import Nav from '../components/Nav'
export default function FailedPayment(){
    return(
        <>
            <Nav/>

            <div className="bg-gradient-to-b from-indigo-50 to-white pt-[46px] text-center" >

                <h1 className="font-bold text-3xl mt-[36px] text-red-500">Transaksi Gagal</h1>

                <p className="w-1/2 mx-auto font-light text-md mt-[30px] ">
                   Kami ingin menyampaikan permintaan maaf yang tulus atas ketidaknyamanan yang mungkin Anda alami akibat gangguan pada server kami. Kami sedang berusaha secepat mungkin untuk memperbaiki situasi ini.
                </p>

                <button className="py-2 px-7 mt-[21px] bg-indigo-900 text-white font-semi rounded-full text-sm">
                  Donasi Lagi
                </button>
            </div>
        </>
    )
}