import React, { FunctionComponent } from 'react';
import {RepoInfo} from "../../types/ReposTypes";
import "../../styles/repoCard-styles/RepoCard.scss"
interface OwnProps {
  repo: RepoInfo
}

type Props = OwnProps;

const RepoCard: FunctionComponent<Props> = (props) => {
  const {repo} = props
  return (
      <>
        <div className="RepoCard">
          <div className="RepoCard__right">
            <h1 className="RepoCard-title">{repo.name}</h1>
            <h1 className="RepoCard-stars">Количество звёзд: {repo.stargazers_count}</h1>
            <h1 className="RepoCard-created-at">Дата добавления: {repo.created_at}</h1>
          </div>
          <div className="RepoCard__left">
            <button><a  className="RepoCard-btn" href={repo.html_url} type="_blank">ПОСЕТИТЬ</a></button>
          </div>
        </div>
      </>
  );
};

export default RepoCard;
