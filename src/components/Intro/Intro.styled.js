import styled from 'styled-components';

export default styled.section`
background: var(--teal);
.intro {
  max-width: var(--containerMax);
  margin: 0 auto;

  .burst {
    margin: 0 auto;
    text-align: center;
    padding: 2rem 0 0 0;
  }
  p {
    max-width: 70ch;
    margin: 0 auto;
    padding: var(--paragraphPadding);
  }
}

@media (max-width: 700px) {
  background:orange;
  .intro {

    padding: 2rem;

  }

  }
`;
