import logoImg from '../assets/images/logo.svg';
import { Button } from '../componentes/Button';
import { RoomCode } from '../componentes/RoomCode';
import { useParams } from 'react-router';
import '../styles/room.css';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/userAuth';
import { database } from '../services/firebase';
import { useEffect } from 'react';
import {Question} from "../componentes/Question";

type RoomParams = {
    id: string;
}

type FirebaseQuestions = Record<string, {
    author:{
        name: string,
        avatar: string,
    };
    content: string;
    isHighlighted: boolean;
    isAswered: boolean;
}>
type QuestionType = {
    id: string,
    author:{
        name: string,
        avatar: string,
    };
    content: string;
    isHighlighted: boolean;
    isAswered: boolean;
}

export function Room(){
    const {user} = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState("");
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title,setTitle] = useState("");

    useEffect(()=>{
        const roomRef = database.ref(`rooms/${roomId}`);
        roomRef.on('value', room =>{
            const databaseRoom = room.val();
            const firebaseQuestions = databaseRoom.questions as FirebaseQuestions ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key,value])=>
               {
                   return{
                       id: key,
                       content: value.content,
                       author: value.author,
                       isHighlighted: value.isHighlighted,
                       isAswered: value.isAswered,
                   }
               }
            );
            setTitle(databaseRoom.title);   
            setQuestions(parsedQuestions);      
        })
    },[roomId]);

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
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span id="span-perguntas" >{questions.length} pergunta(s)</span>}
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