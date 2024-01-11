import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderComponent = () => {

    const [ menu, setMenu ] = useState([
        {link: '/', text: 'Beranda', class: 'text-primary'},
        {link: '/tutorial', text: 'Tutorial', class: 'text-primary'},
        {link: '/visi-misi', text: 'Visi Misi', class: 'text-primary'},
        {link: '/masuk', text: 'Masuk', class: 'btn btn-primary text-success fw-bold'},
    ])

    return (
        <>
            <nav className='navbar navbar-sticky navbar-expand-lg bg-transparent z-3'>
                <div className="container d-flex align-items-center justify-content-center">
                    <div className='col-md-4'>
                        <img src={'/assets/images/logo.png'} alt="" />
                        <img src={'/assets/images/kosakata.png'} alt="" className='d-md-inline d-none' />
                    </div>
                    <div className='col-md-8 me-auto'>
                        <div className='d-flex align-items-center'>
                            <div className='me-4 col-md-4'>
                                <form className='w-100'>
                                    <input 
                                        type='text' 
                                        className='bg-transparent border-0 border-2 border-bottom border-dark py-2 px-3 text-dark w-100' 
                                        placeholder='Ayo cari kostan kamu disini'
                                        style={{outline: 'none'}} />
                                </form>
                            </div>
                            <div className='col-md-8 d-flex align-items-center justify-content-center'>
                                {menu.map((item, index) => (
                                    <div key={index} className='ms-5'>
                                        <Link to={item.link} className={`${item.class} text-decoration-none`}>
                                            {item.text}
                                        </Link>
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