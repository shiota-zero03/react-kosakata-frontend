import { Link } from "react-router-dom";

export default function Custom404 () {
    return(
        <div className="d-flex vh-100 w-100 align-items-center justify-content-center" style={{background: '#aff0e4'}}>
            <div className='w-full text-center md:mt-[-100px] mt-[-50px]'>
                <img src={'/assets/images/error.gif'} className='lg:w-[50%] md:w-[64%] w-[80%] lg:ms-[25%] md:ms-[18%] ms-[10%] text-center' alt='error' />
                <h1 className="md:text-[2rem] text-[1.5rem] font-bold text-black md:mt-[-50px]">Page not found !</h1>
                <p className="mb-7 text-black">Oops! Halaman yang Anda cari tidak ditemukan.</p>
                <Link to="/" className="btn btn-success text-white">Kembali ke Halaman Utama</Link>
            </div>
        </div>
    )
}