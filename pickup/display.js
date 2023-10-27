
document.getElementById('heroe-div').hidden = true;
function show(e){
    e.preventDefault();
    guest = document.getElementById('name');
    document.getElementById('heroe-div').hidden = false;
    message = document.getElementById('edit');
    message.innerHTML = guest.value;

    document.getElementById('message-form').hidden = true;
    return false;
}

function edit(e){
    document.getElementById('heroe-div').hidden = true;
    document.getElementById('message-form').hidden = false;
}

var statusElem = document.getElementById('test-wakelock');



// Create a reference for the Wake Lock.
(async () =>{
    let wakeLock = null;

    // create an async function to request a wake lock
    try {
        wakeLock = await navigator.wakeLock.request("screen");
        statusElem.textContent = "get Screen.";
    } catch (err) {
    // The Wake Lock request has failed - usually system related, such as battery.
    statusElem.textContent = `${err.name}, ${err.message}`;
    }

    wakeLock.addEventListener("release", () => {

    });
    document.addEventListener("visibilitychange", async () => {
        if (wakeLock !== null && document.visibilityState === "visible") {
            wakeLock = await navigator.wakeLock.request("screen");
            statusElem.textContent = "try to get it.";
        }
    });
    console.log("function called");
})()