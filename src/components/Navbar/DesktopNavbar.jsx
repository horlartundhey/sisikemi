import Logo from '@/assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { BiSearch, BiChevronDown } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';
import { RxAvatar } from 'react-icons/rx';

const DesktopNavbar = () => {
  return (
    <div className='flex justify-between items-center  py-4 px-9 xl:px-[70px] bg-[#FAFAFA] border-b border-[#E0E0E0]'>
      {/* Logo */}
      <div className='w-[70px] h-[40px]'>
        <img src={Logo} alt='Logo' />
      </div>
      {/* NavLinks */}
      <nav className='text-sm'>
        <ul className='flex justify-between items-center gap-8'>
          <li>
            <NavLink>NEW IN</NavLink>
          </li>
          <li>
            <NavLink>SHOP</NavLink>
          </li>
          <li>
            <NavLink>SALE</NavLink>
          </li>
          <li>
            <NavLink>RTW</NavLink>
          </li>
          <li>
            <NavLink>COLLECTIONS</NavLink>
          </li>
          <li>
            <NavLink>BRIDAL</NavLink>
          </li>
        </ul>
      </nav>
      {/* User Links */}
      <div className='flex justify-between items-center gap-8'>
        {/* Currency Drop Down */}
        <div className='flex justify-between items-center gap-1.5'>
          <span>NGN N</span>
          <span>
            <BiChevronDown size={18} />
          </span>
        </div>
        {/* Profile */}
        <RxAvatar size={28} />
        {/* Search */}
        <BiSearch size={28} />
        {/* Cart */}
        <GrCart size={28} />
      </div>
    </div>
  );
};

export default DesktopNavbar;
