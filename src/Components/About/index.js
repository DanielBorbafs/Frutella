import './About.css'
import melancia from '../../assets/images/melancia.png';
import BotaoPedido from '../BotaoPedido';

const About = () =>{

    return (
       <div className='container about-section'>
            <div class="section_our_solution">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="our_solution_category">
                        <div class="solution_cards_box">
                        <div class="solution_card">
                            <div class="hover_color_bubble"></div>
                            <div class="so_top_icon">
                                <img src={melancia}></img>
                            </div>
                            <div class="solu_title">
                            <div>Demo 1</div>
                            </div>
                            <div class="solu_description">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <BotaoPedido/>
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
                                <img src={melancia}></img>
                            </div>
                            <div class="solu_title">
                            <div>Demo 1</div>
                            </div>
                            <div class="solu_description">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <BotaoPedido/>
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
                                <img src={melancia}></img>
                            </div>
                            <div class="solu_title">
                            <div>Demo 1</div>
                            </div>
                            <div class="solu_description">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <BotaoPedido/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>          
        </div>
    )


}


export default About