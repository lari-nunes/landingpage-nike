import BackgroundOne from '../assets/background1.png'

const Background = ({ backgroundStyle }) => {
  return (
    <div className='background'>
      <img src={backgroundStyle || BackgroundOne} alt='Background' />
    </div>
  )
}

export default Background