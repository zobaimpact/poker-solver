import React from "react";
import styled from "styled-components";
import { Colors, Screen } from "../../../constants";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";

interface CustomCardProps {
  title?: string;
  text?: string;
  image?: string;
  minWidth: string;
  width?: string;
  height?: string;
  margin?: string;
  buttonText?: string;
  children?: React.ReactNode;

  onButtonClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  text,
  image,
  width,
  minWidth,
  height,
  margin,
  buttonText,
  onButtonClick,
  children
}) => {
  return (
    <Wrapper style={{ width: width, minWidth: minWidth, margin: margin, height: height }}>
      {image && <Img top width="100%" src={image} alt="poker image" />}
      <Body>
        <CardTitle tag="h1">{title}</CardTitle>
        <Text>{text}</Text>
        {buttonText && (
          <Btn outline onClick={onButtonClick}>
            {buttonText}
          </Btn>
        )}
        {children}
      </Body>
    </Wrapper>
  );
};

export default CustomCard;

const Wrapper = styled(Card)`
  border: none;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  border: 4px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
   @media (max-width: ${Screen.MEDIUM + 'px'}) {
    width: ${props => (props.mounted ? '80%' : '0px')};
  }
`;

const Img = styled(CardImg)`
  border-radius: 4px;

`
const Text = styled(CardText)`
  font-size: 1.5rem;
`

const Body = styled(CardBody)`
  text-align: center;
  width: 100%;
  height: fit-content;

`;

const Btn = styled(Button)`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  color: ${Colors.PRIMARY};
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  border: 1px solid red;
`;
