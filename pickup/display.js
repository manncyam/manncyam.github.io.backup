document.getElementById('heroe-div').hidden = true;
function show(e){
    e.preventDefault();
    guest = document.getElementById('name');
    document.getElementById('heroe-div').hidden = false;
    message = document.getElementById('message');
    message.innerHTML = guest.value;

    document.getElementById('message-form').hidden = true;
    return false;
}

function edit(e){
    document.getElementById('heroe-div').hidden = true;
    document.getElementById('message-form').hidden = false;
}