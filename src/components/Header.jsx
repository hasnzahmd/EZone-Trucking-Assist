import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640)
        setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (

    <header className={`${isMenuOpen ? 'h-64 pt-4 flex-wrap' : ''} flex justify-between px-8 md:px-20 lg:px-24 h-24 sm:h-24 items-center fixed top-0 w-full z-50 bg-white`}>

      <NavLink to={`/`}>
        <h1 className='text-2xl lg:text-3xl font-bold cursor-pointer font-serif'>
          <span className= 'text-blue-900'>E</span><span className='text-orange-500'>Z</span><span className='text-blue-900'>one</span> <span className='text-orange-500'>trucking</span><span className='text-blue-900'>assist</span>
        </h1>
      </NavLink>

      <div className='sm:hidden'>
        <GiHamburgerMenu size='28' color='#1e3a8a' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
      </div>

      <nav className={`${isMenuOpen ? 'w-full flex justify-center' : 'hidden'} sm:block`}>

        <ul className={`${isMenuOpen ? 'flex-col items-center' : ''} flex gap-4 sm:gap-5 md:gap-7 lg:gap-10`}>
          <li>
            <NavLink to="/" 
            className={({ isActive }) => `hover:border-b-2 ${isActive ? 'text-orange-500 font-bold hover:border-orange-500' : 'text-blue-900 border-blue-900'}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" 
              className={({ isActive }) => `hover:border-b-2 ${isActive ? 'text-orange-500 font-bold hover:border-orange-500' : 'text-blue-900 border-blue-900'}`}>
                Plans & Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" 
              className={({ isActive }) => `hover:border-b-2 ${isActive ? 'text-orange-500 font-bold hover:border-orange-500' : 'text-blue-900 border-blue-900'}`}>
                FAQs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" 
              className={({ isActive }) => `hover:border-b-2 ${isActive ? 'text-orange-500 font-bold hover:border-orange-500' : 'text-blue-900 border-blue-900'}`}>
                Contact
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header