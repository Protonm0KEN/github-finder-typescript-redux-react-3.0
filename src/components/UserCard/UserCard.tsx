import React, { FunctionComponent } from 'react';
import {UserInfo} from "../../types/UserTypes";
import "../../styles/user-card-styles/UserCard.scss"
interface OwnProps {
    user: UserInfo
}

const UserCard: FunctionComponent<OwnProps> = ({user}) => {
  return (
      <>
          {user ? <>
              <div className={"UserCard"}>
                  <div className={"UserCard__left"}>
                      <img className={"UserCard__logo"} src={user.avatar_url} alt="user-logo"/>
                      <a target="_blank" className="Black-btn" href={user.html_url}>Посетить</a>
                  </div>
                  <div className={"UserCard__right"}>
                      <p className="UserCard__userNickname">{user.name}</p>
                      <p className="UserCard__userRepos">Репозиториев: <span className="UserCard__count">{user.public_repos}</span></p>
                      <p className="UserCard__userCreatedAt">Создан: <span className="UserCard__count">{user.created_at?.substring(0,10)}</span></p>
                      <p className="UserCard__userFollowers">Подписчиков: <span className="UserCard__count">{user.followers}</span></p>
                      <p className="UserCard__userFollowing">Подписок: <span className="UserCard__count">{user.following}</span></p>
                  </div>
              </div>
          </> : null}
      </>
  );
};

export default UserCard;
