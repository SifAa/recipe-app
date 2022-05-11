import { Row, Col } from "react-bootstrap";

export default function Recipe(props) {
  return (
    <Col>
      <h1 className="recipeName">{props.myRecipe.recipeName}</h1>
      <Row>
        <Col md={8} className="recipeDecription"></Col>
        <Col md={4} className="recipeImg"></Col>
      </Row>
      <Row>
        <Col md={4} className="recipeIngredients"></Col>
        <Col md={8} className="recipeMethod"></Col>
      </Row>
    </Col>
  );
}
