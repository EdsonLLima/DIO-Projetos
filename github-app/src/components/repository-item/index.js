import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName, imageAvatar }) => {
  return (
    <S.Wrapper>
      <S.WrapperImage src={imageAvatar} />
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullname>full name:</S.WrapperFullname>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
