import React from 'react';
// import fotos from '../../assets/fotos.webp';
import './ActionData.css';

const ActionData: React.FC = () => {
  return (
    <section className='actions'>
      <div className='container-actions'>
        <div className='title'>
          <div className='t2'>
            NOSSO IMPACTO
          </div>
          <div className='t1'>
            2023
          </div>
        </div>
        <div className='text-lines'>
          <div className='top-line'>
            <div className='text-number'>
              <div className='number'>
                1260
              </div>
              <div className='desc'>horas aula</div>
            </div>
            <div className='text-number'>
              <div className='number'>
                50
              </div>
              <div className='desc'>horas de treinamento</div>
            </div>
            <div className='text-number'>
              <div className='number'>
                45k
              </div>
              <div className='desc'>horas trabalhadas</div>
            </div>
          </div>
          <div className='bottom-line'>
            <div className='text-number'>
              <div className='number'>
                50
              </div>
              <div className='desc'>alunos aprovados</div>
            </div>
            <div className='text-number'>
              <div className='number'>
                200
              </div>
              <div className='desc'>vidas transformadas</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-supporter'>
        Nos <strong>apoie</strong> para crescermos juntos!
      </div>

    </section>
  );
};

export default ActionData;
