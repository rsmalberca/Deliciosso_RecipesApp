import axios from "axios";
import { useEffect } from "react";
const { REACT_APP_API_KEY } = process.env;

function Popular() {
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const apiData = await axios(
      `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=12`
    );
    console.log(apiData.data);
    // return apiData.data;
  };

  return <div>Popular</div>;
}

export default Popular;
