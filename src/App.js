import "./styles/App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe";
//import EditRecipes from "./components/EditRecipes";

function App() {
  const navLinks = [
    { linkText: "All recipes", route: "/" },
    { linkText: "Add recipe", route: "/add" },
    // { linkText: "Edit recipes", route: "/edit" },
  ];
  const [myRecipe, setMyRecipe] = useState({
    //recipeId: "",
    recipeName: "",
    description: "",
    img: "",
    ingredients: [{ ingredient: "" }],
    method: [{ step: "" }],
    type: "",
  });
  const [myRecipes, setMyRecipes] = useState({
    //recipeId: "",
    recipeName: "",
    description: "",
    img: "",
    type: "",
  });

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
            element={<EditRecipes title="Edit recipes" />}
            exact
          /> */}
          {/* <Route
            path="/{myRecipe.recipeId}"
            element={<Recipe title="{myRecipe.recipeName}" myRecipes={myRecipes} />}
            exact
          /> */}
        </Routes>
      </main>
    </Container>
  );
}

export default App;
