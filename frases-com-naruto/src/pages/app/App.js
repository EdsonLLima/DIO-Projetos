import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import jutsoSound from '../../sounds/jutso.mp3';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);
  const [frase, setFrase] = useState({
    autor: 'Loading speaker...',
    frase: 'Loading Quote'
  });

  const onUpdate = async () => {
    const resQuote = await getQuote();
    console.log(frase);

    if (isMounted.current) {
      setFrase(resQuote);
      audio.play();
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...frase} onUpdate={onUpdate} />
      <NarutoImg alt="Naruto holding a kunai" src={narutoImg} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
