import styled from "styled-components";

export default styled.section`
position:relative;
display: block;

background: #018a80;
.elWrapper {
  max-width:100vw;
  margin: 0 auto;
  width: 1200px;
  position:relative;
  border: 1px solid blue;
  height: clamp(80vh, 90vh, 100vh);
}
img {
  position:absolute;
  width: 100%;
  height: 100%;

}
svg {
  position: absolute;
  width: 100%;
  height: 100%;
}
  @media (max-width: 700px) {
  }
`;
