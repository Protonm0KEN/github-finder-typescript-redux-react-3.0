import React, {FunctionComponent} from 'react';
import {UserInfo} from "../../types/UserTypes";
import UserCard from "../UserCard/UserCard";
import Repos from "../Repos/Repos";
import {ReposState} from "../../types/ReposTypes";
import "../../styles/user-styles/User.scss"
interface OwnProps {
    user: UserInfo,
    repos: ReposState
}

type Props = OwnProps;

const User: FunctionComponent<Props> = (props) => {
  return (
      <>
          <div className="User">
              {Object.keys(props.user).length ? <UserCard user = {props.user}/> : ""}
              <div className="repos">
                  {<Repos repos={props.repos}/>}
              </div>
          </div>
      </>
  );
};

export default User;
