import styled from "styled-components";

export default styled.div`
background: var(--sage);

.intro {
}
  .cardWrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 2rem;
    overflow: hidden;
    img {
      width:100%;
    }
    a {
      color: black;
      text-decoration:none;
    }
  }

  @media (max-width: 700px) {
  }
`;
