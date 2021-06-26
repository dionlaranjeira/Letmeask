import logoImg from '../assets/images/logo.svg';
import { Button } from '../componentes/Button';
import { RoomCode } from '../componentes/RoomCode';
import { useParams } from 'react-router';
import '../styles/room.css';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/userAuth';
import { database } from '../services/firebase';
import {Question} from "../componentes/Question";
import { useRoom } from '../hooks/useRoom';

type RoomParams = {
    id: string;
}

export function AdminRoom(){
    const {user} = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState("");
    const roomId = params.id;
    const {questions, title} = useRoom(roomId)
   

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
                    <div id="div-buttons">
                    <RoomCode code={params.id} />
                    <Button isOutLined >Encerrar a sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div id="rom-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span id="span-perguntas" >{questions.length} pergunta(s)</span>}
                </div>
            
                {questions.map(question =>{
                    return(
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                        />
                    )
                })}
            </main>

        </div>
    );
}