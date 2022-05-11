import RecipeForm from "./RecipeForm";
import { createRecipe } from "./firebase";

export default function AddRecipe(props) {
  const submitForm = () => {
    //console.log(props.myRecipe);
    createRecipe(props.myRecipe);
  };
  return (
    <div className="col-12 content">
      <h1>Add new recipe</h1>
      <RecipeForm
        myRecipe={props.myRecipe}
        setMyRecipe={props.setMyRecipe}
        submitForm={submitForm}
      />
    </div>
  );
}
