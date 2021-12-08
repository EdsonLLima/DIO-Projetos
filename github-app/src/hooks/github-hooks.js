import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const {
    githubState,
    getUser,
    getUserRepos,
    getUserStarred,
    getUserFollowers,
  } = useContext(GithubContext);

  return {
    githubState,
    getUser,
    getUserRepos,
    getUserStarred,
    getUserFollowers,
  };
};

export default useGithub;
