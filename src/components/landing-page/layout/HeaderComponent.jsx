import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {

    const [ menu, setMenu ] = useState([
        {link: 'visi-misi', text: 'Visi Misi', class: 'text-primary'},
        {link: 'tutorial', text: 'Tutorial', class: 'text-primary'},
        {link: 'tentang', text: 'Tentang', class: 'text-primary'},
        {link: 'masuk', text: 'Masuk', class: 'btn btn-primary text-success fw-bold'},
    ])

    const [ openResponsive, setOpenResponsive ] = useState(false)

    useEffect(() => {
        setMenu([
            {link: 'visi-misi', text: 'Visi Misi', class: 'text-primary'},
            {link: 'tutorial', text: 'Tutorial', class: 'text-primary'},
            {link: 'tentang', text: 'Tentang', class: 'text-primary'},
            {link: 'masuk', text: 'Masuk', class: 'btn btn-primary text-success fw-bold'},
        ])
    }, [])

    
    const scrollToElement = (id) => {
        if(id !== 'masuk'){
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else document.location.href = '/masuk'
    };
    return (
        <>
            <nav className='navbar navbar-menu navbar-expand-lg position-absolute w-100' style={{ zIndex: 9 }}>
                <div className="container d-flex align-items-center justify-content-center">
                    <div className='col-lg-4 col-6 text-start'>
                        <img src={'/assets/images/logo.png'} alt="" />
                        <img src={'/assets/images/kosakata.png'} alt="" className='d-md-inline d-none' />
                    </div>
                    <div className="col-6 text-end d-lg-none">
                        <button className='btn btn-primary border border-dark' onClick={() => setOpenResponsive(!openResponsive)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className={`col-lg-8 me-auto col-12 cover-dropdown d-lg-block ${openResponsive ? `d-block` : `d-none`}`}>
                        <div className='d-lg-flex align-items-center'>
                            <div className='me-lg-4 col-lg-5 px-lg-0 pt-lg-0 px-3 pt-3'>
                                <SearchForm />
                            </div>
                            <div className='col-lg-7 d-lg-flex align-items-center justify-content-end border border-0 pb-lg-0 px-lg-0 pb-4 px-4'>
                                {menu.map((item, index) => (
                                    <div key={index} className='ms-lg-4 ps-lg-2 menu-dropdown py-lg-0 py-2'>
                                        <div  
                                            className={`${item.class} text-decoration-none w-100`}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                scrollToElement(item.link)
                                                setOpenResponsive(false)
                                            }}
                                        >
                                            {item.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default HeaderComponent;