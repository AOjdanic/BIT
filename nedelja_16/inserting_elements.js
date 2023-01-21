"use strict";

const imgLinks = [
  "./universe/11007615.jpg",
  "./universe/7061 (1).jpg",
  "./universe/a-super-detailed-fantasy-world-.-been-there-in-my-collection-since-years-wallpaper_.jpg",
  "./universe/deer-looking-at-universe-0ysmcr79mtrcled2-0ysmcr79mtrcled2.jpg",
  "./universe/fantasy-forest-wallpaper.jpg",
  "./universe/wp2567205.jpg",
];

$(imgLinks).each(function (i, imgLink) {
  let img = $("<img/>");
  $(img).attr("src", imgLink);
  let height = Math.floor(Math.random() * (450 - 200 + 1)) + 200;
  let width = Math.floor(Math.random() * (450 - 100 + 1)) + 100;
  $(img).css("width", width + "px");
  $(img).css("height", height + "px");

  $("body").append(img);
});

let title = $("<h1>The Universe Gallery</h1>");
$("body").prepend(title);

$("img").each(function (i, img) {
  let width = parseInt($(this).css("width"));
  console.log(width);
  if (width < 200) {
    $(img).css("border", "7px solid green");
  } else return false;
});
