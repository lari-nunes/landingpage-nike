import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'

import ShoesOne from '../assets/shoes1.png'

const Hero = ({ handleColor, buttonStyle, shoesStyle, selectedColorStyle }) => {
  const socmeds = [
    {
      name: 'Facebook',
      logo: Facebook,
      link: '#',
    },
    {
      name: 'Instagram',
      logo: Instagram,
      link: '#',
    },
    {
      name: 'Twitter',
      logo: Twitter,
      link: '#',
    },
  ]

  const colors = ['color-one', 'color-two', 'color-three']

  return (
    <div className='hero'>
      <div className='hero__content'>
        <div className='title'>
          <span>Just do it</span>
        </div>
        <div className='description'>
          <span>
            Discover the excellence that only Nike offers,<br></br>
            Products that elevate your performance beyond expectations. <br></br>
            Cutting-edge technology, innovative design, and unrivaled quality,
            Each piece is made for you, the relentless athlete.
            At Nike, your potential is propelled towards greatness.
          </span>
        </div>
        <button className={`learn-more ${buttonStyle || 'button-one'}`}>
          Learn More
        </button>
        <div className='social-media'>
          {socmeds.map((list, index) => (
            <a href={list.link} key={index}>
              <img src={list.logo} alt={list.name} />
            </a>
          ))}
        </div>
      </div>
      <div className='hero__image'>
        <img src={shoesStyle || ShoesOne} alt='Nike Shoes' />
      </div>
      <div className='hero__color'>
        {colors.map((color, index) => (
          <div
            className={`color-preset ${
              index == (selectedColorStyle || 0) ? 'color-active' : ''
            }`}
            key={index}
            onClick={() => handleColor(index)}
          >
            <div className={color} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero