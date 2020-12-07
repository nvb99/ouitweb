import React from 'react'

const SearchBox = () => {
    return (
        <form action='?' className="form-inline text-right ml-2">
            <button className="btn-success" type="submit"><i className="fa fa-search"></i></button>
            <input className="searchBoxTop" type="text" placeholder="Nhập từ khóa ..."/>
        </form>
    )
}

export default SearchBox