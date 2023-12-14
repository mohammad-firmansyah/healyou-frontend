import "react";
import "../App.css";
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";


export default function ArticlePage() {
    const params = useParams();

    if (params.id == 1) {
        return(
        <>
             <Nav/>

            <div className="bg-gradient-to-b from-indigo-50 to-white py-[46px] px-12 text-start" >

                <p className='font-medium'>
                    Article
                </p>

                <h1 className='font-bold text-2xl my-2'>Perjuangan Relawan bandung dalam menyelamatkan kucing</h1>

                <span className="font-light">Mohammad Firmansyah | Surabaya | 20-Januari-2023</span>
                <img
                loading="lazy"
                srcSet="../assets/1.jpg"
                className="w-full rounded-md border-3 my-4"

              />
                <p className="font-regular">
                    Kucing, sebagai makhluk yang penuh keanggunan, seringkali menjadi korban ketidakpedulian dan bahkan kekejaman manusia. Namun, di tengah-tengah kegelapan tersebut, ada sebuah cahaya kebaikan yang bersinar terang di Kota Bandung. Sebuah perjuangan mulia yang dilakukan oleh para relawan setempat untuk menyelamatkan dan melindungi kucing yang terlantar.
                <br />
                <br />
                    Di tengah gemerlap kota Bandung, terbentuklah sebuah komunitas peduli kucing yang terdiri dari para relawan berhati mulia. Mereka datang dari berbagai latar belakang, memiliki pekerjaan dan kehidupan yang berbeda, tetapi satu tujuan mengikat mereka bersama: menyelamatkan dan memberikan kasih sayang kepada kucing yang membutuhkan. 
                    
                    <br />
                    <br />
                    Dengan semangat sukarela yang menggebu-gebu, relawan Bandung bergerak cepat merespons laporan masyarakat tentang kucing terlantar di jalanan. Mereka menyusuri gang-gang sempit, meresapi setiap sudut kota untuk menemukan kucing yang membutuhkan pertolongan. Dalam setiap aksi penyelamatan, mereka membawa peralatan medis, makanan, dan perlengkapan lainnya untuk memberikan perawatan segera.
                    <br />
                    <br />
                    Salah satu langkah penting dalam upaya penyelamatan kucing adalah menyediakan tempat penampungan sementara. Relawan Bandung berusaha sekuat tenaga untuk memberikan tempat yang nyaman dan aman bagi kucing yang mereka selamatkan. Ini bukan hanya sekadar tempat berlindung, tetapi juga tempat di mana kucing-kucing ini dapat pulih secara fisik dan emosional.
                    <br />
                    <br />
                    Selain bertindak secara langsung, relawan Bandung juga aktif dalam kampanye kesadaran masyarakat. Mereka mengedukasi warga kota tentang pentingnya merawat hewan peliharaan dengan baik, sterilisasi untuk mengendalikan populasi kucing, dan pentingnya tidak memperlakukan hewan dengan kejam. Dengan menyebarkan pesan-pesan positif ini, mereka berharap dapat mengubah pola pikir masyarakat terhadap perlindungan hewan.
                    <br />
                    <br />
                    Setelah pulih, kucing-kucing yang diselamatkan dicari rumah baru yang penuh kasih sayang. Relawan Bandung berusaha untuk memberikan setiap kucing kesempatan untuk hidup dengan baik, tidak hanya sebagai hewan peliharaan, tetapi juga sebagai bagian dari keluarga yang peduli
                    <br />
                    <br />
                    Perjuangan relawan Bandung dalam menyelamatkan kucing tidak selalu mudah. Terkadang, mereka dihadapkan pada tantangan finansial, logistik, dan bahkan resistensi dari sebagian masyarakat. Namun, semangat mereka tidak pernah pudar. Harapan mereka adalah menciptakan lingkungan yang lebih baik bagi kucing dan masyarakat secara keseluruhan.

                    Dengan segala perjuangan dan dedikasi, para relawan Bandung menjadi pahlawan tak terlihat bagi kucing-kucing yang membutuhkan perlindungan. Melalui kisah-kisah kebaikan mereka, mereka membentuk jejak menuju kehidupan yang lebih baik, di mana kasih sayang dan kepedulian adalah nilai utama yang diterapkan dalam kehidupan sehari-hari.
                </p>
            </div>

            <Footer/>
        </>
    )
    } else if (params.id == 2) {
        return(
        <>
             <Nav/>

            <div className="bg-gradient-to-b from-indigo-50 to-white py-[46px] px-12 text-start" >

                <p className='font-medium'>
                    Article
                </p>

                <h1 className='font-bold text-2xl my-2'>Mencegah Rabies: Upaya Vaksinasi Ratusan Kucing</h1>

                <span className="font-light">Candra | Surabaya | 20-Agustus-2023</span>
                <img
                loading="lazy"
                srcSet="../assets/2.jpg"
                className="w-full rounded-md border-3 my-4"

              />
                <p className="font-regular">
                   

                    <br />
                    <br />
                    Rabies, sebuah penyakit yang mematikan dan menular, telah menjadi fokus utama upaya pencegahan kesehatan hewan di berbagai belahan dunia. Di tengah langkah-langkah proaktif untuk melindungi komunitas dan mencegah penyebaran rabies, ratusan kucing telah menjalani proses vaksinasi. Inisiatif ini tidak hanya berpotensi menyelamatkan nyawa hewan-hewan tersebut, tetapi juga mengurangi risiko penularan rabies kepada manusia.


                    <br />
                    <br />
                    Rabies adalah penyakit yang disebabkan oleh virus yang menyerang sistem saraf dan dapat ditularkan melalui gigitan hewan yang terinfeksi. Meskipun penyakit ini umumnya dikaitkan dengan anjing, kucing juga dapat menjadi pembawa dan penyebar penyakit ini. Oleh karena itu, vaksinasi kucing menjadi langkah proaktif dalam mencegah penularan rabies di antara hewan peliharaan dan lingkungan sekitar.


                    <br />
                    <br />
                    Sebagai respons terhadap ancaman rabies, lembaga-lembaga kesehatan hewan dan organisasi nirlaba telah bergandengan tangan untuk meluncurkan program vaksinasi massal bagi kucing-kucing di berbagai komunitas. Tim-tim medis hewan bekerja keras untuk mencapai target vaksinasi yang signifikan, memastikan bahwa kucing-kucing yang terlibat mendapatkan perlindungan yang optimal.


                    <br />
                    <br />
                    1. *Perlindungan Hewan:* Vaksinasi memberikan perlindungan langsung terhadap virus rabies, mengurangi risiko kucing terinfeksi dan mengalami dampak fatal penyakit ini.
                    2. *Perlindungan Manusia:* Dengan mengurangi jumlah kucing yang berpotensi membawa virus rabies, vaksinasi juga membantu melindungi manusia dari risiko penularan. Terlebih lagi, kucing yang hidup di sekitar manusia sering kali memiliki kontak langsung dengan pemiliknya, sehingga vaksinasi kucing dapat menjadi langkah efektif dalam mencegah penularan rabies ke manusia.

                    
                    <br />
                    <br />
                    Meskipun upaya vaksinasi kucing memiliki dampak positif yang besar, beberapa tantangan dapat muncul, termasuk aksesibilitas dan partisipasi pemilik hewan. Oleh karena itu, kampanye penyuluhan dan program vaksinasi mobile telah menjadi bagian integral dari upaya ini, memastikan bahwa sebanyak mungkin kucing mendapatkan perlindungan yang diperlukan.

                    
                    <br />
                    <br />
                    Inisiatif vaksinasi kucing merupakan langkah penting dalam mencegah penularan rabies di antara hewan peliharaan dan manusia. Dengan ratusan kucing yang telah divaksinasi, masyarakat dan pemilik hewan dapat merasa lebih aman dan terlindungi dari ancaman rabies. Langkah ini juga menciptakan lingkungan yang lebih aman dan sehat bagi seluruh komunitas. Melalui kolaborasi dan kesadaran masyarakat, kita dapat terus mengatasi tantangan yang ada dan mencapai tujuan pencegahan rabies yang lebih besar.
                </p>
            </div>

            <Footer/>
        </>
    )
    }
     else if (params.id ==  3) {
          return(
        <>
             <Nav/>

            <div className="bg-gradient-to-b from-indigo-50 to-white py-[46px] px-12 text-start" >

                <p className='font-medium'>
                    Article
                </p>

                <h1 className='font-bold text-2xl my-2'>Membantu Kucing Melalui Donasi: Memberikan Harapan dan Perlindungan</h1>

                <span className="font-light">Syukur I | Sidoarjo | 1-Januari-2023</span>
                <img
                loading="lazy"
                srcSet="../assets/3.jpg"
                className="w-full rounded-md border-3 my-4"

              />
                <p className="font-regular">
                    Di tengah tantangan yang dihadapi oleh kucing tanpa rumah, yang sering kali menghadapi kesulitan mendapatkan perawatan dan perlindungan, donasi menjadi sarana penting untuk memberikan bantuan dan memberikan kehidupan yang lebih baik bagi hewan-hewan tersebut. Artikel ini akan menjelaskan beberapa cara efektif untuk membantu kucing melalui donasi dan bagaimana kontribusi kecil dapat membuat perbedaan besar dalam kehidupan mereka.

                    <br />
                    <br />
                    Organisasi kesejahteraan hewan berperan kunci dalam memberikan perlindungan, perawatan medis, dan tempat penampungan untuk kucing yang membutuhkan. Donasi finansial kepada organisasi semacam ini membantu mereka menjalankan program-program kesejahteraan, termasuk sterilisasi, vaksinasi, dan penyediaan makanan.

                    
                    <br />
                    <br />
                    Mendukung program sterilisasi dan vaksinasi membantu mengendalikan populasi kucing liar dan mencegah penyebaran penyakit, termasuk rabies. Donasi yang diberikan untuk program-program ini memungkinkan organisasi untuk bekerja secara proaktif dalam mencegah masalah populasi berlebih dan menjaga kesehatan kucing.


                    <br />
                    <br />
                    Menyumbangkan makanan kucing berkualitas dan perlengkapan lainnya seperti pasir kucing, tempat tidur, dan mainan juga merupakan cara yang efektif untuk membantu kucing yang tinggal di tempat penampungan atau yang membutuhkan dukungan makanan. Donasi semacam ini memberikan kebutuhan dasar dan kenyamanan bagi kucing yang mungkin tidak memiliki akses ke sumber daya tersebut.


                    <br />
                    <br />
                    Penggalangan dana online atau melalui acara amal dapat diarahkan untuk kasus-kasus khusus, seperti perawatan medis yang mahal atau pemulihan kucing yang mengalami kekerasan. Dengan berpartisipasi dalam penggalangan dana, individu dapat memberikan kontribusi yang signifikan untuk membantu kucing-kucing yang membutuhkan perhatian khusus.

                    <br />
                    <br />
                    Selain donasi finansial, menyumbangkan waktu sebagai sukarelawan di tempat penampungan atau organisasi kesejahteraan hewan juga merupakan cara berharga untuk membantu kucing. Membantu dalam kegiatan sehari-hari seperti membersihkan kandang, memberikan perhatian kepada kucing, atau membantu dalam kampanye vaksinasi memberikan dampak langsung pada kesejahteraan hewan-hewan tersebut.


                    <br />
                    <br />
                    Melalui donasi, baik itu berupa dana, barang, atau waktu, kita dapat memberikan bantuan yang berarti bagi kucing yang membutuhkan. Dengan membantu organisasi kesejahteraan hewan dan program-program kesejahteraan, kita dapat bersama-sama menciptakan lingkungan yang lebih baik bagi kucing, memberikan harapan, dan memastikan bahwa mereka mendapatkan perlindungan dan perawatan yang mereka butuhkan. Donasi Anda, sekecil apapun, dapat membuat perbedaan besar dalam membentuk masa depan yang lebih cerah bagi kucing yang kurang beruntung.
                </p>
            </div>

            <Footer/>
        </>
    )
    }

    
}