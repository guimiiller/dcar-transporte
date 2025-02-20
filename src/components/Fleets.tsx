"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from '../styles/Fleets.module.css';

// Definindo o tipo para o conteúdo do modal
interface ModalContent {
    title: string;
    description: string;
}

export function Fleets() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ModalContent | null>(null);

    const openModal = (content: ModalContent) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <section className={styles.fleetsSection} id='fleets'>
            <h2 className={styles.fleetsTitle}>Frotas e Estrutura</h2>
            <div className={styles.fleetsContainer}>
                <div 
                    className={styles.fleetCard} 
                    style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url('/cardfleets1.jpg')", backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} 
                    onClick={() => openModal({
                        title: 'Veículos Disponíveis', 
                        description: 'Nossa frota conta com veículos modernos e preparados para diferentes demandas de transporte. Oferecemos Fiorino, Van, HR e VUC para garantir eficiência e segurança em cada entrega.'
                    })}
                >
                    <span className={styles.fleetNumber}>1</span>
                    <div className={styles.fleetText}>
                        <h3>VEÍCULOS DISPONÍVEIS</h3>
                        <p>Contamos com frotas, Vans, HR e VUC para atender diferentes necessidades de transporte.</p>
                    </div>
                    <div className={styles.tooltip}>Clique para ver mais</div>
                </div>

                <div 
                    className={styles.fleetCard} 
                    style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url('/cardfleets2.jpg')", backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} 
                    onClick={() => openModal({
                        title: 'Manutenção e Segurança da Frota', 
                        description: 'A segurança dos nossos veículos é uma prioridade! Realizamos manutenções preventivas e corretivas regularmente para garantir que toda a frota esteja sempre em perfeitas condições.'
                    })}
                >
                    <span className={styles.fleetNumber}>2</span>
                    <div className={styles.fleetText}>
                        <h3>MANUTENÇÃO E SEGURANÇA DA FROTA</h3>
                        <p>Garantimos manutenção regular e total segurança em nossa frota de veículos.</p>
                    </div>
                    <div className={styles.tooltip}>Clique para ver mais</div>
                </div>

                <div 
                    className={styles.fleetCard} 
                    style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url('/cardfleets3.jpg')", backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} 
                    onClick={() => openModal({
                        title: 'Equipe Qualificada', 
                        description: 'Nossa equipe é formada por motoristas experientes e treinados para oferecer um transporte seguro, ágil e eficiente. Além disso, contamos com profissionais especializados no planejamento logístico.'
                    })}
                >
                    <span className={styles.fleetNumber}>3</span>
                    <div className={styles.fleetText}>
                        <h3>EQUIPE QUALIFICADA</h3>
                        <p>Equipe treinada e experiente para oferecer um serviço de transporte seguro e eficiente.</p>
                    </div>
                    <div className={styles.tooltip}>Clique para ver mais</div>
                </div>
            </div>

            {isModalOpen && modalContent && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={closeModal}>X</button>
                        <h3>{modalContent.title}</h3>
                        <p>{modalContent.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
