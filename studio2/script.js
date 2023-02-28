(function () {
  "use script";
  console.log("reading js");

  // Reloading page takes you back to the top.
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  // Clicking on the anchor tag smoothly scrolls to first section.
  document.querySelectorAll('#start').forEach(anchor => {
    anchor.addEventListener('click', function (start) {
      start.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
    })
  });
  let slideIndex = 1;
  showImages(slideIndex);
  // Next/previous controls
  function plusImages(n) {
    showImages(slideIndex += n);
  }
  // const next = document.querySelector('.next');
  // next.addEventListener('click', function plusImages(n){
  //   showImages(imgIndex += n)
  // });

  // current image
  function currentImage(n) {
    showImages(slideIndex = n);
  }
  function showImages(n) {
    let i;
    let images = document.getElementsByClassName("myImages");
    let dots = document.getElementsByClassName("dot");
    if (n > images.length) {slideIndex = 1}
    if (n < 1) {slideIndex = images.length}
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    images[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
})();
  