import styled from "styled-components";

export default styled.div`
  /* background: var(--old-brick); */

  .intro {
  }
  .cardWrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 4rem;
    padding: 2rem;
    overflow: hidden;
    .card {
      background: ${props => props.color};
      transition: transform 2s, box-shadow 2s;
      border-radius: 5px;
      overflow: hidden;
      text-align: center;
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
      a {
        display: grid;
        h3 {
          font-family:'Elsie', sans-serif;
          font-size: var(--heading-2);
          color: var(----black);
          padding: 1rem 0;
        }
        /* grid-template-rows:2fr 1fr 1fr; */
      }
      &:hover {
        transform: translate(0, -1%);
        box-shadow: 0 3.4px 2.7px rgba(0, 0, 0, 0.022),
          0 8.7px 6.9px rgba(0, 0, 0, 0.031),
          0 17.7px 14.2px rgba(0, 0, 0, 0.039),
          0 36.5px 29.2px rgba(0, 0, 0, 0.048), 0 100px 80px rgba(0, 0, 0, 0.07);
      }
      img {
        min-width: 100%;
        max-height: 250px;
        overflow-y: hidden;
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
