(function(){
    "use script";
    console.log('reading js');

    const redSide = document.getElementById('red');
    const rectangle = document.getElementById('rectangle');
    const whiteSide = document.getElementById('white');
    const form = document.getElementById('info');
    const btn = document.getElementById('submit');

    btn.addEventListener('click', function(e){
        e.preventDefault();
        redSide.className = "expand";
        // rectangle.className = "showing"
        whiteSide.classList.remove = "whiteW";
        whiteSide.className = "shrink";
        form.className = "hide";
        console.log('change')
    })

})();