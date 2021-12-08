import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetuser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o nome de usuário para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetuser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
