import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Card } from "../Components/reusable_components";
const { REACT_APP_API_KEY } = process.env;

function Cuisine() {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);
  const getCuisine = async (name) => {
    const apiData = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&number=15&cuisine=${name}`
    );
    const recipe = apiData.data.results;
    setCuisine(recipe);
  };

  useEffect(() => {
    getCuisine(params.category);
  }, [params.category]);
  return (
    <Grid>
      {cuisine.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
