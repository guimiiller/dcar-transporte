"use client";
import styles from '../styles/About.module.css';
import Image from 'next/image';
import { Button } from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function About() {
    return (
        <section className={styles.container} id='about'>
            <div className={styles.contentAbout}>
                <div className={styles.squareAbout}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className={styles.carousel}
                    >
                        <SwiperSlide>
                            <Image src="/aboutImage.jpeg" alt="Imagem 1" width={450} height={415} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/aboutImage2.jpeg" alt="Imagem 2" width={450} height={415} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/aboutImage3.jpeg" alt="Imagem 3" width={450} height={415} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.textAbout}>
                    <div className={styles.flexAbout}>
                        <div className={styles.line}></div>
                        <div><h2>SOBRE A TRANSPORTE DCAR</h2></div>
                    </div>
                    <p>A <span style={{color:'#016BB2'}}>DCAR</span> Transporte é especializada em transporte rodoviário de cargas, atendendo fretes locais e de longa distância em todo o Brasil. Nossa prioridade é oferecer um serviço ágil, seguro e eficiente.</p>
                    <p style={{marginBottom:'48px'}}>Com frota moderna e equipe especializada, oferecemos entregas pontuais, rastreamento em tempo real e atendimento personalizado para mais segurança e controle.</p>

                    <Button isMargin={true} />
                </div>
            </div>
        </section>
    );
}
