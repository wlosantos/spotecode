import React from 'react';
import { Container, Section } from 'react-bulma-components';

const SectionWraper = (props) => {
  return(
    <Section>
      <Container>
        {props.children}
      </Container>
    </Section>
  );
}

export default SectionWraper;
