import styles from '../styles/Button.module.css';
import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
  isMargin?: boolean;
  color?: 'blue' | 'black';
};

export function Button({ isMargin = false, color = 'blue' }: ButtonProps) {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=+5511977800179&text=Olá,%20DCAR!%20"
      target="_blank"
      className={`${styles.button} ${isMargin ? styles.withMargin : ''} ${color === 'blue' ? styles.blue : styles.black}`}
    >
      SOLICITE UM ORÇAMENTO 
      <Image src="/whats.svg" alt="Icon Whats" width={30} height={30} className={styles.imageButton} />
    </Link>
  );
}
