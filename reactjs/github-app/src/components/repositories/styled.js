import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
  color: #20b2aa;
`;

export const WrapperTabList = styled(TabList)`
  list-style: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 8px;
  border: 1px solid #b0e0e6;
  margin: 8px;
  padding: 16px;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #f0ffff;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 16px;
  margin-top: -5px;
  border-radius: 8px;
  border: 1px solid #b0e0e6;

  &.is-selected {
    display: block;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #f0ffff;
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
