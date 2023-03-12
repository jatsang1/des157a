(function () {
  "use script";
  console.log("reading js");

  // reloading page takes you back to the top.
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // array of image position text
  const myPosition = [
    "- 1/5 -", "- 2/5 -", "- 3/5 -", "- 4/5 -", "- 5/5 -",
  ];
  //array of images
  const myImages = [
    "fire.jpeg",
    "puddle.jpeg",
    "road.jpeg",
    "lamp.jpeg",
    "library.jpeg",
  ];
  //array of captions
  const myCaption = [
    "-- Leaves surrounding fire --",
    "-- Fallen leaves --",
    "-- The yellow-lined road --",
    "-- Reflecting the lamp and sky --",
    "-- Yellow afternoon in the library --"
  ];
  //array of image details/descriptions
  const myText = [
    "This picture was taken outside the School of Law at Davis. I happened to be walking around near Putah Creek and noticed the words 'FIRE' engraved on the sidewalk. I assumed it was a signifier for the Fire Department to locate a hydrant. I captured this moment because the leaves framed the words in an interesting way, and the color of the ground contrasted with the orange and yellow hues.",
    "This picture was taken outside the Shields Library by the Egghead with the book. After a rainy noon, puddles of water had formed in the caved surface of the ground. This submerged some of the leaves that had fallen and collected. You could also see the clouds in the reflection of the water. I captured this moment because of the texture and contrast the leaves created as well as how the cloudiness divided the photo's background.",
    "This picture was taken behind Wright Hall and the Music Building. On my way to class to the Wyatt Pavilion, I always take this path and come across this road. The rain had made the tar appear darker, which made the yellow lines and leaves more prominent. I captured this moment because of the intensity of the lines and the specks of color littering the dark background.",
    "This picture was taken outside the COHO near the West Quad. I got off the bus at the MU and walked by the bike racks after getting my morning latte. It rained earlier that morning so there were puddles of water everywhere. The sky was clearing up and I noticed that in the reflection of the water. The lamp was still on because of the parting clouds. I captured this moment because of the way the lamp visually divided the left and right sides of the reflection.",
    "This picture was taken on the 2nd floor of Shields Library. I was looking for a spot to study and came across this table that looked over the inner quad. The yellow walls of the building and leaves casted a gold luminescence through the window panes. I captured this moment because of the satisfying ambience and the repeating pattern of the panes.",
  ];
  let currentImage = 0;
  const position = document.querySelector('.numbertext');
  const slide = document.getElementById('image');
  const caption = document.querySelector('.caption');
  const textDetails = document.querySelector('.details');
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');

  // next button
  next.addEventListener('click', nextPhoto);
  // switch to next image, caption, and text
  function nextPhoto() {
    console.log("clicked next");
    currentImage++;
    if (currentImage > myImages.length - 1) {
        currentImage = 0;
    }
    slide.src = `images/${myImages[currentImage]}`;
    position.innerHTML = myPosition[currentImage];
    caption.innerHTML = myCaption[currentImage];

    textDetails.innerHTML = myText[currentImage];
    // console.log(myText[currentImage]);
  };

  // previous button
  prev.addEventListener('click', previousPhoto);
  // switch to previous image, caption, and text
  function previousPhoto(){
    console.log("clicked previous");
    currentImage--;
    if (currentImage < 0){
        currentImage = myImages.length - 1;
    }
    slide.src = `images/${myImages[currentImage]}`;
    position.innerHTML = myPosition[currentImage];
    caption.innerHTML = myCaption[currentImage];

    textDetails.innerHTML = myText[currentImage];
    // console.log(myText[currentImage]);
  };

  // OTHER:
  // if the image = 2 or > 1 then previous button appears.
  // if the image = 5 or > 4 then the end button appears and replaces the next button - the end button takes them to the ending screen.
})();
  