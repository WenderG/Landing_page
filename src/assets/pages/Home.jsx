import '../css/Home.css'
import mesa from '../img/mesa.jpg'

function Home() {
    return(
        <section className="main">
            <div className="Slogan">
                <h1>Sua melhor opção para Tecnologia!</h1>
            </div>
            <div className='formulario'>
                <form>
                    <label>Seu E-mail</label>
                    <div>
                        <input type="email" />
                    </div>
                    <label>Nome</label>
                    <div>
                        <input type='text'/>
                    </div>
                    <label>Sobrenome</label>
                    <div>
                        <input type='text'/>
                    </div>
                    <label>Mensagem</label>
                    <div>
                        <input id='mensagem' type='text'/>
                    </div>
                    <div>
                        <input id='submit' type='submit'/>
                    </div>
                </form>
            </div>
            <div className='botoes'>
                <button>Entrar</button>
                <button>Cadastrar</button>
            </div>
            <div className='imagem'>
                <img className="mesa" src={mesa} alt="Mesa de reunião"/>
            </div>
        </section>
    )
}

export default Home