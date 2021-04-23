import styled from "styled-components";

export default styled.section`
position:relative;
display: block;

background: #7e9e9b;
.elWrapper {
  width:100vw;
  margin: 0 auto;
  max-width: 1200px;
  position:relative;
  display: flex;
  align-items: flex-start;
  height: 85vw;
  max-height: 980px;
}
img {
  position:absolute;
  width: 100%;
  /* height: 100%; */

}
svg {
  position: absolute;
  width: 100%;
  /* height: 100%; */
}
  @media (max-width: 700px) {
    display: none;
  }
`;
