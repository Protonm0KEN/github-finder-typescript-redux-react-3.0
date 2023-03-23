import React, {ChangeEvent, MouseEventHandler, useState} from 'react';
import "../../styles/main-styles/Main.scss"
import UserCard from "../UserCard/UserCard";
import {UserInfo} from "../../types/UserTypes";
import {useAppDispatch} from "../../hooks/useAppActions";
import {getUserInfo} from "../../store/action-creators/UserActionCreator";

interface OwnProps {
    user: UserInfo,
    loading: boolean,
    error: null | string
}

type Props = OwnProps;

function Main(props: Props) {
    let {user, loading, error} = props;
    const [nickname, setNickname] = useState<string>("")
    const dispatch = useAppDispatch()
    const sendUserName = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(getUserInfo(nickname))
    }
    const sendUserNameOnClick = () => {
        dispatch(getUserInfo(nickname))
    }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNickname(e.target.value)
    }
    return (
        <main className="Main">
            <form onSubmit={sendUserName} className="Main__form">
                <input value={nickname} onChange={ handleChangeInput} type="text"
                       placeholder="Введите имя пользователя"/>
                <button onClick={sendUserNameOnClick} className="Main__form-btn">Найти</button>
            </form>
            <div className="user-loading-state">
                {loading ? <h2>Загрузка...</h2> : ""}
                {error ? <h2>Произошла ошибка {error}</h2> : ""}
            </div>
            <div className="Main__user-card">
                {Object.keys(user).length ? <UserCard user={user}/> : ""}
            </div>
        </main>
    );
}

export default Main;
