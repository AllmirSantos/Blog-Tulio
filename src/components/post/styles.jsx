import styled from "styled-components";
export const Section = styled.section`
  color: #fff;
  display: flex;
  width: 26vw;
  margin: 20px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  div.featured-post-container {
    color: #fff;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: #111;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px #00000024;
    overflow: hidden;
    overflow: hidden;
    animation: 0.5s;
    transition: 0.5s;
    z-index: 1;
    cursor: pointer;
    :hover {
      margin-top: -7px;
      margin-bottom: 7px;
      animation: 0.5s;
      transition: 0.5s;
    }

    img.image-featured-post {
      width: 100%;
      height: 33vh;
      object-fit: cover;
    }
    span {
      background: linear-gradient(
        90deg,
        #47cf73,
        #ffdd40,
        #ae63e4,
        #0ebeff,
        #47cf73
      );
      margin-top: -5px;
      z-index: 1;
      height: 5px;
      width: 100%;
    }
    div.text-box {
      display: flex;
      flex-direction: column;
      padding: 25px;
      flex: 1;
      h2.text-title {
        margin: 0px 0px 20px 0px;
        color: #47cf73;
        font-size: 18px;
      }
      p.text-description {
        margin: 0px 0px 20px 0px;
        font-size: 14px;
        line-height: 20px;
        overflow: hidden;
        display: flex;
        text-overflow: ellipsis;
        display: -webkit-box; /* fallback */
        max-height: 80px; /* fallback */
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
      div.box-text-date {
        flex: 1;
        align-items: flex-end;
        display: flex;

        p.text-date {
          font-size: 12px;
          display: flex;
          color: #a9a9a9;
        }
      }
    }
  }
  span.shadow-bottom {
    height: 50px;
    background: #00000036;
    width: 90%;
    position: relative;
    border-radius: 10px;
    display: block;
    bottom: 10px;
    position: absolute;
    box-shadow: 0px 0px 10px 15px #00000030;
  }
`;
