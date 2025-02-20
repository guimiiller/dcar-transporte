'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './Button';
import styles from '../styles/Clients.module.css';

interface Clients {
  name: string;
  age: number;
  message: string;
  image: string;
}

const clients: Clients[] = [
  {
    name: 'Fernanda',
    age: 28,
    message:
      'Serviço de transporte de primeira! A DCAR Transporte oferece suporte ágil e seguro, garantindo que minha carga chegasse intacta e dentro do prazo. Recomendo para qualquer empresa que valoriza qualidade e confiança.',
    image: '/testimony1.jpg',
  },
  {
    name: 'Roberto',
    age: 35,
    message:
      'Já utilizei vários serviços de transporte, mas nenhum com a eficiência da DCAR Transporte. Equipe qualificada, veículos bem cuidados e um compromisso real com o cliente. Se você busca qualidade, essa é a escolha certa!',
    image: '/testimony2.jpg',
  },
  {
    name: 'Carlos',
    age: 30,
    message:
      'A DCAR Transporte me impressionou pela segurança e pontualidade. Precisei enviar uma carga importante e eles garantiram a entrega no prazo, sem complicações. Atendimento excelente e total profissionalismo!',
    image: '/testimony3.jpg',
  },
];

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.clientsSection} id='testimonials'>
      <div>
        <h2 className={styles.title}>O QUE NOSSOS CLIENTES DIZEM</h2>
      </div>

      <div className={styles.clientsContainer}>
        <div className={styles.clientsWrapper}>
          {clients.map((client, index) => (
            <div
              key={index}
              className={`${styles.clientCard} ${
                index === currentIndex ? styles.active : styles.inactive
              }`}
            >
              <div className={styles.clientInfo}>
                <Image
                  src={client.image}
                  alt={client.name}
                  className={styles.clientImage}
                  width={75}
                  height={75}
                />
                <div className={styles.clientText}>
                  <h3>{client.name}</h3>
                  <p>{client.age} anos</p>
                </div>
              </div>

              <p className={styles.clientMessage}>{client.message}</p>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
            <button onClick={handlePrevious} className={styles.arrowButton}>
              <Image src={'/arrowtop.svg'} alt="Anterior" width={30} height={30} />
            </button>
            <div className={styles.divider}></div>
            <button onClick={handleNext} className={styles.arrowButton}>
              <Image src={'/arrowbottom.svg'} alt="Próximo" width={30} height={30} />
            </button>
        </div>
      </div>

      <Button isMargin={false} />
    </section>
  );
}
