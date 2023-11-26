import "react";

export default function MyComponent(props) {
  return (
    <div className="bg-white self-stretch flex w-full items-center justify-between gap-5 pl-10 pr-20 py-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <div className="flex items-stretch justify-between gap-5 my-auto max-md:justify-center">
        <div className="text-black text-base font-bold leading-4 tracking-wide self-start">
          Home{" "}
        </div>
        <div className="text-white text-base font-bold leading-4 tracking-wide">
          Our Project
        </div>
        <div className="text-black text-base font-bold leading-4 tracking-wide whitespace-nowrap self-start">
          Akun
        </div>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-4">
        <div className="text-white text-base font-medium leading-4 tracking-wide whitespace-nowrap justify-center items-center border-[color:var(--primary-60,#0F62FE)] bg-blue-600 grow px-5 py-2.5 border-2 border-solid">
          Donasi
        </div>
        <div className="text-blue-600 text-base font-medium leading-4 tracking-wide whitespace-nowrap justify-center items-center border-[color:var(--primary-60,#0F62FE)] grow px-5 py-2.5 border-2 border-solid">
          Masuk
        </div>
      </div>
    </div>
  );
}


