(function () {
  "use script";
  console.log("reading js");

  // Reloading page takes you back to the top.
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  // Clicking on the anchor tag smoothly scrolls to first section.
  document.querySelectorAll('begin').forEach(anchor => {
    anchor.addEventListener('click', function (start) {
      start.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
    })
  });

  //array of my five images
  const myImages = [
    "fire.jpeg",
    "puddle.jpeg",
    "road.jpeg",
    "lamp.jpeg",
    "library.jpeg",
  ];
  const myText = [
    "fire",
    "puddle",
    "road",
  ];
  let currentImage = 0;
  const slide = document.getElementById('image');
  const text = document.querySelector('.text');
  // console.log(text);

  // next button
  document.getElementById("next").addEventListener('click', nextPhoto);

    function nextPhoto() {
      console.log("clicked next");
      currentImage++;
      if (currentImage > myImages.length - 1) {
        currentImage = 0;
      }
      slide.src = `images/${myImages[currentImage]}`;
      console.log(myText[currentImage]);
      text.innerHTML = myText[currentImage];
      // console.log(text);
    }
  
  // previous button
  document.getElementById("prev").addEventListener('click', previousPhoto);
    function previousPhoto(){
      console.log("clicked previous");
      currentImage--;
      if (currentImage < 0){
        currentImage = myImages.length - 1;
      }
      slide.src = `images/${myImages[currentImage]}`
      text.innerHTML = myText[currentImage];
    }
})();
  