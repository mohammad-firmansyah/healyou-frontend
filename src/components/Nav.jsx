import "react";

import { useNavigate } from "react-router-dom";
export default function Nav() {

  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="bg-indigo-900 self-stretch flex w-full items-center justify-between gap-5 pl-14 pr-20 py-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <div className="flex items-stretch justify-between gap-5 my-auto max-md:justify-center">
        <div className="text-white text-base font-bold leading-4 tracking-wide">
          <a href="#" onClick={()=> navigate('/')}> Home</a>
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-wide">
          <a href="#" onClick={()=> navigate('/donation')}> Donasi</a>
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-wide whitespace-nowrap">
          <a href="#"> Akun</a>
        </div>
      </div>
      <button onClick={navigateToLogin} className="border-0 text-indigo-900 text-base font-medium leading-4 tracking-wide whitespace-nowrap justify-center shadow-sm bg-white self-stretch px-5 py-2.5 rounded-3xl border-2 border-solid border-blue-200 max-md:pl-2.5 hover:bg-indigo-100">
        Masuk
      </button>
    </div>
  );
}


