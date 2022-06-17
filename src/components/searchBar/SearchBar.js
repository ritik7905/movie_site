import React from 'react'
// styles
import "./style.scss"

const SearchBar = (props) => {
    return (
        <>
            <input className='search-input' onKeyUp={props.searchData} value={props.inputValue} onChange={props.handleChange} type="text" placeholder='Search for movies' />
        </>
    )
}

export default SearchBar