import copyImg from '../assets/images/copy.svg';

import '../styles/roomCode.css';

type RoomCodeProps ={
    code: string;
}

export function RoomCode(props: RoomCodeProps){

    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code);
    }

    return(
        <button className="room-code" onClick={copyRoomCodeToClipboard}  >
            <div id='div-button'>
                <img src={copyImg} alt="Copy room code"/>
            </div>
            <span id="span-codigo" >Sala #{props.code}</span>
        </button>
    )
}