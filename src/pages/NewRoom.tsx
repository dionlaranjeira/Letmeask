import logoIMG from '../assets/images/logo.svg';
import '../styles/auth.css';
import { Button } from '../componentes/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../App';

export function NewRoom(){

    const {user} = useContext(AuthContext);
    return(
        <div id="page-auth" >
            <main>
                <div className="main-content"  >
                    <img src={logoIMG} alt="Logo Letmeask" ></img>
                    <h1>{user?.name}</h1>
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