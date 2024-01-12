import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgUser from '../../../assets/images/user.png';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
        ],
    };

    const testi = [
        {img: ImgUser, name: 'Pemilik Kos 1', quotes: 'Saya mempercayakan urusan promosi kos saya kepada kosakata sebagai penyedia layanan kos di Purwakarta. To be honest Saya merasa sangat terbantu dari segi marketing. Thanks Kosakata'},
        {img: ImgUser, name: 'Pemilik Kos 2', quotes: 'Kosakata membantu Saya mempertemukan dengan para pencari kos. Alhasil semua kamar kos yang saya punya telah terisi penuh. Kosakata The Best!'}
    ]
    return (
        <>
            <div className="bg-primary position-relative">
                <div className="container position-relative z-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="py-md-5 py-3">
                                <h1 className="text-success text-center m-0">Kata Pemilik Kos</h1>
                            </div>
                        </div>
                        <div className="col-12">
                            <Slider {...settings}>
                                {testi.map((item, index) => (
                                    <div key={index}>
                                        <div className="mx-3">
                                            <div className="alert alert-warning position-relative z-1">
                                                <q>{item.quotes}</q>
                                            </div>
                                            <div className="d-flex align-items-center z-2 position-relative" style={{ marginTop: '-40px' }}>
                                                <div className="mt-2 ms-3">
                                                    <h6 className="text-success m-0"><strong>{item.name}</strong></h6>
                                                </div>
                                                <div className="ms-auto me-3">
                                                    <img src={item.img} alt="user" className="rounded-circle" width={80} height={80} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial;