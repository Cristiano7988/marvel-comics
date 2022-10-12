import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../../static/marvel-logo.png";
import ReactPaginate from "react-paginate";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const
  Loading = styled(AiOutlineLoading3Quarters)`
    width: 30px;
    height: 30px;
    color: darkred;
    margin: 40px;

    @media (prefers-reduced-motion: no-preference) {
        animation: Loading-spin infinite 1s linear;
    }

    @keyframes Loading-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,
  Button = styled.button`
    margin: 10px;
    padding: 10px;
    font-weight: 700;
    cursor: pointer;
    
    a {
      text-decoration: none;
      color: black;
    }
  `,
  Message = styled.div`
    background: ${({success}) => success ? "Blue" : "Black"};
    color: white;
    display: inline-block;
    padding: 20px;
    margin: 40px;
    border-radius: 5px;

    svg {
      width: 25px;
      height: 25px;
    }
  `,
  Paginate = styled(ReactPaginate)`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: unset;
    position: sticky;
    bottom: 0;
    background: white;
    width: 100%;
    margin: unset;

    li {
      border: 1px solid darkred;
      margin: 10px;
      border-radius: 10px;
      box-shadow: 0 0 5px black;
      display: flex;

      &.disabled,
      &.break {
        display: none;
      }

      a {
        cursor: pointer;
        padding: 10px 2vw;
        line-height: 20px;
      }

      &.selected,
      &:active {
        background: brown;
        color: white;
        box-shadow: 0 0 0 black;
      }

      &:hover {
        background: darkred;
        color: white;
      }
    }
  `,
  InputContainer = styled.div`
    text-align: right;
  `,
  Header = styled.div`
    &,
    div {
      width: 100%;
      height: 300px;
      background-color: rgb(139 0 0 / 50%);
    }

    div {
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
    }
  `,
  Logo = styled.div`
    background-image: url(${LogoImage});
    background-position: center;
  `,
  BackgroundImageForTheLogo = styled.div`
    background-image: url(${({ image }) => image});
    background-position: ${({ position }) => position};
    visibility: ${({show}) => show ? "unset" : "hidden"};
  `,
  AppMain = styled.main`
    background-color: white;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: black;
    text-align: center;
  `,
  AppLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 4.5vmin;
    text-transform: capitalize;
  `,
  H1 = styled.h1`
    text-transform: capitalize;
  `,
  Ul = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
  `,
  Li = styled.li`
    list-style: none;
    overflow: hidden;
    border-radius: 5px;
    display: flex;

    a {
      padding: 1vw;
      line-height: 1.2;
    }

    &:hover {
      background: darkred;
      a {
        color: white;
      }
    }

    &:active {
      background: brown;
      a {
        color: white;
      }
    }
  `,
  Nav = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;

  ${Li} {
    margin: 10px 0;
  }
`,
  Grid = styled(Ul)`
    grid-template-columns: 1fr 1fr;
    display: grid;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `,
  GiantCardContent = styled.div`
    width: ${({fullSize}) => fullSize ? "90%" : "45%" };
    padding: 2.5%;
    text-align: left;
    float: right;

    a {
      text-transform: capitalize;
      color: white;
    }

    p:first-child {
      margin-top: 0;
    }
  `,
  GiantCard = styled.div`
    width: 80%;
    margin: auto;
    background: darkred;
    border-radius: 10px;
    display: flex;
    color: white;
  `,
  Card = styled(Link)`
    position: relative;
    display: flex;
    color: white;
    text-decoration: none;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      padding: 20px;
    }
    @media (min-width: 1024px) {
      padding: 20px;
    }
  `,
  Picture = styled.picture`
    opacity: 0.8;
    display: block;
  `,
  GiantPicture = styled(Picture)`
    width: 45%;
    padding: 2.5%;
    float: left;
  `,
  Image = styled.img`
    width: 100%;
  `,
  ContainerTitle = styled.div`
    width: 100%;
    background: rgb(0 0 0 / 50%);
    top: 0;
    left: 0;
    ${({ positionAbsolute }) => positionAbsolute && "position: absolute"}
  `,
  GridItem = styled(Li)`
    background: darkred;
    box-shadow: 1px 1px 25px black;
    margin: 20px;
    padding: unset;
    color: white;

    &:hover {
      box-shadow: 1px 1px 10px black;
      transition: ease-in-out 0.5s;

      ${Picture} {
        opacity: 1;
        transition: ease-in 0.3s;
      }

      ${ContainerTitle} {
        background: rgb(0 0 0 / 80%);
        transition: ease-in-out 0.5s;
      }
    }
  `,
  H2 = styled.h2`
    margin: unset;
    font-size: 3vw;
    text-shadow: 0px 0px 5px black;
    text-align: left;
    line-break: anywhere;
    padding: 10px 10% 10px 10%;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 100%;
      padding: 30px 30px 10px 30px;
    }

    @media (min-width: 1024px) {
      font-size: 100%;
      padding: 30px 30px 10px 30px;
    }
  `;

export {
  Loading,
  Button,
  Message,
  Paginate,
  InputContainer,
  Header,
  Logo,
  BackgroundImageForTheLogo,
  AppMain,
  AppLink,
  H1,
  Ul,
  Li,
  Nav,
  Grid,
  GiantCardContent,
  GiantCard,
  Card,
  GiantPicture,
  Picture,
  Image,
  ContainerTitle,
  GridItem,
  H2,
};
