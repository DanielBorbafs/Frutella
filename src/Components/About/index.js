import './About.css'
import melancia from '../../assets/images/melancia.png';
import about from '../../assets/images/about.png'
import frete from '../../assets/images/frete.svg'
import cesta from '../../assets/images/cesta.svg'
import shop from '../../assets/images/shop.svg'
import desconto from '../../assets/images/desconto.svg'

const About = () =>{

    return (
       <section className='container about-hero'>
            <div className='container about-section'>
                <div class="section_our_solution">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                            <div class="solution_card">
                                <div class="hover_color_bubble"></div>
                                <div class="so_top_icon">
                                    <img src={melancia} alt="imagem de melancias"></img>
                                </div>
                                <div class="solu_title">
                                    <div>Demo 1</div>
                                    </div>
                                    <div class="solu_description">
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>     
                <div class="section_our_solution">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                            <div class="solution_card">
                                <div class="hover_color_bubble"></div>
                                    <div class="so_top_icon">
                                        <img src={melancia} alt="imagem melancia"></img>
                                    </div>
                                    <div class="solu_title">
                                    <div>Demo 1</div>
                                    </div>
                                    <div class="solu_description">
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                            
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>  
                <div class="section_our_solution">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                            <div class="solution_card solution_card2">
                                <div class="hover_color_bubble"></div>
                                    <div class="so_top_icon">
                                        <img src={melancia} alt="imagem melancia"></img>
                                    </div>
                                    <div class="solu_title">
                                    <div>Demo 1</div>
                                    </div>
                                    <div class="solu_description">
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>          
            </div>
            <div className='container about-section_skills'>
                <div className='row'></div>
                <div className='col-12 col-lg-6 framboimg'>
                    <img src={about} alt="imagem do suco de framboesa"></img>
                </div>
                <div className='col-12 col-lg-5 skills'>
                    <ul className='list-skills'>
                        <li className='skill-item'>
                            <img src={frete} alt="icone de frete"></img>
                            <div className='skill-item-text'> 
                                <h4>Fastest Delivary</h4>
                                <p>Bacon ipsum dolor amet bacon ham hock landjaeger pancetta jowl brisket, alcatra kevin meatloaf ham bresaola cow. </p>
                            </div>
                        </li>
                        <li className='skill-item'>
                            <img src={cesta} alt="icone de cesta de fruta"></img>
                            <div className='skill-item-text'> 
                                <h4>Fastest Delivary</h4>
                                <p>Bacon ipsum dolor amet bacon ham hock landjaeger pancetta jowl brisket, alcatra kevin meatloaf ham bresaola cow. </p>
                            </div>
                        </li>
                        <li className='skill-item'>
                            <img src={shop} alt="icone da loja"></img>
                            <div className='skill-item-text'> 
                                <h4>Fastest Delivary</h4>
                                <p>Bacon ipsum dolor amet bacon ham hock landjaeger pancetta jowl brisket, alcatra kevin meatloaf ham bresaola cow. </p>
                            </div>
                        </li>
                        <li className='skill-item'>
                            <img src={desconto} alt="icone de desconto"></img>
                            <div className='skill-item-text'> 
                                <h4>Fastest Delivary</h4>
                                <p>Bacon ipsum dolor amet bacon ham hock landjaeger pancetta jowl brisket, alcatra kevin meatloaf ham bresaola cow. </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
       </section>
    )


}


export default About