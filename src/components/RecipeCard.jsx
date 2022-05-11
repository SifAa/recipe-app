import { Card } from "react-bootstrap";
import placeholderImg from "../images/placeholder";

export default function RecipeCard(prop) {
  // const url = http://localhost:3000 or http://www.website.com
  // card.img src maybe {url+require(prop.img)}
  return (
    <div className="RecipeCard">
      <Card>
        <Card.Body>
          <Card.Title>{prop.recipeName}</Card.Title>
          <Card.Text>{prop.description}</Card.Text>
          {/* Make something fun with tag if time */}
        </Card.Body>
        <Card.Img src={prop.img === "" ? placeholderImg : prop.img} />
      </Card>
    </div>
  );
}
