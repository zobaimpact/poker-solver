import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { customMedia } from '../../../styles/media';


interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

export const MainView = ({ children }: Props) => {
  

  return (
    <Body>
      <View>
        <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
        </Content>
      </View>
    </Body>
  );
};

const Body = styled.div`
  height: 100dvh;
  width: 100dvw;
  max-width: 100vw;
  display: flex;
`;

const View = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

const Content = styled(motion.div)`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  ${customMedia.lessThan('small')` padding: 0 1rem;`}
`;
