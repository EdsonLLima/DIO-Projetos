import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #20b2aa;
    border-radius: 8px;
    width: 100%;
    height: 30px;
    padding: 8px;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #008b8b;
    padding: 4px 8px;
    margin: 0 8px;
    border-radius: 8px;

    &:hover {
      background-color: #20b2aa;
      color: #fff;
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
    }

    span {
      color: #ededed;
      font-weight: bold;
    }
  }
`;
