import { Metadata } from "next";
import styles from '../../styles/Privacy.module.css'
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidade - DCAR Transporte",
  description:
    "Leia a Política de Privacidade da DCAR Transporte, onde explicamos como coletamos, usamos e protegemos suas informações pessoais. Nossa prioridade é a segurança e transparência.",
  keywords: "Política de Privacidade, DCAR Transporte, privacidade, segurança de dados, coleta de informações, transporte rodoviário",
  openGraph: {
    title: "Política de Privacidade - DCAR Transporte",
    description:
      "A DCAR Transporte respeita a sua privacidade e proteção dos seus dados. Leia nossa política para entender como tratamos suas informações.",
    url: "https://www.dcartransporte.com.br/politica-de-privacidade",
    siteName: "DCAR Transporte",
    type: "article",
  },
  twitter: {
    card: "summary",
    site: "@dcartransporte", // Se você tem um Twitter associado
    title: "Política de Privacidade - DCAR Transporte",
    description:
      "Entenda como a DCAR Transporte coleta e usa seus dados com segurança e transparência em nossa Política de Privacidade.",
  },
  robots: "index, follow",
};


export default function PrivacyPolicy() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.lastUpdate}>Última atualização: 16/02/2025</p>

        <h2 className={styles.subtitle}>1. Introdução</h2>
        <p className={styles.text}>
            Bem-vindo à DCAR Transportes. Sua privacidade é importante para nós. Esta
            política explica como coletamos, usamos e protegemos suas informações.
        </p>

        <h2 className={styles.subtitle}>2. Coleta de Informações</h2>
        <p className={styles.text}>
            Podemos coletar informações como nome, e-mail, telefone e dados de
            navegação para melhorar nossos serviços.
        </p>

        <h2 className={styles.subtitle}>3. Uso das Informações</h2>
        <p className={styles.text}>
            Utilizamos seus dados para comunicação, suporte e melhorias nos nossos
            serviços.
        </p>

        <h2 className={styles.subtitle}>4. Segurança</h2>
        <p className={styles.text}>
            Implementamos medidas para proteger seus dados contra acessos não autorizados.
        </p>

        <h2 className={styles.subtitle}>5. Contato</h2>
        <p className={styles.text}>
            Para dúvidas, entre em contato pelo e-mail: <strong>transportedcar@gmail.com</strong>
        </p>

        <Link
          href={'/'}
        >
          <Image src={'/arrowback.svg'} alt="Arrow Icon" width={40} height={40} 
          className={styles.arrowBack}/>
        </Link>
      </div>
    </section>
  );
}
