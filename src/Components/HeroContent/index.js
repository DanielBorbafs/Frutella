import './HeroContent.css'
import lemonImage from '../../assets/images/lemon.png';
import BotaoPedido from '../BotaoPedido';
import PartnerSlider from '../Slide';



const HeroContent = () => {
    return (
        <section className='container '>
        <div className="row section-principal">
            <div className="hero-section_text col-12 col-lg-6">
                <span className='Frutella'>Frutella</span>
                <h1>Sucos naturais e refrescantes para todos os momentos!</h1>
                <p>descubra o sabor autêntico das frutas em cada gole. Na Frutella, nossos sucos são feitos com ingredientes frescos e selecionados, trazendo para você o melhor da natureza em bebidas saudáveis e deliciosas. Experimente nossos sabores únicos e refresque seu dia!</p>
                <BotaoPedido/>
            </div>
            <div className="col-12 col-lg-5"> 
                <img src={lemonImage} alt="imagem de um copo de suco de limão" className='img-limao'/>
            </div>
            <PartnerSlider/>
           
        </div>
       </section>
    )
}

export default HeroContent;