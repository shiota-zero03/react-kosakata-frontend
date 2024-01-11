import { useEffect, useState } from 'react';
import logo from '../logo.svg';

const LoadingPage = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots === '...' ? '.' : prevDots + '.'));
        }, 500);

        return () => clearInterval(interval);
    }, []);
    
    return(
        <div className='w-100 d-flex align-items-center justify-content-center vh-100'>
            <div className='text-dark text-center'>
                <img src={logo} className="App-logo" alt="logo" /><br />
                <span className='h1 text-success font-salsa'>Loading{dots}</span>
            </div>
        </div>
    )
}
export default LoadingPage;