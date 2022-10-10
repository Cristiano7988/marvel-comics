import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../../static/marvel-logo.png";
import ReactPaginate from "react-paginate";

const Paginate = styled(ReactPaginate)`
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: unset;

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
    padding: 1vw;

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
  Card = styled.div`
    position: relative;

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
  Grid,
  Card,
  Picture,
  Image,
  ContainerTitle,
  GridItem,
  H2,
};
