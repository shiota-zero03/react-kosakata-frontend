import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Putra from '../../../assets/images/putra.png';
import Putri from '../../../assets/images/putri.png';
import Bebas from '../../../assets/images/bebas.png';

const Category = () => {
    const category = [
        {img: Putra, alt: 'kosan sobat putra', link: 'sobat-putra', text: 'Khusus Sobat Putra'},
        {img: Putri, alt: 'kosan sobat putri', link: 'sobat-putri', text: 'Khusus Sobat Putri'},
        {img: Bebas, alt: 'kosan sobat bebas', link: 'sobat-bebas', text: 'Khusus Sobat Bebas'},
    ]
    return(
        <>
            <div className="container position-relative mt-5">
                <div className="row">
                    <div className="col-12 mb-4">
                        <div className="d-flex align-items-center">
                            <h2 className="m-0"><strong>Kategori</strong></h2>
                            <Link className="ms-auto text-secondary text-sm" to="/semua-kos" >
                                <strong>
                                    <small className="d-md-none">Lihat Semua Kost <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></small>
                                    <span className="d-md-block d-none">Lihat Semua Kost <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></span>
                                </strong>
                            </Link>
                        </div>
                    </div>
                    {category.map((item, index) => (
                        <div key={index} className="col-md-4 kos-category mb-3">
                            <Link to={`/semua-kos?kategori=${item.link}`}>
                                <div className="position-relative">
                                    <img src={item.img} alt={item.alt} className="w-100" />
                                    <h4 className="position-absolute text-primary bottom-0 left-0 ms-3 mb-3">{item.text}</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Category;