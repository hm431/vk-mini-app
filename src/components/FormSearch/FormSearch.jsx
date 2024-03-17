
import { useState } from "react";
import { api } from '../../utils/Api';
import { Input } from '@vkontakte/vkui';
import "./form__search.css";

function FormSearch() {

    const [textSeratch, changeTextSearch] = useState('Oleg');
    const [ageUser, changeAgeUser] = useState();


    const handleChange = (e) => {
        var lastReq = textSeratch;
        changeTextSearch(e.target.value);

        var isValid = /^[a-zA-Zа-яА-Я]+$/.test(e.target.value);
        if (isValid && (e.target.value !== lastReq)) {
            setTimeout(() => { // TODO повторение кода, возможно надо убрать + надо убрать 
                changeApiAge(e.target.value);
            }, 3000)
        }
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        changeApiAge(textSeratch);
    }

    function changeApiAge(name) {
        api.getUser('https://api.agify.io/', name)
            .then((data) => {
                changeAgeUser(data.age);
            })
            .catch(err => {
                console.log(err);

            });
    }

    return (
        <>
            <h2 className="form__header">  Второе задание </h2>
            <form onSubmit={handleSubmit} name="takeAge" className="form__search">
                <Input
                    required
                    placeholder="Введите Имя"
                    id="example"
                    type="text"
                    value={textSeratch || ''}
                    onChange={handleChange}
                    pattern="^[a-zA-Z ]*$" />


                <div>{ageUser}</div>

                <button className="search__button" type="submit">Нажми и на меня</button>
            </form>
        </>
    )
}

export default FormSearch;