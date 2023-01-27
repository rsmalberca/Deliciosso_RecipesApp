import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Recipe = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.85rem;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const Card = styled.div`
  img {
    width: 100 %;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #7d7d7d, #15c7b6);

    svg {
      color: white;
    }
  }
`;

export const DetailContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }

  img {
    border-radius: 2rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 1rem;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

export const Description = styled.div`
  margin-left: 10rem;
  li {
    font-size: 1rem;
    line-height: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  h3 {
    font-size: 1rem;
    color: black;
    font-weight: normal;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Lobster", cursive;
  margin-left: 0.5rem;
`;

export const Nav = styled.div`
  padding: 2rem 0rem 1rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(82, 82, 82);
  svg {
    font-size: 2rem;
  }
  div {
    font-size: 0.85rem;
  }
`;
