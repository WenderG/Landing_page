import '../css/Home.css'
import mesa from '../img/mesa.jpg'

function Home() {
    return(
        <section className="main">
            <div className="Slogan">
                <h1>Sua melhor opção para Tecnologia!</h1>
            </div>
            <div className='botoes'>
                <button>Entrar</button>
                <button>Cadastrar</button>
            </div>
            <img className="mesa" src={mesa} alt="Mesa de reunião"/>
        </section>
    )
}

export default Home