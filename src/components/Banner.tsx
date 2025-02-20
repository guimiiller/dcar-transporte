import styles from '../styles/Banner.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';

export function Banner(){
    return(
        <section className={styles.container}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerText}>
                    <div className={styles.lineBanner}></div>
                    <h1>TRANSPORTE SEGURO E RÁPIDO PARA SUA CARGA!</h1>
                    <p>Transporte de carga seguro, rápido e confiável para o seu negócio, com rastreamento e suporte completo.</p>
                    <Button />
                </div>
                <div className={styles.bannerImage}>
                    <Image src={'/imagebanner.svg'} alt='' width={700} height={450}/>
                </div>
            </div>
        </section>
    )
}