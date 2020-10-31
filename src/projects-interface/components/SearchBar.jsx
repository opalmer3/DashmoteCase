import './SearchBar.css'
import React from 'react';

// Import icons
import Search from '@material-ui/icons/Search';

function SearchBar({q, handleChange}){
    
    return      <div className="search-bar-container">
                    <div className="search-bar">
                    {/*  For mobile */}
                    <input value={q} onChange={handleChange} className="search-input mobile" type="text" placeholder="Search"></input>
                    {/* For ipad and up */}
                    <input value={q} onChange={handleChange} className="search-input desktop" type="text" placeholder="Search for a keyword"></input>

                    <Search className="dark-grey" fontSize="small" />
                    </div>
                </div>
}

export default SearchBar;