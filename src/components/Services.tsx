import styles from '../styles/Services.module.css';

export function Services(){
    return(
        <section className={styles.container} id='services'>
            <div className={styles.contentServices}>
                <div className={styles.textServices}>
                    <div className={styles.flexServices}>
                        <div className={styles.line}></div>
                        <div><h2>SERVIÇOS DE TRANSPORTE</h2></div>
                    </div>
                    <p>A DCAR Transporte foca em transporte rodoviário, oferecendo fretes locais e de longa distância por todo o Brasil. </p>
                </div>
                <div className={styles.contentSquares}>
                    <div><h3>FRACIONADA</h3><p>Transporte eficiente e econômico para cargas pequenas. A carga é compartilhada com outras remessas, garantindo segurança e pontualidade na entrega.</p></div>
                    <div><h3>LOTAÇÃO</h3><p>Envio rápido e seguro para grandes volumes. A carga é dividida com outras, sem paradas intermediárias, garantindo agilidade no transporte.</p></div>
                    <div><h3>EXCLUSIVO</h3><p>Aqui sua carga é prioridade! Com o transporte dedicado, garantimos rapidez e segurança do início ao fim, sem paradas intermediárias, ideal para grandes volumes e prazos mais curtos.</p></div>
                </div>
            </div>
        </section>
    )
}