import smartphoneImage from '..//image/smartphone.png';
import './InteractiveCard.css';

const InteractiveCard = () => {
    const items = [
        {
            name: 'Galaxy Z Fold 6',
            price: "R$12419,00",
            description: "O Galaxy Z Fold 6 é a mais recente inovação da Samsung na linha de smartphones dobráveis. Este dispositivo combina a portabilidade de um smartphone com a funcionalidade de um tablet, oferecendo uma tela expansível que proporciona uma experiência de visualização imersiva. Equipado com tecnologia de ponta, o Galaxy Fold 6 possui um processador poderoso, câmeras de alta resolução e uma bateria de longa duração, tornando-o ideal para multitarefas, jogos e consumo de mídia. Além disso, seu design elegante e durável redefine o conceito de mobilidade e produtividade em um único dispositivo",
        },
    ]
    return (
    <>
        <a href="https://www.fastshop.com.br/web/p/d/SGSMF95651CNZ_PRD/smartphone-samsung-galaxy-z-fold6%C2%A0-5g-cinza-512gb-12gb-ram-e-c%C3%A2mera-tripla-de-50mp12mp10mp?partner=parceiro-comparador&utm_source=com_zoom&utm_medium=com&utm_campaign=CELULARES_E_SMARTPHONES&utm_term=SGSMF95651CNZ_PRD&cm_mmc=com_zoom-_-CELULARES_E_SMARTPHONES-_-ND-_-SGSMF95651CNZ_PRD&utm_content=89cc06a0e8cc44669204aefd458e88f4">
        <div className = 'card'>
        <h1>Galaxy Fold 6</h1>
            <img src={smartphoneImage} alt="" />
            <div className="infos">
                {items.map((item, index) =>(
                    <p key={index}>
                        <p>Nome: {item.name}</p>
                        <p>Valor: {item.price}</p>
                        <p>Descrição: {item.description}</p>
                    </p>
                ))}
            </div>
        </div>
        </a>
    </>
    )
}
export default InteractiveCard