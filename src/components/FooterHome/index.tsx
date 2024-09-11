import einstein from '../../assets/einstein.svg';
import rosa from '../../assets/rosa.svg';
import './FooterHome.css';

const FooterHome: React.FC = () => {
  return (    
    <section className='footer'>
      <img src={einstein} alt="Einstein" className='einstein' draggable='false'/>
      <h2 className='title'>
        Prazer, nós somos o Einstein Floripa!
      </h2>      
      <img src={rosa} alt="Rosa" className='rosa' draggable='false'/>
    </section> 
  );
};

export default FooterHome;