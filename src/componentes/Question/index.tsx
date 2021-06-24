import './style.css';
type QuestionProps ={
    content: string;
    author:{
        name: string;
        avatar: string;
    }
}


export function Question({content, author}: QuestionProps){
    return(
        <div id="question-div">
            <p id="pContent" >{content}</p>
            <footer>
                <div className="user-info">
                    <img id="avatar" src={author.avatar}  alt={author.name}></img>
                    <span id="user-name" >{author.name}</span>
                </div>
                <div></div>
            </footer>
        </div>

    );
}