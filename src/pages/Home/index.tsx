import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import FooterHome from '../../components/FooterHome';
import jovens from '../../assets/jovens.webp';

const Home: React.FC = () => {
  return (
    <section className='container-home'>
      < Header />
      <div className='content-home'>
        <div className='left'>
          <div className='act-home'>
            Seja um aluno
          </div>
          <div className='act-home'>
            Seja um voluntário
          </div>          
        </div>
        <div className='container-img'>
          <img src={jovens} alt="Alunos" className='alunos' draggable='false'/>
        </div>
        <div className='right'>
          <div className='act-home'>
            Seja um apoiador
          </div>
        </div>        
      </div>
      < FooterHome />
    </section>
  );
};

export default Home;
