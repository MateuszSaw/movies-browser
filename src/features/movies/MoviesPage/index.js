import React from "react";
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import Section from "../../../common/Section";
import MoviesList from "./MoviesList";

const MoviesPage = () => {
  return (
    <Container>
      <Header title="Popular movies"/>
      <Section
        body={<MoviesList />}
      />
    </Container>
  );
}

export default MoviesPage;
