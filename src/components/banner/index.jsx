import  Logo from '../../assets/img/logoSemFundo.png'
import './style.css';

const Banner = () => {
  return (
    <div className='banner-container'>
      <img className='banner-logo' src={Logo} alt="Logo" />
      <div className='banner-linha'></div>
    </div>
  );
};

export default Banner;
