import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>

            <Link href="/privacy">
                <h2 className={styles.privacyPolicy}>Políticas de Privacidade</h2>
            </Link>

            <div className={styles.socialLinks}>
                <Link href="https://www.instagram.com/dcar_transporte/" target="_blank" className={styles.socialIcon}>
                    <Image src={'/instagramblue.svg'} alt="Instagram" width={27} height={27}/>
                </Link>
                <Link href="https://facebook.com" target="_blank" className={styles.socialIcon}>
                    <Image src={'/facebookblue.svg'} alt="Facebook" width={27} height={27}/>
                </Link>
            </div>
            
            <div>
                <p className={styles.copyright}>© 2025 by Crow. Todos os direitos reservados</p>
            </div>

        </footer>
    );
}
