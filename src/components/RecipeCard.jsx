import { Card, Col } from "react-bootstrap";
import placeholderImg from "../images/placeholder.jpg";

export default function RecipeCard(props) {
  return (
    <Card className="recipeCard" id={props.recipe.recipeId}>
      <Card.Body className="col-12 col-sm-8" id={props.recipe.recipeId}>
        <Card.Title className="card--name search" id={props.recipe.recipeId}>
          {props.recipe.recipeName}
        </Card.Title>
        <Card.Text
          className="card--description search"
          id={props.recipe.recipeId}
        >
          {props.recipe.description}
        </Card.Text>
        {/* Make something fun with tag if time */}
      </Card.Body>
      <Col
        //xs={{ order: "first" }}
        sm={4}
        className="d-none d-sm-block image-box"
        id={props.recipe.recipeId}
      >
        <Card.Img
          src={props.recipe.img === "" ? placeholderImg : props.recipe.img}
          id={props.recipe.recipeId}
        />
      </Col>
    </Card>
  );
}
