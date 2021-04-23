import styled from "styled-components";

export default styled.div`
  background: var(--old-brick);

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
    .card {
      background: var(--banana);

      border-radius: 2rem;
      &:hover {
        background-color: var(--banana-10);
        box-shadow: 0 3.4px 2.7px rgba(0, 0, 0, 0.022),
          0 8.7px 6.9px rgba(0, 0, 0, 0.031),
          0 17.7px 14.2px rgba(0, 0, 0, 0.039),
          0 36.5px 29.2px rgba(0, 0, 0, 0.048), 0 100px 80px rgba(0, 0, 0, 0.07);
      }
      img {
        width: 100%;
        border-radius: 1rem 1rem 0 0;
      }
      a {
        color: black;
        text-decoration: none;
        .cardHeadline {
          padding: 1rem;
        }
        .cardBody {
          padding: 0 1rem 2rem 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .cardWrapper {
      grid-template-columns: 1fr;
    }
  }
`;
