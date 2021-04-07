import styled from 'styled-components';

export default styled.section`
background: var(--yellow);
.skillsWrapper {
  max-width: var(--containerMax);
  margin: 0 auto;
  padding: 3rem;
  text-align: center;
}
p {
      padding: var(--paragraphPadding);
    }
.skills {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;

  .skill {
    background: var(--purp);
    color: white;
    display: grid;
    grid-template-columns: 20px 1fr;
    overflow: hidden;
    align-items: center;

    span {
      padding: 0 1rem;
      text-align: left;
    }
  }
}


@media (max-width: 700px) {
  background:var(--purp-10);

  }
`;
