let selection = document.getElementById('drawType');
selection.value = 'type-keys';

let drawButton = document.getElementById('doDraw');
let resetButton = document.getElementById('reset');
let result = document.getElementById('ticket1');
let last = document.getElementById('ticket2');
let ticket1 = document.getElementById('ticket1');
let ticket2 = document.getElementById('ticket2');

function noScroll()
{
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', noScroll);
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
})

let roots = ['Do', 'Do<sup>#</sup>/Ré<sup>b</sup>', 'Ré', 'Mi<sup>b</sup>', 'Mi', 'Fa', 'Fa<sup>#</sup>', 'Sol', 'Sol<sup>#</sup>/La<sup>b</sup>', 
    'La', 'Si<sup>b</sup>', 'Si'];
let keys = ['Do majeur', 'Do mineur', 'Do<sup>#</sup>/Ré<sup>b</sup> majeur', 'Do<sup>#</sup> mineur', 'Ré majeur', 'Ré mineur', 'Mi<sup>b</sup> majeur', 
    'Mi<sup>b</sup> mineur', 'Mi majeur', 'Mi mineur', 'Fa majeur', 'Fa mineur', 'Fa<sup>#</sup> majeur', 'Fa<sup>#</sup> mineur', 'Sol majeur', 
    'Sol mineur', 'La<sup>b</sup> majeur', 'Sol<sup>#</sup> mineur', 'La majeur', 'La mineur', 'Si<sup>b</sup> majeur', 'Si<sup>b</sup> mineur',
    'Si majeur', 'Si mineur'];

let bolATon = [];
reset();

function draw() {
    index = Math.floor(Math.random() * bolATon.length);

    result = (result == ticket1) ? ticket2 : ticket1;
    last = (last == ticket1) ? ticket2 : ticket1;

    last.classList.remove("animation");
    //last.innerHTML = "";
    last.style.top = "60%";

    bowlContainer.classList.add("shake");
    setTimeout(() => {
        bowlContainer.classList.remove("shake");
        result.classList.add("animation");
        result.style.top = "30%";  
        ticketCount.innerHTML = bolATon.length;
    }, 500);

    result.innerHTML = bolATon[index];
    bolATon.splice(index, 1);
    if (bolATon.length == 0)
    {
        drawButton.disabled = true;
    }
}

function reset() {
    
    switch (selection.value)
    {
        case 'type-keys':
            bolATon = keys.slice();
            break;
        case 'type-roots':
            bolATon = roots.slice();
            break;
    }
    
    ticketCount.innerHTML = bolATon.length;
    drawButton.disabled = false;
    ticket1.innerHTML = '';
    ticket1.style.top = "60%";
    ticket1.classList.remove("animation");
    ticket2.innerHTML = '';
    ticket2.style.top = "60%";
    ticket2.classList.remove("animation");
}