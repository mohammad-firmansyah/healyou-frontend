import  "../assets/css/HistoryDonation.css";

export default function HistoryDonation({name,totalDonation,time}) {
    return (
        <>
            <div className="card bg-white  shadow-md  pl-10 py-2">
                <div className="w-full flex justify-start items-center">

                
                <div>
                    <img src="/assets/icon-user.png" alt="icon user" />
                </div>
                <div className="text-left ml-5">

                    <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className="text-lg font-bold">Berdonasi sebesar Rp.{totalDonation}</h3>
                    <span className="text-sm font-light">1 jam yang lalu</span>
                </div>
                </div>
            </div>
        </>
    )
}