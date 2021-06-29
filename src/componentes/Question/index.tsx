import {Children, ReactNode} from 'react';
import './style.css';


type QuestionProps ={
    content: string;
    author:{
        name: string;
        avatar: string;
    };
    children?: ReactNode;
}


export function Question({content, author,children}: QuestionProps){
    return(
        <div id="question-div">
            <p id="pContent" >{content}</p>
            <footer>
                <div className="user-info">
                    <img id="avatar" src={author.avatar}  alt={author.name}></img>
                    <span id="user-name" >{author.name}</span>
                </div>
                <div>{children}</div>
            </footer>
        </div>

    );
}