function show(e){
    e.preventDefault();
    guest = document.getElementById('name');
    message = document.getElementById('message');
    message.innerHTML = guest.value;
    message.hidden = false;

    document.getElementById('message-form').hidden = true;

    edit_btn = document.getElementById('edit');
    if (edit_btn.style.display === 'none') {
        edit_btn.style.display = 'block';
    }

    return false;
}

function edit(e){
    if (e.style.display === 'block') {
        e.style.display = 'none';
    }
    message = document.getElementById('message');
    message.hidden = true;

    var message_form = document.getElementById('message-form');
    message_form.hidden = false;
}