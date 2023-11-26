// import Nav from "../components/Nav"
import "react";
import courousel from '../assets/corousel_dummy.png';
import imgdummy from '../assets/dummy_img.png';
import articleDummy from '../assets/dummy_article_img.png';

export default function Home() {
  return (
    <div className="bg-neutral-200 flex flex-col items-center px-5">
      <div className="bg-white flex w-[744px] max-w-full pr-0 flex-col">
        <div className="bg-white self-stretch flex w-full items-center justify-between gap-5 pl-10 pr-20 py-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="flex items-stretch justify-between gap-5 my-auto max-md:justify-center">
            <div className="text-black text-base font-bold leading-4 tracking-wide self-start">
              Home
            </div>
            <div className="text-black text-base font-bold leading-4 tracking-wide">
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
        <img
          loading="lazy"
          srcSet={courousel}
          className="aspect-[2.07] object-contain object-center w-full justify-center items-center overflow-hidden self-stretch max-md:max-w-full"
        />
        <div className="flex w-[744px] max-w-full pr-0 flex-col mt-20 pl-9 self-start max-md:mt-10 max-md:pl-5">
          <div className="text-black text-3xl font-medium leading-7 tracking-wide self-center whitespace-nowrap">
            Lorem Ipsum
          </div>
          <div className="text-black text-center text-xl font-light leading-5 tracking-wide self-center max-w-[615px] -ml-3 mt-4 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit.
          </div>
          <div className="self-stretch pr-0 mt-11 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white flex grow flex-col w-full mx-auto pb-8 rounded-3xl border-solid max-md:mt-9">
                  <img
                    loading="lazy"
                    srcSet={articleDummy}
                    className="aspect-[1.09] object-contain object-center w-full justify-center items-center self-stretch overflow-hidden"
                  />
                  <div className="text-zinc-800 text-base font-medium leading-5 ml-4 mt-6 max-md:ml-2.5">
                    Category
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-6 w-[348px] ml-4 mt-1 self-start max-md:ml-2.5">
                    Article Title{" "}
                  </div>
                  <div className="text-zinc-800 text-base leading-6 ml-4 mt-4 max-md:ml-2.5">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae
                    habitasse.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white flex grow flex-col w-full mx-auto pb-8 rounded-3xl border-solid max-md:mt-9">
                  <img
                    loading="lazy"
                    srcSet={articleDummy}
                    className="aspect-[1.09] object-contain object-center w-full justify-center items-center self-stretch overflow-hidden"
                  />
                  <div className="text-zinc-800 text-base font-medium leading-5 ml-4 mt-6 max-md:ml-2.5">
                    Category
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-6 w-[348px] ml-4 mt-1 self-start max-md:ml-2.5">
                    <span className="">Article</span>
                    <span className=""> </span>
                    <span className="">Title</span>
                    <span className=""> </span>
                  </div>
                  <div className="text-zinc-800 text-base leading-6 ml-4 mt-4 max-md:ml-2.5">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae
                    habitasse.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white z-[1] flex grow flex-col w-full mx-auto pb-8 rounded-3xl border-solid max-md:mt-9">
                  <img
                    loading="lazy"
                    srcSet={articleDummy}
                    className="aspect-[1.09] object-contain object-center w-full justify-center items-center self-stretch overflow-hidden"
                  />
                  <div className="text-zinc-800 text-base font-medium leading-5 w-[348px] ml-4 mt-6 self-start max-md:ml-2.5">
                    Category
                  </div>
                  <div className="text-zinc-800 text-xl font-bold leading-6 w-[348px] ml-4 mt-1 self-start max-md:ml-2.5">
                    Article Title{" "}
                  </div>
                  <div className="text-zinc-800 text-base leading-6 ml-4 mt-4 max-md:ml-2.5">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae
                    habitasse.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[659px] max-w-full mr-16 mt-16 self-end max-md:mr-2.5 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:mt-10">
                  <div className="text-blue-950 text-xl font-bold leading-5 tracking-wider uppercase">
                    Caption
                  </div>
                  <div className="text-zinc-800 text-5xl font-bold leading-10 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="text-zinc-800 text-lg leading-6 mt-12 max-md:mt-10">
                    Rhoncus morbi et augue nec, in id ullamcorper at sit.
                    Condimentum sit nunc in eros scelerisque sed{" "}
                  </div>
                  <div className="text-white text-sm font-medium leading-4 tracking-wide whitespace-nowrap justify-center border-[color:var(--primary-60,#0F62FE)] bg-blue-600 mt-2.5 px-5 py-3 border-2 border-solid max-md:pl-px">
                    Selengkapnya
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet={articleDummy}
                  className="aspect-[0.78] object-contain object-center w-full justify-center items-center overflow-hidden grow max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch text-blue-950 text-center text-xl font-bold leading-5 tracking-wider uppercase mt-16 max-md:max-w-full max-md:mt-10">
          who we are
        </div>
        <div className="self-stretch text-zinc-800 text-center text-4xl font-bold leading-10 mt-2 max-md:max-w-full">
          Purus sagittis fringilla arcu neque.
        </div>
        <div className="self-stretch text-zinc-800 text-center text-2xl font-bold leading-7 z-[1] mt-2 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Bibendum amet at molestie mattis.
        </div>
        <div className="items-stretch border-b-[color:var(--cool-gray-20,#DDE1E6)] bg-white self-stretch flex flex-col -mt-1 px-20 py-12 border-b border-solid max-md:max-w-full max-md:px-5">
          <div className="text-zinc-800 text-center text-5xl font-bold leading-10 w-[584px] mt-8 max-md:max-w-full max-md:mr-2.5">
            Our Impact
          </div>
          <div className="text-zinc-800 text-center text-lg leading-6 w-[584px] mt-12 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis.
          </div>
          <div className="items-stretch flex w-[659px] justify-between gap-5 mt-12 mb-8 pr-20 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 max-md:pr-5">
            <div className="items-stretch border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white flex grow basis-[0%] flex-col p-4 border-solid">
              <div className="items-stretch flex justify-between gap-4">
                <div className="justify-center items-center bg-zinc-200 flex aspect-square flex-col p-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/321a358f-eabf-45f8-8466-577c4f51c9fc?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden"
                  />
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-800 text-2xl font-bold leading-7">
                    250+
                  </div>
                  <div className="text-zinc-500 text-base leading-6 whitespace-nowrap">
                    Happy customer
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white flex grow basis-[0%] flex-col p-4 border-solid">
              <div className="items-stretch flex gap-4">
                <div className="justify-center items-center bg-zinc-200 flex aspect-square flex-col p-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9f4d3f8-3eb8-44e4-afda-63b227c932cb?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden"
                  />
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-800 text-2xl font-bold leading-7">
                    600+
                  </div>
                  <div className="text-zinc-500 text-base leading-6 whitespace-nowrap">
                    Completed projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch border-b-[color:var(--cool-gray-20,#DDE1E6)] bg-white self-stretch flex flex-col pt-px pb-12 px-20 border-b border-solid max-md:max-w-full max-md:px-5">
          <div className="text-zinc-800 text-center text-5xl font-bold leading-10 w-[584px] max-md:max-w-full max-md:mr-2.5">
            Our Goals
          </div>
          <div className="text-zinc-800 text-center text-lg leading-6 w-[584px] mt-12 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
            eleifend ultricies purus iaculis.
          </div>
          <div className="items-stretch border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white flex flex-col mt-12 p-4 border-solid max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap max-md:mr-0.5">
              <div className="justify-center items-center bg-zinc-200 flex aspect-square flex-col p-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfc64250-c97a-46d1-93b2-7aa450941343?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden"
                />
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="text-zinc-800 text-2xl font-bold leading-7 max-md:max-w-full">
                  250+
                </div>
                <div className="text-zinc-500 text-base leading-6 whitespace-nowrap max-md:max-w-full">
                  Happy customer
                </div>
              </div>
            </div>
          </div>
          <div className="items-stretch border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white flex flex-col mt-6 p-4 border-solid max-md:max-w-full max-md:mr-2.5">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap max-md:mr-0.5">
              <div className="justify-center items-center bg-zinc-200 flex aspect-square flex-col p-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa7fd47b-582b-4a4d-9a5c-ca1aba2a054a?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden"
                />
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="text-zinc-800 text-2xl font-bold leading-7 max-md:max-w-full">
                  600+
                </div>
                <div className="text-zinc-500 text-base leading-6 whitespace-nowrap max-md:max-w-full">
                  Completed projects
                </div>
              </div>
            </div>
          </div>
          <div className="items-stretch border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white flex flex-col mt-6 p-4 border-solid max-md:max-w-full max-md:mr-2.5">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap max-md:mr-0.5">
              <div className="justify-center items-center bg-zinc-200 flex aspect-square flex-col p-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/19faac55-dc24-4bad-82b4-723699cfc48e?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden"
                />
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="text-zinc-800 text-2xl font-bold leading-7 max-md:max-w-full">
                  1.8K+
                </div>
                <div className="text-zinc-500 text-base leading-6 whitespace-nowrap max-md:max-w-full">
                  Available Resources
                </div>
              </div>
            </div>
          </div>
          <div className="items-stretch border border-[color:var(--cool-gray-20,#DDE1E6)] bg-white flex flex-col mt-6 mb-8 p-4 border-solid max-md:max-w-full max-md:mr-2.5">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap max-md:mr-0.5">
              <div className="justify-center items-center bg-zinc-200 flex aspect-square flex-col p-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/253af310-223b-471f-8076-69389de5f0ed?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden"
                />
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="text-zinc-800 text-2xl font-bold leading-7 max-md:max-w-full">
                  11K+
                </div>
                <div className="text-zinc-500 text-base leading-6 whitespace-nowrap max-md:max-w-full">
                  Subscribers
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-start bg-zinc-500 self-stretch flex flex-col pl-10 pr-11 py-12 max-md:max-w-full max-md:px-5">
          <div className="items-center flex w-[671px] max-w-full gap-5 ml-5 self-start max-md:flex-wrap">
            <div className="flex gap-1 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c8f4cd-46f2-47be-9efd-402e74ac4eb2?"
                className="aspect-square object-contain object-center w-6 fill-zinc-200 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-300 text-2xl font-bold leading-7 whitespace-nowrap justify-center items-stretch self-stretch aspect-[1.5897435897435896] pb-3.5">
                logo
              </div>
            </div>
            <div className="items-stretch self-stretch flex justify-between gap-4 pr-16 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="items-stretch border-b-[color:var(--cool-gray-30,#C1C7CD)] bg-slate-100 flex justify-between gap-2 px-4 py-3 border-b border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee36ef69-8207-4afb-bc7c-dfbe17a9e54f?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-500 text-base leading-6 grow whitespace-nowrap">
                  Enter your email to get the latest news...
                </div>
              </div>
              <div className="text-white text-base font-medium leading-4 tracking-wide whitespace-nowrap justify-center items-center border-[color:var(--primary-60,#0F62FE)] bg-blue-600 px-5 py-4 border-2 border-solid">
                Subscribe
              </div>
            </div>
          </div>
          <div className="bg-neutral-300 self-stretch flex shrink-0 h-px flex-col mt-12 max-md:max-w-full max-md:mt-10" />
          <div className="self-stretch mt-12 pr-20 max-md:max-w-full max-md:mt-10 max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col mt-3 max-md:mt-10">
                  <div className="text-white text-lg font-bold leading-5 whitespace-nowrap">
                    Column One
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-7">
                    Twenty One
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Thirty Two
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Fourty Three
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Fifty Four
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col mt-3 max-md:mt-10">
                  <div className="text-white text-lg font-bold leading-5 whitespace-nowrap">
                    Column Two
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-7">
                    Sixty Five
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Seventy Six
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Eighty Seven
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Ninety Eight
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col mt-3 max-md:mt-10">
                  <div className="text-white text-lg font-bold leading-5 whitespace-nowrap">
                    Column Three
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-7">
                    One Two
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Three Four
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Five Six
                  </div>
                  <div className="text-white text-base font-medium leading-4 whitespace-nowrap mt-4">
                    Seven Eight
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex grow flex-col pt-3 max-md:mt-10">
                  <div className="text-white text-lg font-bold leading-5 self-stretch whitespace-nowrap">
                    Column Four
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b51b5d3-87f2-418a-b6bf-562a2d677e9d?"
                    className="aspect-[3.25] object-contain object-center w-[130px] overflow-hidden self-center mt-7"
                  />
                  <div className="text-white text-lg font-bold leading-5 self-stretch whitespace-nowrap mt-9">
                    Join Us
                  </div>
                  <div className="items-stretch self-stretch flex gap-4 mt-5 max-md:justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f39406b-79a7-445a-b037-274d300a0f3c?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/52b5fc3b-46df-4576-8200-541ef638c50e?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/228519d2-2488-42ab-af61-dddb9678d4ba?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/25fa9dcc-abd6-4b8b-9f0e-a3ae912e5360?"
                      className="aspect-[0.42] object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-300 self-stretch flex shrink-0 h-px flex-col mt-12 max-md:max-w-full max-md:mt-10" />
          <div className="self-stretch flex w-full justify-between gap-5 mt-12 pr-20 pb-3 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
            <div className="text-white text-sm leading-5 grow shrink basis-auto">
              CompanyName @ 202X. All rights reserved.
            </div>
            <div className="justify-between items-stretch flex gap-5 mt-3 max-md:justify-center">
              <div className="text-white text-base font-medium leading-4">
                Eleven
              </div>
              <div className="text-white text-base font-medium leading-4">
                Twelve
              </div>
              <div className="text-white text-base font-medium leading-4 whitespace-nowrap">
                Thirteen
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


