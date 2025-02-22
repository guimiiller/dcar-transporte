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
                    <div className={styles.bannerIcons}>
                        <Link href={'https://www.instagram.com/dcar_transporte/'} target="blank"><Image src={'/instagramblue.svg'} alt="Instagram Icon" width={30} height={30} className={styles.icon}/></Link>
                        <Link href={'https://www.facebook.com/profile.php?id=61572571861626'} target="blank" ><Image src={'/facebookblue.svg'} alt="Facebook Icon" width={30} height={30} className={styles.icon}/></Link>
                    </div>
                </div>
                <div className={styles.bannerImage}>
                    <Image src={'/imagebanner.svg'} alt='' width={700} height={450}/>
                </div>
            </div>
        </section>
    )
}