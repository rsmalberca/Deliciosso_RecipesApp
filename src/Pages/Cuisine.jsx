import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
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
  return <div>Cuisine</div>;
}

export default Cuisine;
