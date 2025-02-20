import React from "react";
import Image from "next/image";
import styles from '../styles/Faq.module.css';
import { Button } from "./Button";

export function Faq() {
    return (
        <section className={styles.faqSection} data-section="blue">
            <div className={styles.faqTitle}>
                <h2>Perguntas Frequentes</h2>
            </div>

            <div className={styles.faqContainer}>
                <div className={styles.faqItem}>
                    <Image src={'/question.svg'} alt="Question Icon" width={60} height={60} className={styles.faqIcon} />
                    <p className={styles.faqText}>
                        QUAIS VEÍCULOS ESTÃO DISPONÍVEIS PARA TRANSPORTE?
                    </p>
                </div>
                <div className={styles.faqItem}>
                    <p className={styles.faqAnswer}>
                        Contamos com uma frota diversificada, incluindo Veículo Leve, Fiorino, Van, HR e VUC, para oferecer a melhor solução para o seu transporte. Escolha o veículo ideal e garanta um frete rápido, seguro e eficiente!
                    </p>
                    <Image src={'/user.svg'} alt="User Icon" width={60} height={60} className={styles.faqIconBlack} />
                </div>

                <div className={styles.faqItem}>
                    <Image src={'/question.svg'} alt="Question Icon" width={60} height={60} className={styles.faqIcon} />
                    <p className={styles.faqText}>
                        COMO FUNCIONA O TEMPO DE ENTREGA?
                    </p>
                </div>
                <div className={styles.faqItem}>
                    <p className={styles.faqAnswer}>
                        Precisa de entrega rápida? Nossa modalidade dedicada garante transporte imediato! Já as cargas fracionadas oferecem economia, compartilhando espaço com outras remessas. Negociamos o prazo ideal para atender suas necessidades com o melhor custo-benefício.
                    </p>
                    <Image src={'/user.svg'} alt="User Icon" width={60} height={60} className={styles.faqIconBlack} />
                </div>
            </div>

            <Button isMargin={false} color="black"/>
        </section>
    );
}
