import logoImg from '../assets/images/logo.svg';
import { Button } from '../componentes/Button';

import '../styles/room.css';
export function Room(){
    return(
        <div id="page-room">
            <header>
                <div className="content-header">
                    <img src={logoImg} alt="Letmeask"/>
                    <div>codigo</div>
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
                        <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
                        <Button type="submit">Enviar pergunta</Button>
                    </div>
                </form>
            </main>

        </div>
    );
}