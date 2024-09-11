import logo from '../../assets/logo.webp';
import './Header.css';

const Header: React.FC = () => {
  return (    
    <header>
      <div className='left-buttons'>
        <button className='mrb'>
          aluno
        </button>
        <button className='mrb'>
          sobre nós
        </button>
        <button className='mrb'>
          nossa equipe
        </button>
      </div>
      <img src={logo} alt="Logo" className='logo' draggable='false'/>
      <div className='right-buttons'>
        <button className='mrb'>
          resultados
        </button>
        <button className='mrb'>
          contato
        </button>
        <button className='act'>
          apoie
        </button>
      </div>
    </header>    
  );
};

export default Header;