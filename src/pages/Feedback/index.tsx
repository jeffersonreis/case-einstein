import React, { useEffect, useRef, useState } from 'react';
import back from '../../assets/back-feedback.svg';
import p1 from '../../assets/p1.webp';
import p2 from '../../assets/p2.webp';
import p3 from '../../assets/p3.webp';
import ar from '../../assets/ar.svg';
import al from '../../assets/al.svg';
import './Feedback.css';


const Feedback: React.FC = () => {
  const personsFeedback = [
    {name: "EVELIN BASQUES", image: p1, course: "CIÊNCIAS BIOLÓGICAS UFSC", feedback: '“Eu  era bem desorganizada antigamente, trabalhava, ia para o cursinho e estudava no dia seguinte, por isso  não absorvia o conteúdo. Quando entrei no Einstein, logo fui apadrinhada, mas sempre tive vergonha de pedir ajuda para as pessoas. Porém, quando  meu padrinho ajudou a fazer meu cronograma de estudos, comecei a ver os resultados. '},
    {name: "SINDY DE FREITAS", image: p2, course: "RELAÇÕES INTERNACIONAIS UFSC", feedback: '“Entrar no Einstein significou que as minhas chances de realizae o sonho de passar na faculdade aumentaram. E que há sim uma luz no fim do túnel. Hoje tenho uma relação de amizade e companheirismo com boa parte do pessoal e de respeito por toda turma.”'},
    {name: "CAROL DIAS", image: p3, course: "ECONOMIA UFSC" ,feedback: '“Uma das lições que vou levar do Einstein é sobre praticar a generosidade. Eu sou uma pessoa que se preocupa muito com os outros e ver isso do Einstein se preocupando com a gente, pra mim, é a parte mais importante.”'},
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 10000);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % personsFeedback.length);
      setIsTransitioning(false);
    }, 300); 
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + personsFeedback.length) % personsFeedback.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNextSlide = () => {
    nextSlide();
    startAutoSlide();
  };

  const handlePrevSlide = () => {
    prevSlide();
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoSlide]);

  return (
    <section className='container-feedback'>
      <div className='center-feedback'>
        <div className={`content ${isTransitioning ? 'transitioning' : ''}`}>
          <h3 className='title'>DEPOIMENTOS</h3>

          <div className='bg-img'>
            <img src={back} alt="background" className='bg-feed' draggable='false'/>
            <img src={personsFeedback[currentIndex].image} alt={personsFeedback[currentIndex].name} className='img-person' draggable='false'/>
            <div className='desc-fb'>
              <h4>{personsFeedback[currentIndex].name}</h4>
              <p>{personsFeedback[currentIndex].feedback}</p>
              <h4 className='course'>{personsFeedback[currentIndex].course}</h4>
            </div>            
          </div>

          <div className='nav left' onClick={handlePrevSlide}>
            <img src={al} alt="Left Arrow" />
          </div>
          <div className='nav right' onClick={handleNextSlide}>
            <img src={ar} alt="Right Arrow" />
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Feedback;