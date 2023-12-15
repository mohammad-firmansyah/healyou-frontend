import { APP_BASE_URL_IMG } from "../utils/const";

export default function Donation({hero,title,handleClick}) {

    return (
        <>
            <div onClick={handleClick} className="flex h-[48px] my-4 overflow-hidden w-[472px] bg-white rounded-lg shadow">
               <div className="flex-shrink-0 w-99">
                    <img
                    className="w-[99px] h-full object-center"
                    src={APP_BASE_URL_IMG+hero}
                    alt="hero-img"
                    />
                    </div>
                <div>
                    <p className="p-2 font-semibold">
                        {title}
                    </p>
                </div>
            </div>
        </>
    )
}