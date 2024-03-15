import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between px-10 h-20 bg-slate-400 items-center'>
      <h1>EZone Trucking Assit</h1>
      <nav className=''>
        <ul className='flex gap-10'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pricing">Plans & Pricing</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header