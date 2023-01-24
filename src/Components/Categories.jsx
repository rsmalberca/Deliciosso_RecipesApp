import React from "react";
import {
  GiFullPizza,
  GiHamburger,
  GiFastNoodles,
  GiChopsticks,
} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <GiFullPizza />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <GiHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiFastNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Categories;
