import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SearchForm = () => {

    const [ search, setSearch ] = useState('');

    const submitSearch = ( e ) => {
        e.preventDefault();
        alert(search)
    }

    return(
        <form className='w-100 position-relative' onSubmit={submitSearch}>
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type='text' 
                className='bg-transparent py-2 ps-md-2 pe-md-4 ps-3 pe-5 w-100' 
                placeholder='Ayo cari kostan kamu disini'
                style={{outline: 'none'}}
                required />
            <button className='position-absolute right-0 middle bg-transparent border-0'>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    )
}
export default SearchForm;;