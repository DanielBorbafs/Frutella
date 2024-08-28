import './Botao.css'
import copoIcon from '../../assets/images/copoIcon.svg';

const BotaoPedido = () => {
    return (
        <button>
            <div className='img-wrapper'>
                <img src={copoIcon} alt="icone de um copo"></img>
            </div>
            <span>Faça seu pedido</span>
        </button>
    )
}



export default BotaoPedido