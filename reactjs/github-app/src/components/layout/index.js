import React from "react";
import Header from "../header";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Layout = ({ children }) => {
  const { githubState } = useGithub();

  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
