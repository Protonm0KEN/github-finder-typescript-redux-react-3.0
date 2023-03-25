import React, {ChangeEvent, MouseEventHandler, useState} from 'react';
import "../../styles/main-styles/Main.scss"
import UserCard from "../UserCard/UserCard";
import {UserInfo} from "../../types/UserTypes";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppActions";
import {getUserInfo} from "../../store/action-creators/UserActionCreator";
import User from "../User/User";
import {getReposInfo} from "../../store/action-creators/ReposActionCreator";
import repos from "../Repos/Repos";

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
    const {repos} = useAppSelector(state => state)
    const sendUserName = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(getUserInfo(nickname))
    }
    const sendUserNameOnClick = () => {
        dispatch(getUserInfo(nickname))
        dispatch(getReposInfo(nickname))
    }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNickname(e.target.value)
    }
    console.log(repos)
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
            <div className="">
                <User user={user} repos={repos}/>
            </div>
        </main>
    );
}

export default Main;
