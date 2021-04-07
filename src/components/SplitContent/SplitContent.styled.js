import styled from 'styled-components';

export default styled.section`
.splitContainer {
  display:grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vw / 2);
  .imageSplit {
  background: greenyellow;
  background-repeat:none;
  background-size: cover;
  /* background-attachment: fixed; */
}
.contentSplit {
  padding: clamp(1rem, 4vw, 5rem);
  align-self: center;
  h2 {
    font-size: var(--heading-1);
  }
  p {
    margin: var(--paragraphPadding);
    font-size: var(--baseFontSize);
  }
}
}

`;
