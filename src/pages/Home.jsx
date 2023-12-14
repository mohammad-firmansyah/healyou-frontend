import "react";
import "../App.css";
import Nav from "../components/Nav"
import Article from "../components/Article"
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate()

  const navigateToArticle = (id) => {
    navigate('/article/'+(parseInt(id)+1).toString())
  }

  const articles = [
    {
      "img":"1.jpg",
      "title":"Perjuangan Relawan bandung dalam menyelamatkan kucing"
    },
    {
      "img":"2.jpg",
      "title":"Cegah rabies, ratusan kucing telah di vaksinasi"
    },
    {
      "img":"3.jpg",
      "title":"Cara bantu kucing lewat donasi "
    }
  ]
  return (
    <>
    
        <Nav/>
        <img
          loading="lazy"
          srcSet="assets/courousel_img.png"
          className=" object-contain object-center w-full justify-center items-center overflow-hidden self-stretch max-md:max-w-full"
        />

        <div className="text-black text-3xl font-bold leading-8 tracking-wide self-center whitespace-nowrap mt-12 max-md:max-w-full max-md:mt-10 text-center">
          SELAMAT DATANG DI HEALYOU
        </div>
        <div className="text-black text-center text-lg font-light leading-5 tracking-wide self-center max-w-[615px] mx-auto mt-5 max-md:max-w-full">
          Website donasi untuk kucing yang bertujuan untuk membantu
          kucing-kucing yang membutuhkan perawatan medis, makanan, dan tempat
          tinggal yang layak.
        </div>
        <div className="self-stretch mt-12 px-4 max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            
                {
                  articles.map((value,key) => {
                    return <Article key={key} title={value.title} img={value.img} handleClick={() => navigateToArticle(key)} />
                  })
                }
          </div>
        </div>
        <div className="self-center w-[660px] max-w-full mt-16 pr-px max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-10">
                <div className="text-blue-950 text-xl font-bold leading-5 tracking-wider uppercase">
                  BaCA ARTIKEL
                </div>
                <div className="text-zinc-800 text-5xl font-bold leading-10 mt-2">
                  Kisah Inspiratif Kucing - kucing yang telah diselamatkan
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="assets/kucing.png"
                className="aspect-[0.78] object-contain object-center w-full justify-center items-center shadow-sm overflow-hidden grow max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch text-blue-950 text-center text-xl font-bold leading-5 tracking-wider uppercase w-full mt-36 max-md:max-w-full max-md:mt-10">
          who we are
        </div>
        <div className="self-stretch text-zinc-800 text-center text-4xl font-bold leading-10 w-full mt-2 max-md:max-w-full">
          HEALYOU SIAP MEMBANTU
        </div>
        <div className="text-zinc-800 text-center text-xl mx-2 font-bold leading-7 w-full mt-2 max-md:max-w-full">
          KAMI ADALAH ORGANISASI SOSIAL UNTUK MERAWAT, MENYELAMATKAN, DAN
          MENYALURKAN KUCING - KUCING TERLANTAR, SAKIT DAN TERLUKA
        </div>
        <div className="z-[1] flex flex-col items-center mt-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-zinc-800 text-center text-5xl font-bold leading-10 w-[584px] mt-8 max-md:max-w-full">
            Our Impact
          </div>
          <div className="text-zinc-800 text-justify text-lg leading-6 w-[584px] mt-12 max-md:max-w-full max-md:mt-10">
            HealYou bekerja sama dengan dokter hewan, penitipan hewan, dan
            organisasi sosial untuk menyelamatkan kucing. Anda juga bisa
            mengikuti perkembangan kucing-kucing yang Anda bantu melalui website
            ini. HealYou adalah website yang peduli dan berbagi dengan kucing.
            Dengan berdonasi melalui HealYou, Anda bisa memberikan kesempatan
            hidup yang lebih baik bagi kucing-kucing yang tidak beruntung.
          </div>
          <div className="items-stretch flex w-[658px] justify-between gap-5 mt-12 mb-8  max-md:max-w-full max-md:flex-wrap  max-md:mt-10">
            <div className="items-stretch border bg-white flex grow basis-[0%] flex-col px-5 py-4 rounded-3xl border-solid border-indigo-900">
              <div className="items-stretch flex justify-between gap-4 max-md:-mr-1">
                <div className="justify-center bg-blue-200 flex aspect-square flex-col px-5 py-3 rounded-2xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/72811a7b-c652-484a-b11b-7f4c083791d7?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden"
                  />
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-800 text-2xl font-bold leading-7">
                    1500+
                  </div>
                  <div className="text-zinc-500 text-base leading-6 whitespace-nowrap">
                    Orang baik
                  </div>
                </div>
              </div>
            </div>
            <div className="items-stretch border bg-white flex grow basis-[0%] flex-col px-5 py-4 rounded-3xl border-solid border-indigo-900">
              <div className="items-stretch flex justify-between gap-4 max-md:-mr-1">
                <div className="justify-center bg-blue-200 flex aspect-square flex-col px-5 py-3 rounded-2xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/12785b11-273a-4449-bc52-4f54b373ad9b?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden"
                  />
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-800 text-2xl font-bold leading-7">
                    20+
                  </div>
                  <div className="text-zinc-500 text-base leading-6 whitespace-nowrap">
                    Project Donasi berhasil
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center -mt-1 pt-px pb-12 max-md:max-w-full max-md:px-5">
          <div className="text-white text-center text-5xl font-bold leading-10 w-[584px] max-md:max-w-full max-md:mr-1.5">
            Our Goals
          </div>
          <div className="text-white text-justify text-lg leading-6 w-[584px] mt-12 max-md:max-w-full max-md:mt-10">
            Website Heal You bisa memberikan informasi, edukasi, dan inspirasi
            tentang kondisi kucing atau hewan yang membutuhkan perawatan medis,
            makanan, dan tempat tinggal yang layak, serta dampak positif yang
            bisa diberikan oleh donasi untuk kucing atau hewan tersebut. Website
            Heal You juga bisa menampilkan cerita-cerita sukses dari kucing atau
            hewan yang telah diselamatkan, dirawat, dan disalurkan oleh
            organisasi Heal You.
          </div>
          <div className="border w-[584px] bg-white flex flex-col mt-12 px-4 py-4 rounded-3xl border-solid border-indigo-900 max-md:max-w-full max-md:mr-1.5 max-md:mt-10">
            <div className="flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="justify-center bg-blue-200 flex aspect-square flex-col px-5 py-3 rounded-2xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d84d8658-5bf5-4fcd-98b8-f7030e863e81?"
                  className="aspect-[0.96] object-contain object-center w-[23px] overflow-hidden max-md:ml-1"
                />
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="text-zinc-800 text-2xl font-bold leading-7 max-md:max-w-full">
                  25
                </div>
                <div className="text-zinc-500 text-base leading-6 whitespace-nowrap max-md:max-w-full">
                  Relawan yang berhasil menyelamatkan kucing
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[584px] border bg-white flex flex-col mt-6 mb-8 px-4 py-4 rounded-3xl border-solid border-indigo-900 max-md:max-w-full max-md:mr-1.5">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="justify-center bg-blue-200 flex aspect-square flex-col px-5 py-3 rounded-2xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d45693ea-8644-474c-9784-2299ad919346?"
                  className="aspect-[0.96] object-contain object-center w-[23px] overflow-hidden max-md:ml-1"
                />
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="text-zinc-800 text-2xl font-bold leading-7 max-md:max-w-full">
                  600+
                </div>
                <div className="text-zinc-500 text-base leading-6 whitespace-nowrap max-md:max-w-full">
                  Kucing Telah Tertolong
                </div>
              </div>
            </div>
          </div>
        </div>
        
       <Footer/>
    </>
    
  );
}


