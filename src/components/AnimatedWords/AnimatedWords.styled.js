import styled from 'styled-components';

export default styled.div`

/* Basic styling */
svg {
    width: 100%;
    overflow:visible;
}
.filled-heading {
  font-family: 'Elsie Swash Caps', sans-serif;
    font-size: 5em;
    line-height: 0.9;
    font-weight:900;
}

/* Animate the background shapes */
#background path {
    animation: pulse 4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite;

    /* Necessary to keep the SVG objects in place while scaling */
    transform-origin: 50% 50%;
    transform-box: fill-box;
}

/* Reveal the desired lines of text in the desired order */
#textMask g {
    animation: show 12s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite;
}
/* reuse the animation and only change the delay */
#textMask .second {
    animation-delay: -8s;
}
#textMask .third {
    animation-delay: -4s;
}

@keyframes pulse {
    /* Rotating it along with the scale makes it a little bit more fancy */
    0%, 100% { transform: scale(0) rotate(33deg); }
    35%, 65% { transform: scale(1) rotate(0deg); }
}
@keyframes show {
    /* Fill changes the resulting opacity of the blobs, opacity switches the active text group */
    0%, 33.3% {
        fill: #fff;
        opacity: 1;
    }
    33.31%, 100% {
        fill: #000;
        opacity: 0;
    }
}

`;
