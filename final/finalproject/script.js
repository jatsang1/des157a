(function(){
    "use script";
    console.log('reading js');

    const redSide = document.getElementById('red');
    const rectangle = document.getElementById('rectangle');
    const whiteSide = document.getElementById('white');
    const form = document.getElementById('info');
    const btn = document.getElementById('submit');
    const dialogueBox = document.querySelector('.dialogue');
    const btnContainer = document.querySelector('#btnContainer');

    // User Test Alert
    // window.alert(
    //     "Greetings!\nWelcome to the Pokémon Journey, you are amongst the first people to playtest this madlib. Here's a list of tasks I would like you to keep in mind: \n\u2022 Filling out the form and note any confusing prompts. \n\u2022 Submit and watch the transition. \n\u2022 Read the dialogue and note any discrepancy."
    // );

    // doesn't work with submit so the required notification doesn't appear
    btn.addEventListener('click', function(e){
        e.preventDefault();
        redSide.className = "expand";
        rectangle.className = "showing"
        btnContainer.className = "showing"
        whiteSide.classList.remove = "whiteW";
        whiteSide.className = "shrink";
        form.className = "hide";
        console.log('change')

        const name1 = document.querySelector('#name1').value;
        const age = document.querySelector('#age').value;
        const name2 = document.querySelector('#name2').value;
        const occupation = document.querySelector('#occupation').value;

        const dialogue1 =
        `It's time to get up <mark>${name1}</mark>. Today's a special day! Now that you're <mark>${age}</mark>, you're old enough to receive your first Pokémon from Prof. <mark>${name2}</mark>'s lab and begin your journey as a Pokémon <mark>${occupation}</mark>. Get dressed and eat some breakfast before heading out, can't start your journey on an empty stomach.`
        
        dialogueBox.innerHTML = dialogue1;
    });

    // next button
    const btn2 = document.querySelector('#nextBtn')
    btn2.addEventListener('click', function(e2){
        e2.preventDefault();
        const name1 = document.querySelector('#name1').value;
        const occupation = document.querySelector('#occupation').value;
        const building = document.querySelector('#building').value;

        const dialogue2 = `Welcome to the <mark>${building}</mark> Lab! You must be <mark>${name1}</mark>, I've been expecting your arrival. So you want to be a Pokémon <mark>${occupation}</mark>... Well, every <mark>${occupation}</mark> needs a partner and you've come to the right place.`

        dialogueBox.innerHTML = dialogue2;
        btn2.className = 'hide';

        btn3.className = 'show';
    });

    const btn3 = document.querySelector('#nextBtn2');
    btn3.addEventListener('click', function(e3){
        e3.preventDefault();
        const region = document.querySelector('#region').value;

        const dialogue3 = `Let's find the perfect match to begin your journey through the <mark>${region}</mark> region!`

        dialogueBox.innerHTML = dialogue3;
        
        // alert(' \n\u2022 How was navigating the journey/dialogue so far? Do you have any preferences for clicking or scrolling through? \n\u2022 Did any of the text seem unclear or hard to read? \n\u2022 What elements would you suggest including to improve the playthrough?');
    });

    // const btn3 = document.querySelector('#nextBtn3')
    // btn3.addEventListener('click', function(e3){
    //     e3.preventDefault();
    //     const region = document.querySelector('#region').value;

    //     const dialogue3 = `Let's find the perfect match to begin your journey through the <mark>${region}</mark> region!`

    //     dialogueBox.innerHTML = dialogue3;
    // })

    //dialogue inputs
    // const name1 = document.querySelector('#name1').value;
    // const age = document.querySelector('#age').value;
    // const name2 = document.querySelector('#name2').value;
    // const occupation = document.querySelector('#occupation').value;
    // const building = document.querySelector('#building').value;
    // const region = document.querySelector('#region').value;

    //Dialogue Text
    // const dialogue1 =
    // `It's time to get up <mark>${name1}</mark>. Today's a special day! Now that you're <mark>${age}</mark>, you're old enough to receive your first Pokémon from Prof. <mark>${name2}</mark>'s lab and begin your journey as a Pokémon <mark>${occupation}</mark>. Get dressed and eat some breakfast before heading out, can't start your journey on an empty stomach.`

    // const dialogue2 = `Welcome to the <mark>${building}</mark> Lab! You must be <mark>${name1}</mark>, I've been expecting your arrival. So you want to be a Pokémon <mark>${occupation}</mark>... Well, every <mark>${occupation}</mark> needs a partner and you've come to the right place.`

    // const dialogue3 = `Let's find the perfect match to begin your journey through the <mark>${region}</mark> region!`

})();