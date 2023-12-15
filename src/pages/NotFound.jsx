import "react";
import Nav from '../components/Nav'
export default function NotFound(){
    return(
        <>
            <Nav/>

            <div className="bg-gradient-to-b from-indigo-50 to-white pt-[46px] text-center" >

                <h1 className="font-bold text-3xl my-[36px]">Oops </h1>
                <h1 className="font-bold text-3xl">Halaman Tidak Ditemukan</h1>

                <p className="w-1/2 mx-auto font-light text-md mt-[48px] ">
                    it's not your fault it's my fault
                </p>

            </div>
        </>
    )
}