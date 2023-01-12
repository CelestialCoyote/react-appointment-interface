import { useState } from 'react';
import { BiSearch, BiCaretDown } from 'react-icons/bi';
import SearchDropdown from '../SearchDropdown/SearchDropdown';
import './Search.css';


const Search = ({ query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
    let [toggleSort, setToggleSort] = useState(false);
    return (
        <div className='search'>
            <div className=''>
                <BiSearch />
                <label htmlFor='query' className='' />
            </div>
            <input
                type='text'
                className=''
                name='query'
                id='query'
                placeholder='Search'
                value={query}
                onChange={(event) => { onQueryChange(event.target.value) }}
            />
            <div className=''>
                <div>
                    <button
                        type="button"
                        onClick={() => { setToggleSort(!toggleSort) }}
                        className=''
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort By <BiCaretDown className='' />
                    </button>
                    <SearchDropdown
                        toggle={toggleSort}
                        sortBy={sortBy}
                        onSortByChange={mySort => onSortByChange(mySort)}
                        orderBy={orderBy}
                        onOrderByChange={myOrder => onOrderByChange(myOrder)}
                    />
                </div>
            </div>
        </div>
    );
};


export default Search;
