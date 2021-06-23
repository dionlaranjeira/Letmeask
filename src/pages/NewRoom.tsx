import logoIMG from '../assets/images/logo.svg';
import '../styles/auth.css';
import { Button } from '../componentes/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';

export function NewRoom(){

    const {user} = useAuth();
    return(
        <div id="page-auth" >
            <main>
                <div className="main-content"  >
                    <img src={logoIMG} alt="Logo Letmeask" ></img>
                    <h2>{user?.name} deseja Criar uma nova sala?  </h2>

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