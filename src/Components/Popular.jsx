import axios from "axios";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Recipe, Gradient, Wrapper } from "./reusable_components";
import { Link } from "react-router-dom";
const { REACT_APP_API_KEY } = process.env;

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const apiData = await axios(
        `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=15`
      );
      localStorage.setItem("popular", JSON.stringify(apiData.data.recipes));
      setPopular(apiData.data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: true,
            drag: "free",
            gap: "4rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Recipe>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Recipe>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Popular;
