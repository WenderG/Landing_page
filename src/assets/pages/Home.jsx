import '../css/Home.css'
import mesa from '../img/mesa.jpg'
import escritorio from '../img/escritorio.jpeg'

function Home() {
    return(
        <section className="main">
            <div className="slogan">
                <h1>Sua melhor opção para Tecnologia!</h1>
            </div>
            <div className='paineis'>
                <div className='painel'>
                    <h3>Benefícios</h3>
                    <ul>
                        <li>Plano de saúde</li>
                        <li>Plano dentário</li>
                        <li>Salário compatível com o mercado</li>
                        <li>Férias remuneradas</li>
                    </ul>
                </div>
                <div className='painel'>
                <h3>Exigências</h3>
                    <ul>
                        <li>Estar cursando o ensino superior</li>
                        <li>Disponibilidade de 8h semanais</li>
                        <li>Férias remuneradas</li>
                    </ul>
                </div>
                <div className='painel'>
                <h3>Áreas</h3>
                    <ul>
                        <li>Tecnologia</li>
                        <li>Marketing</li>
                        <li>Administração</li>
                        <li>Contabilidade</li>
                        <li>Vendas</li>
                    </ul>
                </div>
            </div>
            <div className='display'>
                <div className='botoes'>
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </div>
            </div> 
        </section>
    )
}

export default Home