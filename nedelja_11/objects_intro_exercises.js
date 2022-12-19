//1.Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

let favouriteCoffee = {
  name: "Double Espresso",
  strength: "Strong",
  flavour: "Vanilla",
  milk: "50ml",
  sugar: "4 teaspoons",
};

//2.Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.
let favoriteMovie = {
  title: "KnivesOut",
  actors: [
    "Daniel Craig",
    "Ana de Armas",
    "Chris Evans",
    "Joseph Gordon-Lewitt",
  ],
  director: "Rian Johnson",
  genre: "Thriller",
  popularity: "7.9/10 IMDB",
};

//3.Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

// function createObject(
//   description,
//   programmingLanguage,
//   gitRepository,
//   booleanStatus
// ) {
//   let project = {};

//   (project["description"] = description),
//     //
//     (project["programmingLanguage"] = programmingLanguage),
//     //
//     (project["gitRepository"] = gitRepository),
//     //
//     (project["booleanStatus"] = booleanStatus),
//     //
//     (project["printRepository"] = (function (gitRepository) {
//       return `This is project's git repository: ${gitRepository}`;
//     })(gitRepository)),
//     //
//     //
//     (project.writtenInJS = (function (programmingLanguage) {
//       if (
//         programmingLanguage === "Javascript" ||
//         programmingLanguage === "javascript" ||
//         programmingLanguage === "JS" ||
//         programmingLanguage === "js"
//       ) {
//         return true;
//       } else return false;
//     })(programmingLanguage)),
//     //
//     //
//     (project["inDevelopment"] = (function (booleanStatus) {
//       return booleanStatus;
//     })(booleanStatus));
//   //
//   //
//   return project;
// }

function Object(
  description,
  programmingLanguage,
  gitRepository,
  booleanStatus
) {
  (this["description"] = description),
    //
    (this["programmingLanguage"] = programmingLanguage),
    //
    (this["gitRepository"] = gitRepository),
    //
    (this["booleanStatus"] = booleanStatus),
    //
    (this["printRepository"] = (function (gitRepository) {
      return `This is project's git repository: ${gitRepository}`;
    })(gitRepository)),
    //
    //
    (this.writtenInJS = (function (programmingLanguage) {
      if (
        programmingLanguage === "Javascript" ||
        programmingLanguage === "javascript" ||
        programmingLanguage === "JS" ||
        programmingLanguage === "js"
      ) {
        return true;
      } else return false;
    })(programmingLanguage)),
    //
    //
    (this["inDevelopment"] = (function (booleanStatus) {
      return booleanStatus;
    })(booleanStatus));
  //
  //
}

let project = new Object("programming project", "JS", "Aojdanic/BIT", "true");

console.log(project);
console.log(JSON.stringify(project));
//4. Write a function that creates an object that represents a culinary recipe. Each recipe is
//described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
//preparing time, preparing instruction.
//○ Add a method that prints out all the ingredients necessary for the meal
//preparation.
//○ Add a method that checks if a meal can be prepared in under 15 minutes.
//○ Add a method that changes the type of cuisine to the given value.
//○ Add a method that delete a given ingredient from the list of ingredients.

function cookingRecipe(
  name,
  typeOfCuisine,
  complexity,
  ingredients,
  time,
  instructions
) {
  return {
    name: name,
    kitchen: typeOfCuisine,
    complexity: complexity,
    visibleIngredients: (function (ingredients) {
      let sum = "";
      for (let i = 0; i < ingredients.length; i++) {
        if (i != ingredients.length - 1) {
          sum += ingredients[i];
          sum += "," + " ";
        } else if (i == ingredients.length - 1) {
          sum += ingredients[i];
          console.log(sum);
        }
      }
      return sum;
    })(ingredients),
    listOfIngredients: ingredients,
    preparingTime: time,
    preparingInstructions: instructions,
    listOfIngredients: (function (ingredients, dontIncludeThisIngredient) {
      let newIngredients = [];
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] == dontIncludeThisIngredient) {
          continue;
        } else {
          newIngredients.push(ingredients[i]);
        }
      }
      return newIngredients;
    })(ingredients, "cheese"),
    checkPrepTime: (function (time) {
      if (time < 15) {
        return true;
      } else return false;
    })(time),
    kitchen: (function () {
      return "Italian";
    })(),
  };
}

let recipe = cookingRecipe(
  "cheesecake",
  "american",
  5,
  ["eggs", "milk", "cheese"],
  10,
  "mix eggs and milk then bake 15 minutes, add cheese"
);

console.log(recipe);
console.log(JSON.stringify(recipe));
