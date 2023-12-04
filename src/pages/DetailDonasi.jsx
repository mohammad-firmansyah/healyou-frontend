import 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HistoryDonation from '../components/HistoryDonation'

export default function DetailDonasi() {
    return (
        <div className='bg-gradient-to-b from-white to-indigo-100 '>
            <Nav/>

            <img src="/assets/1.jpg" className='w-full' alt="" />

            <div className='m-8 '>

                <h1 className='text-xl font-medium'>
                    Donasi Anak Kucing yang Terlantar 
                </h1>

                <p className='mt-2 text-xl font-medium mb-2'>
                    Rp. 7.500.000
                </p>

                <span className='text-indigo-700 font-bold text-sm'>
                    Terkumpul dari target Rp.10.000.000
                </span>

                <div className='border-2  w-full h-3 rounded-full bg-blue-50 mt-3 overflow-hidden '>
                    <div className='w-[75%] h-3 bg-blue-600'/>
                </div>

                <button className='w-full font-regular bg-blue-600 text-white py-2 rounded-full mt-6 text-sm'>Donasi Sekarang</button>

                <div className='flex justify-around my-4'>
                    <div className='flex mx-4 '>
                        <img src="/assets/Heart.png" className='mx-2' alt="heart" />
                        1000 Donatur
                    </div>
                    <div className='border-black flex ml-5 border-l-2'>
                        <img src="/assets/Paper.png" className='mx-2' alt="heart" />
                        Kabar Terbaru
                    </div>
                    <div className='border-black ml-5 flex border-l-2'>
                        <img src="/assets/Time-Circle.png" className='mx-2' alt="heart" />
                        40 Hari Lagi
                    </div>
                </div>
            </div>

            <hr />

            <div className='m-8'>

               <h2 className='font-bold text-xl text-center mb-4'> Donasi Anak Kucing yang Terlantar</h2> 
                <p>
               Bayangkan sejenak, berjalan di jalanan dan melihat sepasang mata yang memandang Anda dengan penuh harapan. Itu adalah kucing jalanan yang terlantar, mencari makanan dan tempat yang hangat.

                Kami dari Healyou Foundation berdedikasi untuk memberikan kucing-kucing ini kesempatan kedua untuk hidup yang lebih baik. Dengan bantuan Anda, kita bisa memberikan mereka makanan, perawatan medis, dan rumah yang penuh kasih.
                Tapi kami tidak bisa melakukannya sendiri. Kami membutuhkan bantuan Anda.
                Dengan donasi sebesar yang anda mampu, Anda bisa memberi makan kucing jalanan selama seminggu. Dengan Rp200.000, Anda bisa membantu biaya vaksinasi dan sterilisasi. Setiap rupiah yang Anda sumbangkan akan langsung digunakan untuk membantu kucing-kucing ini.

                Jadi, apa yang Anda tunggu? Mari bergabung dengan kami dalam misi ini. Karena setiap kucing pantas mendapatkan hidup yang layak dan penuh kasih.
                Klik tombol ‘Donasi Sekarang’ dan mulailah membuat perbedaan. Ingat, tidak ada sumbangan yang terlalu kecil atau terlalu besar. Setiap bantuan Anda sangat berarti bagi mereka.
                </p>
 
            </div>
        <hr />

         <h2 className='font-bold text-xl text-center mb-4 m-8'> 
            Riwayat Donasi

            <div className='container-history-donation flex flex-column justify-center'>
                <HistoryDonation name="Firman" totalDonation={"20000"} time={""}/>
            </div>
         </h2>

         <hr />
        
        <h2 className='font-bold text-xl text-center mb-4 m-8'> 
            Kabar Terbaru

            
           
         </h2>

          <div className='m-8'></div>
            <p className='text-center mb-8'>
                Belum ada kabar baru dari penyelenggara
            </p>

<Footer/>
        </div>

    )
}