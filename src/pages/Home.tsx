import illustrationIMG from '../assets/images/illustration.svg';
import logoIMG from '../assets/images/logo.svg';
import googleIconIMG from '../assets/images/google-icon.svg';

export function Home(){
    return(
        <div>
            <aside>
                <img src={illustrationIMG} alt="Ilustração simbolizando perguntas e respostas"  ></img>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoIMG} alt="Logo Letmeask" ></img>
                </div>
                <button>
                    <img src={googleIconIMG} alt="Logo Google" ></img>    
                    Crie sua sala com o Google
                </button>

                <div>ou entre em uma sala</div>

                <form>
                    <input
                        type="text"
                        placeholder="Digite o código da sala"
                    />
                    <button type="submit">Entrar na sala</button>
                </form>

            </main>
        </div>
    )
}