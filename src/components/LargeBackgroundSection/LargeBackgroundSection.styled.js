import styled from 'styled-components';
// import backgroundImg from '../../../public/images/avalon.jpg'


export default styled.div`
height: 100vh;
width: 100vw;
/* background-image: url('/images/smaller-bg.jpg'); */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.action {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
`;
