import logoImg from '../assets/images/logo.svg';
import { Button } from '../componentes/Button';
import { RoomCode } from '../componentes/RoomCode';
import { useParams } from 'react-router';
import '../styles/room.css';

type RoomParams = {
    id: string;
}

export function Room(){

    const params = useParams<RoomParams>();

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
                <form>
                    <textarea
                    placeholder="Faça a sua pergunta."
                    />
                    <div className="form-footer">
                        <span id="enviar-pergunta" >Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        <Button type="submit">Enviar pergunta</Button>
                    </div>
                </form>
            </main>

        </div>
    );
}