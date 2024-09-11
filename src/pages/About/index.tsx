import React from 'react';
import fotos from '../../assets/fotos.webp';
import './About.css';

const About: React.FC = () => {
  return (
    <section className='container-about'>
      <div className='center'>
        <div>
          <img src={fotos} alt="Fotos" className='fotos' draggable='false'/>
        </div>
        <div className='about'>
          <h4>
            A maior ONG de educação do sul do país
          </h4>
          <p>
            Somos constituídos de uma equipe repleta de universitários determinados, imersos numa experiência de constante aprendizado, ampliando suas possibilidades pessoais e profissionais.
          </p>
          <p>
            Desse modo, voltamos nossos esforços para dar oportunidades aos alunos de baixa renda da região da Grande Florianópolis, fornecendo melhores oportunidades de acesso ao ensino superior de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
