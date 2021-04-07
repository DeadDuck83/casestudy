import styled from 'styled-components';

export default styled.section`
/* background: var(--peach); */
.skillsWrapper {
  max-width: var(--containerMax);
  margin: 0 auto;
  padding: 3rem;
  text-align: center;
}
/* React Tabs styles */
.react-tabs {
  .customBtn {
    color: var(--primary);
    border-radius: 0;
    border-bottom: 1px solid transparent;
    background: transparent;
    &.react-tabs__tab--selected {
      color: var(--primaryHighlight);
      border-bottom: 1px solid var(--primaryHighlight);
    }
  }
  .react-tabs__tab-panel{
    margin-left: 1000%;
    opacity: 0;
    &.react-tabs__tab-panel--selected {
    transition: all 700ms;
    opacity: 1;
    margin-left: 0;
  }
  }
  .react-tabs__tab-list {
    display:grid;
    grid-template-columns: 1fr 1fr;
    max-width: 700px;
    justify-content: center;
    text-align:center;
    margin: 0 auto;

  }
}
p {
      padding: var(--paragraphPadding);
    }
.skills {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;

  .skill {
    background: var(--accent);
    color: var(--alabaster);
    display: grid;
    grid-template-columns: 20px 1fr;
    overflow: hidden;
    align-items: center;

    span {
      padding: 0 1rem;
      text-align: left;
    }
  }
}


@media (max-width: 700px) {
  .skillsWrapper {
    padding: 2rem;
  }
.skills {
  grid-template-columns: repeat(2, 1fr);
}
  }
`;
