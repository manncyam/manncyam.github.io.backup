
document.getElementById('heroe-div').hidden = true;
var noSleep = new NoSleep();

function show(e){
    e.preventDefault();
    guest = document.getElementById('name');
    document.getElementById('heroe-div').hidden = false;
    message = document.getElementById('edit');
    message.innerHTML = guest.value;

    if (document.getElementById('is_neon').checked){
        message.classList.add("neon")
    }
    
    document.getElementById('message-form').hidden = true;
    
    noSleep.enable();
    return false;
}

function edit(e){
    document.getElementById('heroe-div').hidden = true;
    document.getElementById('message-form').hidden = false;
    noSleep.disable();

    message.classList.remove("neon")
}
