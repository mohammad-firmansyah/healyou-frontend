export default function Footer(){
    return(
        <>
             <div className="justify-center items-start bg-indigo-900 self-stretch flex flex-col px-11 py-12 max-md:max-w-full max-md:px-5">
          <div className="items-center self-center flex w-[696px] max-w-full gap-5 max-md:flex-wrap">
            <div className="flex gap-1 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ef1d71-770f-43dd-b12e-e5eb05b1aa7b?"
                className="aspect-square object-contain object-center w-6 fill-zinc-200 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-300 text-2xl font-bold leading-7 whitespace-nowrap justify-center items-stretch self-stretch aspect-[1.5897435897435896] pb-3.5">
                logo
              </div>
            </div>
            <div className="items-stretch self-stretch flex justify-between gap-4 pr-16 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="items-stretch border-b-[color:var(--cool-gray-30,#C1C7CD)] bg-slate-100 flex justify-between gap-2 pl-4 pr-4 py-3 rounded-3xl border-b border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b976fd-4ede-4743-8a3a-08483899c9ac?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-500 text-base leading-6 grow whitespace-nowrap">
                  masukkan email untuk mendapatkan berita{" "}
                </div>
              </div>
              <div className="text-indigo-900 text-base font-medium leading-4 tracking-wide whitespace-nowrap justify-center bg-blue-200 pl-9 pr-5 py-4 rounded-3xl max-md:pl-2.5">
                Subscribe
              </div>
            </div>
          </div>
          <div className="bg-neutral-300 self-stretch flex shrink-0 h-px flex-col mt-12 max-md:max-w-full max-md:mt-10" />
          <div className="self-stretch mt-12 pr-20 pb-8 max-md:max-w-full max-md:mt-10 max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col mt-3 max-md:mt-10">
                  <div className="text-white text-lg font-bold leading-5 whitespace-nowrap">
                    About
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-7">
                    Alamat
                  </div>
                  <div className="text-white text-base font-medium leading-4 mt-4">
                    Rungkut Asri Timur Nomor 51. Surabaya. Jawa Timur{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[74%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex justify-between gap-5 max-md:mt-10">
                  <div className="items-stretch flex grow basis-[0%] flex-col mt-16 max-md:mt-10">
                    <div className="text-white text-base font-medium leading-4 whitespace-nowrap">
                      085889977373
                    </div>
                    <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                      healyou@gmail.com
                    </div>
                    <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                      Media Partner
                    </div>
                    <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                      Kebijakan
                    </div>
                  </div>
                  <div className="items-center flex grow basis-[0%] flex-col self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca811118-0723-480f-b0ad-30868ecb9472?"
                      className="aspect-[3.6] object-contain object-center w-36 overflow-hidden"
                    />
                    <div className="text-white text-lg font-bold leading-5 self-stretch whitespace-nowrap mt-9">
                      Join Us
                    </div>
                    <div className="items-stretch self-stretch flex gap-4 mt-5 max-md:justify-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51893b71-a78d-40a6-a175-06e88215d987?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/07a087f9-0065-46d0-b456-256781eb4eb8?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f78b154-a7f1-4a32-8e59-a940c6491536?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31954f16-2959-4278-99c4-b818ac85c6b6?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-300 self-stretch flex shrink-0 h-px flex-col mt-12 max-md:max-w-full max-md:mt-10" />
          <div className="text-white text-sm leading-5 self-stretch whitespace-nowrap mt-12 max-md:max-w-full max-md:mt-10">
            HEALYOU @ 2023. All rights reserved.
          </div>
        </div>
        </>
    )
}