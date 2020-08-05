import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fbhz6-1.fna.fbcdn.net/v/t1.0-1/p200x200/104419058_2965467213508941_3177138244948312677_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=u8lYX-qYnTQAX86zEZL&_nc_ht=scontent.fbhz6-1.fna&_nc_tp=6&oh=397208a749946719eab0fc0a97730374&oe=5F4E1DC2" alt="Rafael Braz"/>
                <div>
                    <strong>Rafael Braz</strong>
                    <span>Computação</span>
                </div>
            </header>

            <p>
                Teste
                <br/><br/>
                Teste
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;