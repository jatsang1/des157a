(function(){
    "use script";
    console.log('reading js');

    const redSide = document.getElementById('red');
    const rectangle = document.getElementById('rectangle');
    const whiteSide = document.getElementById('white');
    const trainerInfo = document.getElementById('trainerInfo');
    const pokeInfo = document.getElementById('pokeInfo')
    const image = document.querySelector('.sprites');
    const dialogueBox = document.querySelector('.dialogue');
    const btnContainer = document.querySelector('#btnContainer');

    // Sounds
    const roosterSound = new Audio('sounds/rooster.mp3');
    const chimeSound = new Audio('sounds/chime.mp3');
    const buttonSound = new Audio('sounds/buttonclick.mp3');
    const captureSound = new Audio('sounds/captured.wav');

    // doesn't work with submit so the required notification doesn't appear
    // Form 1 - Changes view (expands red, shrinks white)
    const submit1 = document.getElementById('submit1');
    submit1.addEventListener('click', function(e){
        e.preventDefault();

        trainerInfo.className = "hide";
        redSide.className = "expand";
        whiteSide.classList.remove = "whiteW";
        whiteSide.className = "shrink";
        console.log('changing screen');
        buttonSound.play();

        // delay appearance
        setTimeout(() => {
            rectangle.className = "showing";
            btnContainer.className = "showing";

            const name1 = document.querySelector('#name1').value;
            const age = document.querySelector('#age').value;
            const name2 = document.querySelector('#name2').value;
            const occupation = document.querySelector('#occupation').value;

            const dialogue1 = `<h3>MOM:</h3>It's time to get up <mark>${name1}</mark>. Today's a special day! Now that you're <mark>${age}</mark>, you're old enough to receive your first Pokémon from Prof. <mark>${name2}</mark>'s lab and begin your journey as a Pokémon <mark>${occupation}</mark>. Get dressed and eat some breakfast before heading out, can't start your journey on an empty stomach.`

            roosterSound.play();

            // changes image after 2 seconds
            setTimeout(() => {
                image.src = 'images/awake.png';
                console.log("wakes up after 2 second.");
            }, 2000);
            
            dialogueBox.innerHTML = dialogue1;
            console.log('showing 1st dialogue');
        }, 1000);
    });

    // Next Button 1 (goes to dialogue 2)
    const nextBtn1 = document.querySelector('#nextBtn')
    nextBtn1.addEventListener('click', function(e2A){
        e2A.preventDefault();
        nextBtn1.className = 'hide';
        nextBtn2.className = 'show';
        backBtn1.className = 'hide';
        backBtn2.className = 'show';

        const name1 = document.querySelector('#name1').value;
        const name2 = document.querySelector('#name2').value;
        const occupation = document.querySelector('#occupation').value;
        const building = document.querySelector('#building').value;

        const dialogue2 = `<h3>Prof. ${name2}:</h3>Welcome to the <mark>${building}</mark> Lab! You must be <mark>${name1}</mark>, I've been expecting your arrival. So you want to be a Pokémon <mark>${occupation}</mark>... Well, every <mark>${occupation}</mark> needs a partner and you've come to the right place.`

        chimeSound.play();
        image.src = 'images/lab.png';
        dialogueBox.innerHTML = dialogue2;
        console.log('showing 2nd dialogue');
    });

    // Back Button 1 (go back to form1)
    const backBtn1 = document.querySelector('#backBtn');
    backBtn1.addEventListener('click', function(e2B){
        e2B.preventDefault();
        trainerInfo.className = "showing";
        nextBtn3.className = "hide";
        redSide.className = "shrink";
        rectangle.className = "hide";
        btnContainer.className = "hide";
        whiteSide.classList = "whiteW";
        console.log('changing screen to back to form');

        buttonSound.play();
    });

    // Next Button 2 (goes to dialogue 3)
    const nextBtn2 = document.querySelector('#nextBtn2');
    nextBtn2.addEventListener('click', function(e3A){
        e3A.preventDefault();
        nextBtn2.className = 'hide';
        nextBtn3.className = 'show';
        backBtn2.className = 'hide';
        backBtn3.className = 'show';

        const name2 = document.querySelector('#name2').value;
        const region = document.querySelector('#region').value;

        const dialogue3 = `<h3>Prof. ${name2}:</h3>Let's find the perfect match to begin your journey through the <mark>${region}</mark> region!`

        buttonSound.play();
        image.src = 'images/options.png';
        dialogueBox.innerHTML = dialogue3;
        console.log('showing 3rd dialogue');
    });

    // Back Button 2 (goes back to dialogue 1)
    const backBtn2 = document.querySelector('#backBtn2');
    backBtn2.addEventListener('click', function(e3B){
        e3B.preventDefault();
        nextBtn1.className = 'show';
        nextBtn2.className = 'hide';
        backBtn1.className = 'show';
        backBtn2.className = 'hide';

        const name1 = document.querySelector('#name1').value;
        const age = document.querySelector('#age').value;
        const name2 = document.querySelector('#name2').value;
        const occupation = document.querySelector('#occupation').value;

        const dialogue1 = `<h3>MOM:</h3>It's time to get up <mark>${name1}</mark>. Today's a special day! Now that you're <mark>${age}</mark>, you're old enough to receive your first Pokémon from Prof. <mark>${name2}</mark>'s lab and begin your journey as a Pokémon <mark>${occupation}</mark>. Get dressed and eat some breakfast before heading out, can't start your journey on an empty stomach.`

        buttonSound.play();
        image.src = 'images/awake.png';
        dialogueBox.innerHTML = dialogue1;
        console.log('back to showing 1st dialogue');
    });

    // Next Button 3 (goes to form 2)
    const nextBtn3 = document.querySelector('#nextBtn3');
    nextBtn3.addEventListener('click', function(e4A){
        e4A.preventDefault();
        nextBtn3.className = 'hide';
        redSide.className = "shrink";
        rectangle.className = "hide";
        btnContainer.className = "hide";
        whiteSide.classList = "whiteW";

        buttonSound.play();
        pokeInfo.className = "showing";
        console.log('opening second form');
    });

    // Back Button 3 (goes back to dialogue 2)
    const backBtn3 = document.querySelector('#backBtn3');
    backBtn3.addEventListener('click', function(e4B){
        e4B.preventDefault();
        nextBtn2.className = 'show';
        nextBtn3.className = 'hide';
        backBtn2.className = 'show';
        backBtn3.className = 'hide';

        const name1 = document.querySelector('#name1').value;
        const name2 = document.querySelector('#name2').value;
        const occupation = document.querySelector('#occupation').value;
        const building = document.querySelector('#building').value;

        const dialogue2 = `<h3>Prof. ${name2}:</h3>Welcome to the <mark>${building}</mark> Lab! You must be <mark>${name1}</mark>, I've been expecting your arrival. So you want to be a Pokémon <mark>${occupation}</mark>... Well, every <mark>${occupation}</mark> needs a partner and you've come to the right place.`

        buttonSound.play();
        image.src = 'images/lab.png';
        dialogueBox.innerHTML = dialogue2;
        console.log('showing 2nd dialogue');
    });

    // Submit 2nd Form
    const submit2 = document.getElementById('submit2');
    submit2.addEventListener('click', function(e5){
        e5.preventDefault();
        pokeInfo.className = "hide";

        redSide.className = "expand";
        
        whiteSide.classList.remove = "whiteW";
        whiteSide.className = "shrink";
        console.log('screen change');

        backBtn3.className = "hide";
        buttonSound.play();

        // Delay appearance
        setTimeout(() => {
            rectangle.className = "showing";
            btnContainer.className = "showing";

            const name2 = document.querySelector('#name2').value;
            const pokeName = document.querySelector('#pokeName').value;
            const type = document.querySelector('#type').value;
            const animal = document.querySelector('#animal').value;
            const environment = document.querySelector('#enviro').value;
            const action = document.querySelector('#verb').value;
            const bpart = document.querySelector('#bpart').value;
            const adj = document.querySelector('#adj').value;

            const dialogue4 = `<h3>Prof. ${name2}:</h3>Congratulations! You got...<br><mark>${pokeName}</mark>, the <mark>${type}</mark>-type <mark>${animal}</mark> pokémon. It spends its time in the <mark>${environment}</mark>, and it enjoys <mark>${action}</mark>. It uses its <mark>${bpart}</mark> to launch a <mark>${adj}</mark> attack, and it is quite powerful. This pokémon is the perfect partner for you!`

            captureSound.play();
            image.src = 'images/poke.png';
            dialogueBox.innerHTML = dialogue4;
            console.log('showing 4th dialogue');

            const restart = document.getElementById('restart')
            restart.addEventListener('click',function(){
                location.reload();
                // refresh back
            })
            restart.className = 'showing';
        }, 1000);
    });
})();