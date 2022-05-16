import { Row, Col, Button, Image } from "react-bootstrap";
import { readRecipe, deleteRecipe } from "../hooks/firebase";
import placeholderImg from "../images/placeholder.jpg";
import { useNavigate } from "react-router-dom";

export default function Recipe(props) {
  //const docID = window.location.pathname.slice(1)
  const navigate = useNavigate();
  readRecipe(props.selectedRecipeId, props.setMyRecipe);
  const deletingRecipe = () => {
    deleteRecipe(props.selectedRecipeId);
    navigate(-1);
  };
  return (
    <Col className="content">
      <h1 className="recipeName">{props.myRecipe.recipeName}</h1>
      <Row className="recipe--about">
        <Col sm={7} md={8} className="recipeDecription">
          {props.myRecipe.description}
        </Col>
        <Col sm={5} md={4} className="recipeImg">
          <Image
            src={
              props.myRecipe.img === "" ? placeholderImg : props.myRecipe.img
            }
          />
        </Col>
      </Row>
      <Row>
        <Col sm={5} md={4} className="recipeIngredients">
          {props.myRecipe.ingredients.map((ingredient, index) => {
            return <p key={"ingredient" + index}>{ingredient.ingredient}</p>;
          })}
        </Col>
        <Col sm={7} md={8} className="recipeMethod">
          {props.myRecipe.method.map((method, index) => {
            return <p key={"method" + index}>{method.step}</p>;
          })}
        </Col>
      </Row>
      <Button variant="danger" onClick={deletingRecipe}>
        Delete
      </Button>
    </Col>
  );
}
