import styled from "styled-components";
export const Section = styled.section`
  background-color: #111;
  color: #fff;
  display: flex;
  flex-direction: column;

  div.BoxTop {
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    left: 0;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: radial-gradient(
        ellipse at center,
        rgb(0 0 0 / 0%) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        ellipse at 70% 60%,
        #ffffff00 0%,
        rgba(195, 224, 96, 0) 30%
      ),
      radial-gradient(ellipse at bottom left, #000000 0%, rgb(0 2 2 / 0%) 70%),
      linear-gradient(
        135deg,
        rgba(18, 46, 119, 0) 0%,
        rgba(18, 46, 119, 0) 75%,
        #3e0000 100%
      ),
      linear-gradient(
        to right,
        #0e033c 0%,
        #3e0104 17%,
        #04004e 74%,
        #160015 100%
      );
    background-blend-mode: screen, hue, color, overlay, normal;

    div.BoxText {
      align-items: center;
      justify-content: center;
      display: flex;
      width: 600px;
      flex-direction: column;
      h1 {
        letter-spacing: 0.8px;
        font-size: 3.25rem;
      }
      p {
        font-size: 1.375rem;
        text-align: center;
        letter-spacing: 0.8px;
        line-height: 2rem;
      }
    }
    div.BoxImageMouse {
      align-items: center;
      justify-content: center;
      display: flex;
      width: 60px;
      display: flex;
      position: absolute;
      bottom: 60px;
      flex-direction: column;
      img.ImageMouse {
        width: 55px;
      }
      img.ImageMouseArrow {
        width: 20px;
        margin-bottom: 0px;
        padding-top: 100px;
        position: absolute;
        animation: rotation 1s linear 1s infinite;
      }
      @keyframes rotation {
        0% {
          margin-bottom: 0px;
        }

        50% {
          margin-bottom: -5px;
        }

        100% {
          margin-bottom: 0px;
        }
      }
    }
  }
`;
