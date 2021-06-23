import logoIMG from '../assets/images/logo.svg';
import '../styles/auth.css';
import { Button } from '../componentes/Button';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';
import {FormEvent} from 'react';
import { useState } from 'react';
import { database } from '../services/firebase';

export function NewRoom(){

    const [newRoom, setNewRoom] = useState('');
    const history = useHistory();

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();
        console.log(newRoom);

        if(newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/rooms/${firebaseRoom.key}`);

    }

    const {user} = useAuth();
    return(
        <div id="page-auth" >
            <main>
                <div className="main-content"  >
                    <img src={logoIMG} alt="Logo Letmeask" ></img>
                    <h2>{user?.name} deseja Criar uma nova sala?  </h2>

                </div>
                <form onSubmit={handleCreateRoom} >
                    <input
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value= {newRoom}
                    />
                    <Button type="submit">Criar sala</Button>
                </form>
                <p>Quer entrar em uma sala existente? <Link to="/"  >clique aqui</Link> </p>
            </main>
        </div>
    )
}