import styled from "styled-components";

export default styled.div`
  .wrapper {
    display: grid;
    grid-template-rows: auto auto;
    background-position:top ;
    background-size: cover;
    justify-content: center;
    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      margin: 3rem;
      max-width: 1200px;
      .cardImg {
        border-radius: 4px;
      }
      .card {
        max-width: 480px;
        text-align: center;
        h3 {
          font-weight: 600;
          padding: var(--paragraphPadding);
        }
        p {
          padding: var(--paragraphPadding);
        }
      }
    }
    .intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      margin: 3rem;
      text-align: center;
      max-width: 1200px;
      p {
        max-width: 70ch;
      }
    }
  }
  @media (max-width: 700px) {
.wrapper {
  .cards {
    grid-template-columns: 1fr;
    .card {
      margin: 0 auto;
    }
  }
}
  }
`;
