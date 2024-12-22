import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";


const Search = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', query);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 py-2">
            <form
                onSubmit={handleSearch}
                className="flex items-center bg-white rounded-full shadow-md"
            >
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    className="w-[1263px] h-[71px] px-20 py-[19px] bg-transparent border-none rounded-[25px] focus:outline-none"
                    placeholder="Search..."
                />
                <button
                    type="submit"
                    className="pt-[21px] pb-[26px] pr-[40px] flex items-center"
                >
                    <IoSearchSharp className='w-[24px] h-[24px] text-2xl' />

                </button>
            </form>
        </div>
    );
};

export default Search;