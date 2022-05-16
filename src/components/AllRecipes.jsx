import RecipeCard from "./RecipeCard";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AllRecipes(props) {
  const [query, setQuery] = useState("");

  const saveRecipeID = (e) => {
    props.setSelectedRecipeId(e.target.id);
  };

  return (
    <Col className="content">
      <h1 className="pageTitle">All recipes</h1>
      <Row>
        <input
          className="col-12"
          type="text"
          id="search"
          placeholder="Search for recipe.."
          onChange={(event) => setQuery(event.target.value)}
        />
      </Row>
      <Col className="recipe--list">
        {props.myRecipes
          .filter((recipe) => {
            if (query === "") {
              return recipe;
            } else if (
              recipe.recipeName.toLowerCase().includes(query.toLowerCase()) ||
              recipe.description.toLowerCase().includes(query.toLowerCase()) ||
              recipe.type.toLowerCase().includes(query.toLowerCase())
            ) {
              return recipe;
            }
          })
          .map((recipe) => {
            return (
              <Link
                key={recipe.recipeId}
                to="/recipe"
                id={recipe.recipeId}
                onClick={saveRecipeID}
              >
                <RecipeCard recipe={recipe} />
              </Link>
            );
          })}
      </Col>
    </Col>
  );
}
