window.onload = function() {
  var saladButton = document.getElementById("salads-button");
  var saladInfo = document.getElementById("salad-info");
  var soupButton = document.getElementById("soups-button");
  var soupInfo = document.getElementById("soups-info");
  var starterButton = document.getElementById("starters-button");
  var starterInfo = document.getElementById("starters-info");
  var sandwichButton = document.getElementById("sandwich-button");
  var sandwichInfo = document.getElementById("sandwich-info");

  saladButton.addEventListener("click", function(){
    saladInfo.classList.toggle("open");
  });

  soupButton.addEventListener("click", function(){
    soupInfo.classList.toggle("open");
  });

  starterButton.addEventListener("click", function(){
    starterInfo.classList.toggle("open");
  });

  sandwichButton.addEventListener("click", function(){
    sandwichInfo.classList.toggle("open");
  });
}