import styled from 'styled-components';

export default styled.section`
background: var(--alabaster);
padding: 3rem;
.intro {
  max-width: var(--containerMax);
  margin: 0 auto;

  .burst {
    margin: 0 auto;
    text-align: center;
  }
  p {
    max-width: 70ch;
    margin: 0 auto;
    padding: var(--paragraphPadding);
  }
}

@media (max-width: 700px) {
  padding: 2rem;
  .intro {

    padding: 2rem;

  }

  }
`;
