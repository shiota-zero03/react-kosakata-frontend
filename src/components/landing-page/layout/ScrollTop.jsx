import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTop = () => {
    const [isVisibleScrollTop, setIsVisibleScrollTop] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            const windowScroll = window.scrollY;
            if(windowScroll > 50) setIsVisibleScrollTop(true)
            else setIsVisibleScrollTop(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <>
            <button 
                className={`position-fixed bottom-0 right-0 btn btn-success border border-white mb-4 me-4 ${isVisibleScrollTop ? `d-block` : `d-none`}`} 
                onClick={scrollToTop} 
                style={{ zIndex: 9999 }}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </>
    )
}
export default ScrollTop;