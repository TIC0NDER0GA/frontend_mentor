import omelet from "../../assets/image-omelette.jpeg";
import './recipe_page_css/RecipePage.css'

let RecipePage = () => {
  return (
    <div className=" flex flex-col items-center bg-[var(--recipe-stone-100)] text-[var(--recipe-stone-600)] text-[16px]">
      <section className="min-h-screen flex flex-col justify-center w-[43rem] bg-[var(--blog-white)] p-[2.0rem] rounded-[1rem] m-[4.0rem]">
        <img src={omelet} className="rounded-[1rem] mb-[2.5rem]"></img>

        <h1 className="font-[YoungSerif] font-bold text-[2.5rem] text-[var(--recipe-stone-900)]">
          Simple Omelette Recipe
        </h1>

        <p className="my-[1.0rem] ">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <PrepTime />

        <Ingredients />

        <Instructions />

        <Nutrition />
      </section>
    </div>
  );
};

let PrepTime = () => {
  return (
    <div className="flex flex-col  mb-[1.0rem] bg-[var(--recipe-rose-50)] rounded-[1rem] p-[1.5rem]">
      <h3 className="mb-[.5rem] text-[1.3rem] font-semibold text-[var(--recipe-rose-800)] ">
        
        Preparation time
      </h3>

      <ul className="list-disc space-y-[.5rem] pl-[1.3rem]">
        <li>
          <b>Total:</b> Approximately 10 minutes
        </li>

        <li>
          
          <b>Preparation:</b> 5 minutes
        </li>

        <li>
          <b>Cooking:</b> 5 minutes
        </li>
      </ul>
    </div>
  );
};

let Ingredients = () => {
  return (
    <div className="slight-border pb-[2.5rem]">
      <h2 className="h2-recipe">Ingredients</h2>

      <ul className="list-disc space-y-[.5rem] pl-[1.4rem]">
        <li>2-3 large eggs</li>

        <li>Salt, to taste</li>

        <li>Pepper, to taste</li>

        <li>1 tablespoon of butter or oil</li>

        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
};

let Instructions = () => {
  return (
    <div className="slight-border pb-[2.5rem]">
      <h2 className="h2-recipe">Instructions</h2>

      <ol className="list-decimal space-y-[.5rem]  ">
        <li>
          <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and
          pepper until they are well mixed. You can add a tablespoon of water or
          milk for a fluffier texture.
        </li>

        <li>
          <b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add
          butter or oil.
        </li>

        <li>
          <b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the
          eggs. Tilt the pan to ensure the eggs evenly coat the surface.
        </li>

        <li>
          <b>Add fillings optional:</b> When the eggs begin to set at the edges but
          are still slightly runny in the middle, sprinkle your chosen fillings
          over one half of the omelette.
        </li>

        <li>
          <b>Fold and serve:</b> As the omelette continues to cook, carefully lift one
          edge and fold it over the fillings. Let it cook for another minute,
          then slide it onto a plate.
        </li>

        <li> <b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.</li>
      </ol>
    </div>
  );
};

let Nutrition = () => {
  return (
    <>
      <div>
        <h2 className="h2-recipe">Nutrition</h2>

        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <table className="mt-[1.0rem] table-fixed w-full">
            <tr className="slight-border ">
                <td className="labels">Calories</td> 
                <td className="units">277kcal</td>
            </tr>
            <tr className="slight-border ">
                <td className="labels">Carbs</td> 
                <td className="units">0g</td>
            </tr>
            <tr className="slight-border ">
                <td className="labels">Protein</td> 
                <td className="units">20g</td>
            </tr>
            <tr className="">
                <td className="labels">Fat</td> 
                <td className="units">22g</td>
            </tr>
        </table>
      </div>
    </>
  );
};

export default RecipePage;
