import RecipeForm from "./RecipeForm";
import { createRecipe } from "../hooks/firebase";

export default function AddRecipe(props) {
  function resetMyRecipe() {
    props.setMyRecipe({
      recipeName: "",
      description: "",
      img: "",
      ingredients: [{ ingredient: "" }],
      method: [{ step: "" }],
      type: "",
    });
  }

  const submitForm = () => {
    //console.log(props.myRecipe);
    createRecipe(props.myRecipe);
  };
  return (
    <div className="col-12 content" onLoad={resetMyRecipe}>
      <h1>Add new recipe</h1>
      <RecipeForm
        myRecipe={props.myRecipe}
        setMyRecipe={props.setMyRecipe}
        submitForm={submitForm}
      />
    </div>
  );
}
