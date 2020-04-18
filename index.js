let selection = document.getElementById('drawType');
selection.value = 'type-keys';

let drawButton = document.getElementById('doDraw');
let resetButton = document.getElementById('reset');
let result = document.getElementById('ticket1');
let last = document.getElementById('ticket2');
let ticket1 = document.getElementById('ticket1');
let ticket2 = document.getElementById('ticket2');

let roots = ['Do', 'Do<sup>#</sup>/Ré<sup>b</sup>', 'Ré', 'Mi<sup>b</sup>', 'Mi', 'Fa', 'Fa<sup>#</sup>', 'Sol', 'Sol<sup>#</sup>/La<sup>b</sup>', 
    'La', 'Si<sup>b</sup>', 'Si'];
let keys = ['Do majeur', 'Do mineur', 'Do<sup>#</sup>/Ré<sup>b</sup> majeur', 'Do<sup>#</sup> mineur', 'Ré majeur', 'Ré mineur', 'Mi<sup>b</sup> majeur', 
    'Mi<sup>b</sup> mineur', 'Mi majeur', 'Mi mineur', 'Fa majeur', 'Fa mineur', 'Fa<sup>#</sup> majeur', 'Fa<sup>#</sup> mineur', 'Sol majeur', 
    'Sol mineur', 'La<sup>b</sup> majeur', 'Sol<sup>#</sup> mineur', 'La majeur', 'La mineur', 'Si<sup>b</sup> majeur', 'Si<sup>b</sup> mineur',
    'Si majeur', 'Si mineur'];

let bolATon = [];
let elementCount = -1;
reset();

function draw() {
    index = Math.floor(Math.random() * elementCount);

    result = result == ticket1 ? ticket2 : ticket1;
    last = last == ticket1 ? ticket2 : ticket1;

    last.classList.remove("animation");
    last.innerHTML = "";
    last.style.top = "60%";

    bowlContainer.classList.add("shake");
    setTimeout(() => {
        bowlContainer.classList.remove("shake");
        result.innerHTML = bolATon[index];
        result.classList.add("animation");
        result.style.top = "30%";  
    }, 500);

    
  
    log.innerHTML = "Ticket1 : " + ticket1.innerHTML + " Ticket2 : " + ticket2.innerHTML + "<br>result : " + result.innerHTML + " last :" + last.innerHTML;

    bolATon.splice(index, 1);
    if (--elementCount == 0)
    {
        drawButton.disabled = true;
    }
}

function reset() {
    // log.innerText = selection.value;
    switch (selection.value)
    {
        case 'type-keys':
            bolATon = keys.slice();
            elementCount = 24;
            break;
        case 'type-roots':
            bolATon = roots.slice();
            elementCount = 12;
            break;
    }
    
    drawButton.disabled = false;
    ticket1.innerHTML = '';
    ticket1.style.top = "60%";
    ticket1.classList.remove("animation");
    ticket2.innerHTML = '';
    ticket2.style.top = "60%";
    ticket2.classList.remove("animation");
}