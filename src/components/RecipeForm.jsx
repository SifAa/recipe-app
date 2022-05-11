import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function RecipeForm(props) {
  const [ingredientList, setIngredientList] = useState([{ ingredient: "" }]);
  const [methodList, setMethodList] = useState([{ step: "" }]);
  const selectOptions = [
    "Baking",
    "Desserts",
    "Drinks",
    "Meat",
    "Seafood",
    "Vegetarian",
    "Salads",
    "Sauce",
    "Sides",
  ];

  // handle input change
  const handleListChange = (index, event) => {
    if (event.target.name === "ingredient") {
      const data = [...ingredientList];
      data[index][event.target.name] = event.target.value;
      setIngredientList(data);
      props.setMyRecipe({
        ...props.myRecipe,
        ingredients: data,
      });
    }
    if (event.target.name === "step") {
      const data = [...methodList];
      data[index][event.target.name] = event.target.value;
      setMethodList(data);
      props.setMyRecipe({
        ...props.myRecipe,
        method: data,
      });
    }
  };
  const handleChange = (event) => {
    const value = event.target.value;
    props.setMyRecipe({
      ...props.myRecipe,
      [event.target.name]: value,
    });
  };

  // add buttons
  const addFields = (event) => {
    event.preventDefault();
    if (event.target.name === "ingredient") {
      const newIngredient = { ingredient: "" };
      setIngredientList([...ingredientList, newIngredient]);
    }
    if (event.target.name === "method") {
      const newStep = { step: "" };
      setMethodList([...methodList, newStep]);
    }
  };

  // remove buttons
  const removeFields = (index, event) => {
    event.preventDefault();
    if (event.target.name === "ingredient") {
      const data = [...ingredientList];
      data.splice(index, 1);
      setIngredientList(data);
    }
    if (event.target.name === "method") {
      const data = [...methodList];
      data.splice(index, 1);
      setMethodList(data);
    }
  };

  // Submit form
  const submit = (e) => {
    e.preventDefault();
    props.submitForm();
    props.setMyRecipe({
      //recipeId: "",
      recipeName: "",
      description: "",
      img: "",
      ingredients: [{ ingredient: "" }],
      method: [{ step: "" }],
      type: "",
    });
    setIngredientList([{ ingredient: "" }]);
    setMethodList([{ step: "" }]);
  };

  return (
    <div className="col-12">
      <Form>
        <Form.Control type="hidden" id="RecipeID" />
        {/* This is document ID used for editing function */}
        <Form.Group className="mb-3" controlId="RecipeName">
          <Form.Label>Recipe name</Form.Label>
          <Form.Control
            name="recipeName"
            type="text"
            value={props.myRecipe.RecipeName}
            onChange={(event) => handleChange(event)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="RecipeDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Please write a short description of the recipe"
            value={props.myRecipe.description}
            onChange={(event) => handleChange(event)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="RecipeImg">
          <Form.Label>Image</Form.Label>
          <Form.Control name="img" type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="RecipeIngredients">
          <Form.Label>Ingredients</Form.Label>
          {ingredientList.map((input, index) => {
            return (
              <div className="input-group mb-2" key={index}>
                <Form.Control
                  type="text"
                  name="ingredient"
                  value={input.ingredient}
                  onChange={(event) => handleListChange(index, event)}
                  placeholder="For more ingredients click add"
                  required
                />
                {ingredientList.length !== 1 && (
                  <Button
                    variant="danger"
                    name="ingredient"
                    onClick={(event) => removeFields(index, event)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            );
          })}
          <div className="text-right">
            <Button
              variant="secondary"
              name="ingredient"
              onClick={(event) => addFields(event)}
            >
              Add
            </Button>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="RecipeMethod">
          <Form.Label>Method</Form.Label>
          {methodList.map((input, index) => {
            return (
              <div className="input-group mb-2" key={index}>
                <Form.Control
                  as="textarea"
                  name="step"
                  value={input.method}
                  onChange={(event) => handleListChange(index, event)}
                  placeholder="Click add for more steps"
                  required
                />
                {methodList.length !== 1 && (
                  <Button
                    variant="danger"
                    name="method"
                    onClick={(event) => removeFields(index, event)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            );
          })}
          <div className="text-right">
            <Button
              variant="secondary"
              name="method"
              onClick={(event) => addFields(event)}
            >
              Add
            </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="RecipeType">
          <Form.Label>Recipe type</Form.Label>
          <Form.Select
            name="type"
            onChange={handleChange}
            value={props.myRecipe.type}
            required
          >
            <option value="0">Please choose what type of recipe</option>
            {selectOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
