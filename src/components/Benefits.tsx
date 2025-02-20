import Image from 'next/image';
import styles from '../styles/Benefits.module.css';

export function Benefits() {
    return (
        <section className={styles.benefitsSection}>
            <h2 className={styles.title}>POR QUE NOS ESCOLHER?</h2>
            <div className={styles.benefitsGrid}>

                <div className={styles.benefitItem}>
                    <Image className={styles.icon} src={'/box.svg'} alt='Icon' width={40} height={40}/>
                    <div>
                        <h3 className={styles.titleBenefit}>ENTREGA RÁPIDA E PONTUAL</h3>
                        <p className={styles.textBenefit}>Cumprimos prazos rigorosos para que sua carga chegue sem atrasos.</p>
                    </div>
                </div>

                <div className={styles.benefitItem}>
                    <Image className={styles.icon} src={'/team.svg'} alt='Icon' width={40} height={40}/>
                    <div>
                        <h3 className={styles.titleBenefit}>EQUIPE ESPECIALIZADA</h3>
                        <p className={styles.textBenefit}>Profissionais qualificados para um transporte seguro e eficiente.</p>
                    </div>
                </div>

                <div className={styles.benefitItem}>
                    <Image className={styles.icon} src={'/fleets.svg'} alt='Icon' width={40} height={40}/>
                    <div>
                        <h3 className={styles.titleBenefit}>FROTA MODERNA E EQUIPADA</h3>
                        <p className={styles.textBenefit}>Veículos com tecnologia avançada para mais segurança e controle.</p>
                    </div>
                </div>

                <div className={styles.benefitItem}>
                    <Image className={styles.icon} src={'/call.svg'} alt='Icon' width={40} height={40}/>
                    <div>
                        <h3 className={styles.titleBenefit}>ATENDIMENTO PERSONALIZADO</h3>
                        <p className={styles.textBenefit}>Soluções sob medida para suas necessidades logísticas.</p>
                    </div>
                </div>

                <div className={styles.benefitItem}>
                    <Image className={styles.icon} src={'/money.svg'} alt='Icon' width={40} height={40}/>
                    <div>
                        <h3 className={styles.titleBenefit}>CUSTO BENEFÍCIO</h3>
                        <p  className={styles.textBenefit}>Serviço de qualidade com tarifas justas e competitivas.</p>
                    </div>
                </div>

                <div className={styles.benefitItem}>
                    <Image className={styles.icon} src={'/check.svg'} alt='Icon' width={40} height={40}/>
                    <div>
                        <h3 className={styles.titleBenefit}>PRAZOS E QUALIDADE</h3>
                        <p className={styles.textBenefit}>Entrega garantida no prazo, preservando sua carga.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
