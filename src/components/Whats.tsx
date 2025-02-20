import styles from '../styles/Whats.module.css'
import Image from "next/image";

export function Whats(){
    return(
        <div className={styles.whats}>
            <a href="https://api.whatsapp.com/send?phone=+5511977800179&text=Olá,%20DCAR!%20" target="_blank">
                <div style={{ position: 'relative' }}>
                    <Image src={'/whats.svg'} alt="Fale Conosco pelo Whatsapp" width={65} height={65} title="Fale Conosco pelo Whatsapp" />
                    <span className={styles.notification}>1</span>
                </div>
            </a>
        </div>
    )
}
