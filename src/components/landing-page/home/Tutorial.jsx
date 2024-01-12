import Bingung from '../../../assets/images/bingung.png';
import Laptop from '../../../assets/images/laptop.png';

const Tutorial = () => {
    const tutor = [
        {number: 'satu', text: 'Langkah yang pertama ialah login menggunakan akun kosakata, jika belum memiliki akun maka klik register'},
        {number: 'dua', text: 'Setelah selesai mendaftar anda bisa langsung memesan kos yang sesuai dengan kebutuhan. Ada 3 kategori yang tersedia, yakni kos khusus putri, khusus putra, dan bebas'},
        {number: 'tiga', text: 'Di halaman ini anda bisa melihat lihat detail kosan yang tersedia seperti harga, lokasi, hingga fasilitas'},
        {number: 'empat', text: 'Jika telah menemukan pilihan anda, selanjutnya bisa menghubungi pemilik kos melalui kontak yang tercantum pada deskripsi'},
        {number: 'lima', text: 'Pastikan anda menghubungi pemilik kos untuk menanyakan ketersediaan kamar, jika anda sudah yakin maka anda bisa langsung ke tahap pembayaran'},
        {number: 'enam', text: 'Jika ada masih merasa kesulitan, silakan ajukan pertanyaan kepada kami melalui kontak yang tersedia. kami akan segera membalasnya'},
    ]
    return(
        <div id="tutorial">
            <div className="bg-success position-relative">
                <div className="container position-relative z-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="py-md-5 py-3">
                                <h1 className="text-primary text-center m-0">Masih bingung cara booking kosan di kosakata?</h1>
                            </div>
                        </div>
                        {tutor.map((item, index) => (
                            <div key={index} className='col-md-6 mb-3'>
                                <div className='d-md-flex align-items-center'>
                                    <div className='position-relative col-md-3 col-4'>
                                        <img src={Laptop} alt='tutorial-laptop' className='w-100' />
                                        <h4 className='m-0 position-absolute w-100 text-center' style={{ top: '50%', transform: 'translateY(-50%)' }}><strong>{item.number}.</strong></h4>
                                    </div>
                                    <h6 className='text-white d-md-block d-none'>
                                        {item.text}
                                    </h6>
                                    <div style={{textAlign: 'justify'}} className='d-md-none'>
                                        <small className='text-white'>
                                            {item.text}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="position-absolute bottom-0 right-0 z-0" style={{ opacity: '30%' }}>
                    <img src={Bingung} alt="tutorial" />
                </div>
            </div>
        </div>
    )
}
export default Tutorial;