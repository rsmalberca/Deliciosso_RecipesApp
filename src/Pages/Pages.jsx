import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";
import RecipeDetail from "./RecipeDetail";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/Deliciosso_RecipesApp/" element={<Home />} />
        <Route
          path="/Deliciosso_RecipesApp/cuisine/:category"
          element={<Cuisine />}
        />
        <Route
          path="/Deliciosso_RecipesApp/searched/:search"
          element={<Searched />}
        />
        <Route
          path="/Deliciosso_RecipesApp/recipe/:id"
          element={<RecipeDetail />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
