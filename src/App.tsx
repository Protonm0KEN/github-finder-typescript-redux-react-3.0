import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/useAppActions";
import {getUserInfo} from "./store/action-creators/UserActionCreator";
import UserCard from "./components/UserCard/UserCard";
import Header from "./UI/MyHeader/Header";
import Main from "./components/Main/Main";

const App: FC = () => {
    const {user, error, loading} = useAppSelector(state => state.user)
    return (
        <>
          <div className="App">
              <Header/>
              <Main loading = {loading} error = {error}   user = {user}/>
          </div>
        </>
    );
};

export default App;
