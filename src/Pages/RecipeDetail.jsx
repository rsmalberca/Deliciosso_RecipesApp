import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  DetailContainer,
  Button,
  Description,
} from "../Components/reusable_components";
const { REACT_APP_API_KEY } = process.env;

function RecipeDetail() {
  let params = useParams();
  const [detail, setDetail] = useState({});
  const [active, setActive] = useState("instructions");

  const getRecipeDetail = async (id) => {
    const apiData = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_API_KEY}`
    );
    setDetail(apiData.data);
  };

  const buttonClickHandler = (e) => {
    e.preventDefault();
    setActive(e.target.value);
  };

  useEffect(() => {
    getRecipeDetail(params.id);
  }, [params.id]);

  return (
    <DetailContainer>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt={detail.title} />
      </div>
      <Description>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={buttonClickHandler}
          value="instructions"
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={buttonClickHandler}
          value="ingredients"
        >
          Ingredients
        </Button>
        {active === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: detail.instructions }}></h3>
          </div>
        ) : (
          <ul>
            {detail.extendedIngredients.map((item) => {
              return <li key={item.id}>{item.original}</li>;
            })}
          </ul>
        )}
      </Description>
    </DetailContainer>
  );
}

export default RecipeDetail;
