import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.classList.toggle('locked', !menuOpen); // Lock/unlock scroll
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('locked'); // Ensure scroll is unlocked
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsNavbarVisible(
        prevScrollPos > currentScrollPos || currentScrollPos === 0
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <nav
      id='navbar'
      className={`w-full ${isNavbarVisible ? '' : '-translate-y-full'}`}>
      <div className='flex justify-between items-center px-5 py-10 md:px-24 md:py-10 2xl:px-80 2xl:py-20'>
        <div className='nav-logo gradient-text'>MELODEVV</div>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          className='md:hidden outline-none mobile-menu-button'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              className='w-6 h-6 text-gray-500 hover:text-blue-600'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <ul className='flex flex-col items-center gap-6 pt-20'>
          <li>
            <a href='#about-me' className='nav-link' onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href='#experience' className='nav-link' onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href='#projects' className='nav-link' onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='nav-link' onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
