import styled from "styled-components";

export default styled.div`
.section:nth-child(odd){
  grid-template-areas:
      "headline headline"
      "intro list"
      "intro image";
}
div:nth-child(even){
  grid-template-areas:
      "headline headline"
      "list intro"
      "image intro";
}
  .banner {
    height: 80vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      text-align: center;
      line-height: 3rem;
      color: var(--alabaster);
    }
  }
  .request , .challenges, .approach, .solution, .learnings {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
    grid-gap: 20px;
    /* grid-template-areas:
      "headline headline"
      "intro list"
      "intro image"; */
    h2 {
      grid-area: headline;
      text-align: center;
    }
    .intro {
      grid-area: intro;
    }
    .list {
      grid-area: list;
    }
    .image {
      grid-area: image;
      min-height: 10rem;
      width: 100%;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .challenges {

  }

  @media (max-width: 700px) {
  }
`;
