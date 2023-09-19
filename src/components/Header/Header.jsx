import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
        <div className=" flexCenter paddings innerWidth h-container">
            <img src="./images (1).png" alt="logo" width={100 } />
            <div className="flexCenter h-menu">
                <a href="">Building</a>
                <a href="">Flat</a>
                <a href="">Room</a>
                <a href="">Hostel</a>
                <a href="">Apartment</a>
                <a href="">Contact Us</a>
                <a href="">About Us</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button>
                
            </div>
        </div>
    </section>
  )
}

export default Header
