import React from "react";
import {
  GiFullPizza,
  GiHamburger,
  GiFastNoodles,
  GiChopsticks,
} from "react-icons/gi";
import { List, StyledNavLink } from "../Components/reusable_components";

function Categories() {
  return (
    <List>
      <StyledNavLink to={"/cuisine/Italian"}>
        <GiFullPizza />
        <h4>Italian</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/American"}>
        <GiHamburger />
        <h4>American</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/Thai"}>
        <GiFastNoodles />
        <h4>Thai</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </StyledNavLink>
    </List>
  );
}

export default Categories;
