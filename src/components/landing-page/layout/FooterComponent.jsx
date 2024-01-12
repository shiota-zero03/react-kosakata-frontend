import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return(
        <>
            <div className="container">
                <div className="row mt-md-5 mb-md-5 mt-5 mb-3">
                    <div className="col-md-4 mb-3">
                        <img src="/assets/images/kosakata-footer.png" alt="kosakata" width={310} style={{ marginLeft: '-8px' }} /><br />
                        <h5 className="mb-0 mt-3">
                            Pemandu untuk menemukan kost yang sedang kamu cari dengan mudah di Purwakarta
                        </h5>
                    </div>
                    <div className="col-md-2 mb-3 d-md-block d-none"><br /></div>
                    <div className="col-md-3 mb-3">
                        <ul style={{ marginLeft: '-2rem' }}>
                            <li className="d-block"><strong>Lainnya</strong></li>
                            <li className="d-block">
                                <Link to={'/kebijakan-privasi'} className="text-black text-decoration-none">
                                    Kebijakan Privasi
                                </Link>
                            </li>
                            <li className="d-block">
                                <Link to={'/syarat-dan-ketentuan-umum'} className="text-black text-decoration-none">
                                    Syarat dan Ketentuan Umum
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-3">
                        <ul style={{ marginLeft: '-2rem' }}>
                            <li className="d-block"><strong>Hubungi Kami</strong></li>
                            <li className="d-inline-block me-3">
                                <Link target="__blank" to={'https://www.instagram.com/krim_glace'}>
                                    <h2 className="m-0"><FontAwesomeIcon icon={faInstagram} className="text-dark" /></h2>
                                </Link>
                            </li>
                            <li className="d-inline-block me-3">
                                <Link target="__blank" to={'https://wa.me/6282275713049'}>
                                    <h2 className="m-0"><FontAwesomeIcon icon={faWhatsapp} className="text-dark" /></h2>
                                </Link>
                            </li>
                            <li className="d-inline-block me-3">
                                <Link target="__blank" to={'mailto:ryukokaru@gmail.com'}>
                                    <h2 className="m-0"><FontAwesomeIcon icon={faEnvelope} className="text-dark" /></h2>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center font-salsa py-2 border-0 border-top border-dark">
                Copyright &copy; { new Date().getFullYear() } KOSAKATA. , All rights reserved.
            </div>
        </>
    )
}
export default FooterComponent;