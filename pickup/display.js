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

    var message_form = document.getElementById('message-form');
    message_form.hidden = false;
}