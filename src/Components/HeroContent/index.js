import './teste.css'
import lemonImage from '../../assets/images/lemon.png';

const HeroContent = () => {
    return (
        <section className='container '>
        <div className="row section-principal">
            <div className="hero-section_text col-5">
                <span>Frutella</span>
                <h1>Sucos naturais e refrescantes para todos os momentos!</h1>
                <p>descubra o sabor autêntico das frutas em cada gole. Na Frutella, nossos sucos são feitos com ingredientes frescos e selecionados, trazendo para você o melhor da natureza em bebidas saudáveis e deliciosas. Experimente nossos sabores únicos e refresque seu dia!</p>
            </div>
            <div className="col-6"> 
                <img src={lemonImage} alt="imagem de um copo de suco de limão"/>
            </div>
        </div>
       </section>
    )
}

export default HeroContent;