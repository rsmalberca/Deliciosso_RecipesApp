import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Card } from "../Components/reusable_components";
const { REACT_APP_API_KEY } = process.env;

function Searched() {
  let params = useParams();
  const [searched, setSearched] = useState([1]);

  const getSearched = async (name) => {
    if (name) {
      const apiData = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&number=18&query=${name}`
      );
      const recipe = apiData.data.results;
      setSearched(recipe);
    }
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return searched.length ? (
    <Grid>
      {searched.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Card>
        );
      })}
    </Grid>
  ) : (
    <p>No recipes match the search</p>
  );
}

export default Searched;
