import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
        <S.WrapperTab>Followers</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="bootstrap-4-autocomplete"
          linkToRepo="https://github.com/edneto/bootstrap-4-autocomplete"
          fullName="edneto/bootstrap-4-autocomplete"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="developer-roadmap"
          linkToRepo="https://github.com/edneto/developer-roadmap"
          fullName="edneto/developer-roadmap"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="cev-coursejs-exercise"
          linkToRepo="https://github.com/edneto/cev-coursejs-exercise"
          fullName="edneto/cev-coursejs-exercise"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;
