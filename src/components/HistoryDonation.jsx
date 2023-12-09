import  "../assets/css/HistoryDonation.css";

export default function HistoryDonation({name,totalDonation,time}) {
    return (
        <>
            <div className="card flex justify-start items-center bg-white  shadow-md pl-10 ">
                <div>
                    <img src="/assets/icon-user.png" alt="icon user" />
                </div>
                <div className="text-left ml-5">

                    <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className="text-lg font-bold">Berdonasi sebesar Rp.{totalDonation}</h3>
                    <span className="text-sm font-light">1 jam yang lalu</span>
                </div>
            </div>
        </>
    )
}