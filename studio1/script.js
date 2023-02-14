(function () {
  "use script";
  console.log("reading js");

  const intro = document.querySelector("#intro");
  const second = document.querySelector("#second");
  const output = document.querySelector("#output");
  const btn1 = document.querySelector("#btn1");
  const pokemon = document.querySelector("#pokemon")
//   const btn2 = document.querySelector("#btn2");

  btn1.addEventListener("click", function () {
    intro.className = "hidden";
    second.className = "showing";
    // pokemon.className = "showing";
  });
  //   attempting back button
  //   btn2.addEventListener("click", function () {
  //     intro.className = "showing";
  //     second.className = "hidden";
  //   });

  intro.addEventListener("submit", function (event) {
    event.preventDefault();
    output.className = "showing";
    const name = document.querySelector("#name").value;
    const place1 = document.querySelector("#place1").value;
    const occupation = document.querySelector("#occupation").value;
    const place2 = document.querySelector("#place2").value;
    const myIntro = `Welcome ${name}, to the ${place1} Lab! So you want to be a Pokémon ${occupation}, eh? 
    Well, you'll need a partner and you've come to the place just for that! Let's find the perfect match to begin your journey through the ${place2} region!`;
    
    output.innerHTML = myIntro;
  });

  second.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameP = document.querySelector("#nameP").value;
    const type = document.querySelector("#type").value;
    const animal = document.querySelector("#animal").value;
    const place3 = document.querySelector("#place3").value;
    const verb = document.querySelector("#verb").value;
    const bpart = document.querySelector("#bpart").value;
    const adj1 = document.querySelector("#adj1").value;
    const adj2 = document.querySelector("#adj2").value;
    const myPokemon = `${nameP}, the ${type}-type ${animal} pokémon. It spends its time in the${place3}, and enjoys ${verb}. 
    It uses its ${bpart} to launch a ${adj1} attack, and it is quite powerful. It is a ${adj2} pokemon. It should be the perfect fit for what you're looking for!`;
    
    // pokemon.src = "images/pokemon.png"
    output.innerHTML = myPokemon;
  });


})();
