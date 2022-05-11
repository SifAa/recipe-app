export default function AllRecipes() {
  // Search function (copied from other assignment, needs to be edited)
  // const search = document.querySelector('#search');
  //  search.addEventListener("keyup", () => {
  //     let filter = search.value.toUpperCase();
  //     let lis = document.querySelectorAll('.search');

  //     lis.forEach((name)=>{
  //         if (name.innerText.toUpperCase().indexOf(filter) >= 0) {

  //             name.parentElement.style.display = 'list-item';
  //         } else{
  //             name.parentElement.style.display = 'none';
  //         }
  //     })
  // })
  return (
    <div className="col-12 content">
      Here is going to be a list of clickable cards with recipes and their
      general description. Maybe also a search box.
    </div>
  );
}
