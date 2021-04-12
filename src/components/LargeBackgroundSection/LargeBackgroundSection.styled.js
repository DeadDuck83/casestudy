import styled from 'styled-components';


export default styled.div`
/* background: black; */
/* z-index: -1; */
height: 100vh;
width: 100vw;
position:relative;
color: white;
/* background-image: url('/images/smaller-bg.jpg'); */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
div {
  /* z-index: 1; */
  /* overflow:hidden; */
}
img {
  overflow: hidden;
}
.bgwrap {
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  /* background: black; */
}

.action {
  position: absolute;
  overflow:visible;
  /* left: 50%; */
  bottom: 0;
  /* transform: translate(-50%, -50%); */
  margin: 0 auto;
}
`;
