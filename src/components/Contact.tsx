import Image from "next/image";
import styles from "../styles/Contact.module.css";

export function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactWrapper}>
        <div className={styles.contactBox}>
          <p className={styles.contactItem}>
            <Image src={'/phone.svg'} alt="Phone Icon" width={24} height={24} className={styles.icon} />
            Telefone
          </p>
          <p className={styles.contactText}>(11) 97780-0179</p>

          <p className={styles.contactItem}>
            <Image src={'/local.svg'} alt="Local Icon" width={24} height={24} className={styles.icon} />
            Endereço
          </p>
          <p className={styles.contactText}>Rua Califórnia 477, Pq. Flórida - SP</p>

          <p className={styles.contactItem}>
            <Image src={'/clock.svg'} alt="Clock Icon" width={24} height={24} className={styles.icon} />
            Horário
          </p>
          <p className={styles.contactText}>Seg a Sex: 08h - 18h</p>
        </div>

        {/* Mapa */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197353585598!2d-46.659069224842405!3d-23.561354478799878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1738677805157!5m2!1spt-BR!2sbr"
          width="600" 
          height="450"  
          loading="lazy" 
          className={styles.map}
        ></iframe>
      </div>
    </section>
  );
}
