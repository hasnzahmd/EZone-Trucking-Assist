import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import CustomNavLink from './CustomNavLink';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);


    return (
        <header className={`${isMenuOpen ? 'h-80 pt-4 flex-wrap' : ''} flex justify-between px-8 md:px-20 lg:px-24 h-24 sm:h-24 items-center fixed top-0 w-full z-50 bg-white`}>

            <CustomNavLink to={`/`} logo={true}>
                <h1 className='text-2xl lg:text-3xl font-bold cursor-pointer font-serif'>
                    <span className='text-blue-900'>E</span><span className='text-orange-500'>Z</span><span className='text-blue-900'>one</span> <span className='text-orange-500'>trucking</span><span className='text-blue-900'>assist</span>
                </h1>
            </CustomNavLink>

            <button className={`sm:hidden p-1 rounded duration-200 ease-in-out active:scale-75 ${isMenuOpen && 'bg-gray-300'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <GiHamburgerMenu size='28' color='#1e3a8a' />
            </button>

            <nav className={`${isMenuOpen ? 'w-full flex justify-center' : 'hidden'} sm:block`}>
                <ul className={`${isMenuOpen ? 'flex-col items-center' : ''} flex gap-4 items-center sm:gap-5 md:gap-7 lg:gap-10`}>
                    {['/', '/pricing', '/faq', '/contact'].map((path, index) => (
                        <li key={index}>
                            <CustomNavLink to={path} setIsMenuOpen={setIsMenuOpen}>
                                {['Home', 'Plans & Pricing', 'FAQs', 'Contact'][index]}
                            </CustomNavLink>
                        </li>
                    ))}
                    <Button text='start today' onClick={() => setIsMenuOpen(false)} />
                </ul>
            </nav>
        </header>
    );
};

export default Header;
