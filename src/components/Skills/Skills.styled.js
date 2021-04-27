import styled from "styled-components";

export default styled.section`
  .skillsWrapper {
    max-width: var(--containerMax);
    margin: 0 auto;
    padding: 3rem;
    text-align: center;
    .range {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 2rem 2rem 2rem;
      color: white;
      div {
        padding: 0;
        width: 17%;
        font-size:.7rem;
        line-height:1.1rem;
      }
      .good {
        background: var(--primary);
        border-radius: 0 15px 15px 0;
      }
      .better {
        background: var(--banana);
      }
      .best {
        background: var(--sea-foam);
        border-radius: 15px 0 0 15px;
      }
    }
  }
  /* React Tabs styles */
  .react-tabs {
    .customBtn {
      color: var(--primary);
      background: transparent;
      border-radius: 0;
      border-bottom: 1px solid transparent;
      background: transparent;
      &.react-tabs__tab--selected {
        color: var(--primaryHighlight);
        border-bottom: 1px solid var(--primaryHighlight);
      }
    }
    .react-tabs__tab-panel {
      margin-left: 1000%;
      opacity: 0;
      &.react-tabs__tab-panel--selected {
        transition: all 700ms;
        opacity: 1;
        margin-left: 0;
      }
    }
    .react-tabs__tab-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 700px;
      justify-content: center;
      text-align: center;
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
      color: white;
      display: grid;
      grid-template-columns: 30px 1fr;
      overflow: hidden;
      align-items: center;
      border-radius: 25px;
      background: rgb(90, 95, 96);
      background: linear-gradient(
        90deg,
        rgba(90, 95, 96, 1) 0%,
        rgba(60, 78, 82, 1) 50%
      );
      padding: 8px;
      span {
        padding: 0 1rem;
        text-align: left;
      }
      img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        box-shadow: 0 0.8px 1.3px rgba(0, 0, 0, 0.114),
          0 2.7px 4.5px rgba(0, 0, 0, 0.116), 0 12px 20px rgba(0, 0, 0, 0.36);
      }

    }
    .skill[skillclass="blue"]{
        background: var(--sea-foam);
      }
      .skill[skillclass="yellow"]{
        background: var(--banana-010);
      }
      .skill[skillclass="orange"]{
        background: var(--primary);
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
