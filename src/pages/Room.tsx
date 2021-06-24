import logoImg from '../assets/images/logo.svg';
import { Button } from '../componentes/Button';
import { RoomCode } from '../componentes/RoomCode';
import { useParams } from 'react-router';
import '../styles/room.css';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/userAuth';
import { database } from '../services/firebase';

type RoomParams = {
    id: string;
}

export function Room(){
    const {user} = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState("");


    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();
        if (newQuestion.trim() === ""){
            return;
        }
        if(!user){
            throw new Error("Usuário não logado");
        }

        const question = {
            content : newQuestion,
            author :{
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAswered: false,
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);
        setNewQuestion("");
    }

    return(
        <div id="page-room">
            <header>
                <div className="content-header">
                    <img src={logoImg} alt="Letmeask"/>
                    <RoomCode code={params.id} />
                </div>
            </header>

            <main>
                <div id="rom-title">
                    <h1>Sala React</h1>
                    <span id="span-perguntas" >4 perguntas</span>
                </div>
                <form onSubmit={handleSendQuestion} >
                    <textarea
                    placeholder="Faça a sua pergunta."
                    onChange={event => setNewQuestion(event.target.value)}
                    value={newQuestion}
                    />
                    <div className="form-footer">

                        {user ?(<div className="user-info">
                            <img id="avatar" src={user.avatar} alt={user.name} />
                            <span id="user-name">{user.name}</span>
                        </div>):
                        (<span id="enviar-pergunta" >Para enviar uma pergunta, <button>faça seu login</button>.</span>)}
                        <Button type="submit"  disabled={!user} >Enviar pergunta</Button>
                    </div>
                </form>
            </main>

        </div>
    );
}