import styled from "styled-components";
export const Section = styled.section`
  color: #fff;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div.featured-post-container {
    color: #fff;
    display: flex;
    width: 70%;
    height: 55vh;
    margin: 50px 0px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;

    div.box-content {
      z-index: 2;
      background: linear-gradient(
        90deg,
        #47cf73,
        #ffdd40,
        #ae63e4,
        #0ebeff,
        #47cf73
      );
      right: 0px;
      position: absolute;
      width: 400px;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      animation: 0.3s;
      transition: 0.3s;
      box-shadow: 0px 0px 5px 1px #00000066;

      :hover {
        box-shadow: 0px 0px 50px 1px #00000040;
        animation: 0.3s;
        transition: 0.3s;
        margin-right: -1px;
        padding: 7px;
      }
      div {
        background: #111;
        display: flex;
        flex-direction: column;
        padding: 25px;
        border-radius: 5px;

        h2.text-title {
          margin: 0px 0px 20px 0px;
          color: #47cf73;
          font-size: 24px;
        }
        p.text-description {
          margin: 0px 0px 20px 0px;
          font-size: 18px;
          line-height: 26px;
        }
        p.text-date {
          font-size: 16px;
          color: #a9a9a9;
        }
      }
    }
  }
  div.box-img {
    height: 55vh;
    display: flex;
    flex: 1;
    top: 0px;
    left: 0px;
    position: absolute;
    width: calc(100% - 200px);
    object-fit: cover;
    border-radius: 10px;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    img.image-featured-post {
      height: 55vh;
      display: flex;
      flex: 1;
      top: 0px;
      left: 0px;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0px 0px 5px 1px #00000024;
      z-index: 1;
    }
    span.shadow-bottom {
      height: 50px;
      background: #00000036;
      width: 90%;
      position: relative;
      border-radius: 10px;
      display: block;
      margin-top: -60px;
      box-shadow: 0px 0px 10px 15px #00000055;
    }
  }
`;
