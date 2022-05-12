import "./styles/App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe";
import Recipe from "./components/Recipe";
import { useShowRecipeList } from "./components/firebase";
//import EditRecipes from "./components/EditRecipes";

function App() {
  const navLinks = [
    { linkText: "All recipes", route: "/" },
    { linkText: "Add recipe", route: "/add" },
    // { linkText: "Edit recipes", route: "/edit" },
  ];
  const [myRecipe, setMyRecipe] = useState({
    recipeName: "",
    description: "",
    img: "",
    ingredients: [{ ingredient: "" }],
    method: [{ step: "" }],
    type: "",
  });
  const [myRecipes, setMyRecipes] = useState([
    {
      recipeId: "",
      recipeName: "",
      description: "",
      img: "",
      type: "",
    },
  ]);
  const [selectedRecipeId, setSelectedRecipeId] = useState("");

  useShowRecipeList(setMyRecipes);

  return (
    <Container fluid>
      <header>
        <Nav navLinks={navLinks} />
      </header>
      <Banner />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <AllRecipes
                title="All recipes"
                myRecipes={myRecipes}
                setMyRecipes={setMyRecipes}
                setSelectedRecipeId={setSelectedRecipeId}
                selectedRecipeId={selectedRecipeId}
              />
            }
            exact
          />
          <Route
            path="/add"
            element={
              <AddRecipe
                title="Add recipe"
                myRecipe={myRecipe}
                setMyRecipe={setMyRecipe}
              />
            }
            exact
          />
          {/* <Route
            path="/edit"
            element={<EditRecipes title="Edit recipe" />}
            exact
          /> */}
          <Route
            path="/recipe"
            element={
              <Recipe
                title={myRecipe.recipeName}
                selectedRecipeId={selectedRecipeId}
              />
            }
            exact
          />
        </Routes>
      </main>
    </Container>
  );
}

export default App;
