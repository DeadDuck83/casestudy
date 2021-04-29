import styled from 'styled-components';

export default styled.section`
background: ${props => props.color};
padding: 3rem;
.intro {
  max-width: var(--containerMax);
  margin: 0 auto;
  .oneLiner {
    text-align: center;
    font-size: var(--xtra-heading);
    .burst {
    margin: 0 auto;
    text-align: center;
    font-family: var(--bodyFont);
    display: inline;
  }
  h1 {
    display: inline;
    font-size: var(--xtra-heading);
  }

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
