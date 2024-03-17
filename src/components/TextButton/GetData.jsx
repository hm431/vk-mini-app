import { useEffect, useState, useRef } from "react";
import { api } from '../../utils/Api';
import { Input } from '@vkontakte/vkui';
import "./get__data.css";

function GetData() {
    const [textSeratch, changeTextSearch] = useState('Вот тут будет ваш текст');
    const inputRef = useRef(null);
    useEffect(() => {
        placeCursorAtEnd(document.getElementById('yourTextInputId'), textSeratch);
    });

    function placeCursorAtEnd(el, phrase) { //Функция, ставит курсор после первого слова в выделеном поле ввода. 
        let words = phrase.split(' ');
        let indexOfSpace = phrase.indexOf(`${words[1]}`) - 1;
        el.focus();
        el.selectionStart = indexOfSpace;
        el.selectionEnd = indexOfSpace;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.getInfo('https://catfact.ninja/fact')
            .then((data) => {
                changeTextSearch(data.fact);
            })
            .catch(err => {
                console.log(err);

            });
    }

    return (
        <>
            <h2 className="get__data_header">  Первое задание </h2>
            <form onSubmit={handleSubmit} >
                <Input
                    id="yourTextInputId"
                    onChange={changeTextSearch}
                    ref={inputRef}
                    value={textSeratch}
                />
                <button className="get__data_button" type="submit" >Нажми меня</button>
            </form >
        </>
    )
}

export default GetData;