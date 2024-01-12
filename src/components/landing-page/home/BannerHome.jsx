import HomeBanner1 from '../../../assets/images/home.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <div className='w-100 font-salsa position-relative'>
            <Slider {...settings}>
                <div className='position-relative slider-banner'>
                    <div className='text-dark position-absolute h-100 d-flex align-items-center px-lg-5 px-5 mx-lg-5 text-center col-md-11 col-12'>
                        <div className='ps-md-5 ms-md-5'>
                            <h1 className='mt-0 mt-4 font-salsa'>
                                Selamat Datang Sobat KOSAKATA
                            </h1>
                        </div>                                
                    </div>
                    <img src={HomeBanner1} alt="" className='w-100 position-relative' style={{ zIndex: -1 }} />
                </div>
                <div className='position-relative slider-banner'>
                    <div className='text-dark position-absolute h-100 d-flex align-items-center px-lg-5 px-5 mx-lg-5 col-lg-7 col-md-10'>
                        <div className='ps-md-5 ms-md-5'>
                            <h1 className='mt-0 mt-4 font-salsa'>
                                Temukan Kost Yang Sesuai Dengan Keinginanmu.
                            </h1>
                        </div>                                
                    </div>
                    <img src={HomeBanner1} alt="" className='w-100 position-relative' style={{ zIndex: -1 }} />
                </div>
                <div className='position-relative slider-banner'>
                    <div className='text-dark right-0 text-end position-absolute h-100 d-flex align-items-center px-lg-5 px-5 mx-lg-5 col-lg-8 col-md-10'>
                        <div className='ps-md-5 ms-md-5'>
                            <h1 className='mt-0 mt-4 font-salsa'>
                                Disini tersedia berbagai jenis kos yang dapat dipilih sesuai seleramu
                            </h1>
                        </div>                                
                    </div>
                    <img src={HomeBanner1} alt="" className='w-100 position-relative' style={{ zIndex: -1 }} />
                </div>
            </Slider>
        </div>
    )
}
export default BannerHome;