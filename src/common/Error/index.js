import React from 'react';
import { toMoviesPage } from '../../routes';
import {ReactComponent as Warning } from "../images/alert.svg"
import { Button, HeadText, Text, Wrapper } from './styled';
import { Link } from "react-router-dom";

export const Error = () => {
  return (
      <Wrapper>
        <Warning />
        <HeadText>
          Ooops! Something went wrong...
        </HeadText>
        <Text>
          Please check your network connection and try again
        </Text>
        <Link to={toMoviesPage()}>
          <Button>
            back to home page
          </Button>
        </Link>
      </Wrapper>
  )
};