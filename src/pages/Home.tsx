import illustrationIMG from '../assets/images/illustration.svg';
import logoIMG from '../assets/images/logo.svg';
import googleIconIMG from '../assets/images/google-icon.svg';
import '../styles/auth.css';
import { Button } from '../componentes/Button';

import { useHistory } from 'react-router';
export function Home(){

    const history = useHistory();

    function navigateToNewRoom(){
        history.push('/rooms/new')
    }

    return(
        <div id="page-auth" >
            <aside>
                <img src={illustrationIMG} alt="Ilustração simbolizando perguntas e respostas"  ></img>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content"  >
                    <img src={logoIMG} alt="Logo Letmeask" ></img>
                </div>
                <button id="btn-create-room" onClick={navigateToNewRoom} >
                    <img id="imgGoogle"  src={googleIconIMG} alt="Logo Google" ></img>    
                    Crie sua sala com o Google
                </button>

                <div className="separator">
                    <span className="before"></span>
                    <span className="mid" >ou entre em uma sala</span>  
                    <span className="after"></span>
                    </div>

                <form>
                    <input
                        type="text"
                        placeholder="Digite o código da sala"
                    />
                    <Button type="submit">Entrar na sala</Button>
                </form>

            </main>
        </div>
    )
}