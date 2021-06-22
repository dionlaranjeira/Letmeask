import illustrationIMG from '../assets/images/illustration.svg';
import logoIMG from '../assets/images/logo.svg';
import googleIconIMG from '../assets/images/google-icon.svg';
import '../styles/auth.css';
import { Button } from '../componentes/Button';
import { Link } from 'react-router-dom';

export function NewRoom(){
    return(
        <div id="page-auth" >
            <main>
                <div className="main-content"  >
                    <img src={logoIMG} alt="Logo Letmeask" ></img>
                    <h2>Criar uma nova sala</h2>
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="Nome da sala"
                    />
                    <Button type="submit">Criar sala</Button>
                </form>
                <p>Quer entrar em uma sala existente? <Link to="/"  >clique aqui</Link> </p>
            </main>
        </div>
    )
}