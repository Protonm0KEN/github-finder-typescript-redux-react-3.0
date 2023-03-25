import React, { FunctionComponent } from 'react';
import {ReposState} from "../../types/ReposTypes";
import RepoCard from "../RepoCard/RepoCard";

interface OwnProps {
    repos: ReposState
}

type Props = OwnProps;

const Repos: FunctionComponent<Props> = (props) => {
  return (
      <>
          {props.repos.repos.map((repo) => {
              return (
                  <>
                      <RepoCard key = {repo.id} repo = {repo}/>
                  </>
              )
          })}
      </>
  );
};

export default Repos;
