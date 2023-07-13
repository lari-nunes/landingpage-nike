import NikeLogo from '../assets/logo.png'
import MagnifyingGlass from '../assets/magnifying glass.png'
import Cart from '../assets/cart.png'
import Bars from '../assets/bars.png'

const Navbar = ({ navbarStyle, handleSidebar }) => {
  const navbarMenu = [
    {
      name: 'Men',
      link: '#',
    },
    {
      name: 'Women',
      link: '#',
    },
    {
      name: 'Kids',
      link: '#',
    },
    {
      name: 'Customize',
      link: '#',
    },
    {
      name: 'Sale',
      link: '#',
    },
  ]

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <a href='/'>
          <img src={NikeLogo} alt='Nike Logo' />
        </a>
      </div>
      <div className='navbar__menu'>
        {navbarMenu.map((menu, index) => (
          <a
            href={menu.link}
            key={index}
            className={`${index == 0 ? 'active' : ''}`}
          >
            {menu.name}
          </a>
        ))}
      </div>
      <div className={`navbar__search ${navbarStyle || 'navbar-one'}`}>
        <img src={MagnifyingGlass} alt='Magnifying Glass' />
        <input type='text' />
      </div>
      <div className={`navbar__cart ${navbarStyle || 'navbar-one'}`}>
        <img src={Cart} alt='Cart' />
      </div>
      <div className='navbar__mobile' onClick={handleSidebar}>
        <img src={Bars} alt='Bars' />
      </div>
    </div>
  )
}

export default Navbar