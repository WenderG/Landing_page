import '../css/Home.css'
import mesa from '../img/mesa.jpg'
import escritorio from '../img/escritorio.jpeg'

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
            
            <div className='imagem'>
                    <img className="escritorio" src={escritorio} alt="Mesa de reunião"/>
                </div>    
        </section>
    )
}

export default Home