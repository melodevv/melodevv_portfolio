import { useState, useEffect } from 'react';

export default function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);

  // const toggleMenu = () => {
  //   setMenuOpen((prev) => !prev);
  //   document.body.classNameList.toggle('locked', !menuOpen); // Lock/unlock scroll
  // };

  // const closeMenu = () => {
  //   setMenuOpen(false);
  //   document.body.classNameList.remove('locked'); // Ensure scroll is unlocked
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     setIsNavbarVisible(
  //       prevScrollPos > currentScrollPos || currentScrollPos === 0
  //     );
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [prevScrollPos]);
  return (
    <nav id='navbar' className='w-full'>
      <div className='flex justify-between items-center px-5 py-10 md:px-24 md:py-10 2xl:px-80 2xl:py-20'>
        <div className='nav-logo'>MELODEVV</div>

        <ul className='hidden md:flex gap-4'>
          <li className='nav-item'>
            <a href='#about-me' className='nav-link'>
              About me
            </a>
          </li>
          <li className='nav-item'>
            <a href='#experience' className='nav-link'>
              Experience
            </a>
          </li>
          <li className='nav-item'>
            <a href='#projects' className='nav-link'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a href='#contact' className='nav-link'>
              Contact
            </a>
          </li>
        </ul>
        <button
          className='md:hidden outline-none mobile-menu-button'
          aria-label='Open menu'>
          <svg
            className='w-6 h-6 text-gray-500 hover:text-blue-600'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
