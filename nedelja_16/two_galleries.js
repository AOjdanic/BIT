"use strict";

const imgLinks1 = [
  "./universe/11007615.jpg",
  "./universe/7061 (1).jpg",
  "./universe/a-super-detailed-fantasy-world-.-been-there-in-my-collection-since-years-wallpaper_.jpg",
];

const imgLinks2 = [
  "./universe/deer-looking-at-universe-0ysmcr79mtrcled2-0ysmcr79mtrcled2.jpg",
  "./universe/fantasy-forest-wallpaper.jpg",
  "./universe/wp2567205.jpg",
];

for (let j = 0; j < 2; j++) {
  var div = $("<div></div>");
  $(div).css("margin", "auto");
  $(div).css("display", "flex");
  $(div).css("max-width", "1800px");
  $(div).css("margin-top", "50px");
  $("body").append(div);

  $(j == 0 ? imgLinks1 : imgLinks2).each(function (i, imgLink) {
    let img = $("<img/>");
    $(img).attr("src", imgLink);
    $(img).css("max-width", "600px");
    $(div).append(img);
  });
}

let secondImgFirstDiv = $("div:first").children()[1];
$(secondImgFirstDiv).addClass("selected");
$(".selected").css("border", "5px solid red");

let bordersChanged = false;

const changeBorders = function () {
  let secondImgSecondDiv = $(secondImgFirstDiv).parent().next().children()[1];
  ////

  $(".selected").css("border", "unset");

  $(bordersChanged ? secondImgSecondDiv : secondImgFirstDiv).removeClass(
    "selected"
  );
  $(bordersChanged ? secondImgFirstDiv : secondImgSecondDiv).addClass(
    "selected"
  );
  $(".selected").css("border", "5px solid red");
  bordersChanged = !bordersChanged;
};

//creating small button for changing borders

let section = $("<section>");

/////////////////////////////////////////////////////////////////////

let text = $("<h1>Press this button to switch picture borders</h1>");
$(text).css({
  "max-width": "fit-content",
  margin: "auto",
  "margin-bottom": "20px",
  "margin-top": "20px",
  "font-size": "40px",
  color: "orange",
});

$(section).append(text);

/////////////////////////////////////////////////////////////////////

let button = $("<button type='submit'>Click here</button>");
$(button).css({
  "max-width": "150px",
  padding: "10px",
  "font-size": "20px",
  margin: "auto",
  "border-radius": "8px",
  color: "white",
  "font-weight": "bolder",
  "background-color": "red",
});
$(button).on("click", changeBorders);

$(section).append(button);

/////////////////////////////////////////////////////////////////////

$(section).css({
  margin: "auto",
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
});

$("body").prepend(section);

$("body").css("background-color", "rgb(100,100,100)");
