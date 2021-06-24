import { useEffect, useState } from "react";
import { database } from "../services/firebase";


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

type FirebaseQuestions = Record<string, {
    author:{
        name: string,
        avatar: string,
    };
    content: string;
    isHighlighted: boolean;
    isAswered: boolean;
}>

export function useRoom(roomId:string){
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

    return{questions, title}

}