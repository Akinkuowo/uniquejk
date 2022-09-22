import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





function Header() {
  return (
    <div className='header'>
      <img  
        className='logo'
        src='logo.png'
        alt='UniqueJK Logo'

      />  

      <div className='header_search'>
        <input
          className='header_searchInput'
          type='text'
          placeholder='Search for Products' 
        />
        <SearchIcon 
          className="search_icon"
        />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_lineOne'>
              Hello Guest
          </span>
          <span className='header_lineTwo'>
              Sign In
          </span>
        </div>

        <div className='header_option'>
          <span className='header_lineOne'>
              Returns
          </span>
          <span className='header_lineTwo'>
              & Orders
          </span>
        </div>

        <div className='header_option'>
          <span className='header_lineOne'>
              Contact
          </span>
          <span className='header_lineTwo'>
              Support
          </span>
        </div>

        <div className='header_basket'>
          <ShoppingCartIcon />
          <span className='header_lineTwo cart_number'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header