import axios from "axios";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Recipe, Gradient, Wrapper } from "./reusable_components";
const { REACT_APP_API_KEY } = process.env;

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const apiData = await axios(
        `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=16&tags=vegetarian`
      );
      localStorage.setItem("veggie", JSON.stringify(apiData.data.recipes));
      setVeggie(apiData.data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            drag: "free",
            gap: "4rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Recipe>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Recipe>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Veggie;
