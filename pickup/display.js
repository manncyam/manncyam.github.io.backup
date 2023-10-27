
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

if ("wakeLock" in navigator) {
    isSupported = true;
    statusElem = document.getElementById('test-wakelock')
    statusElem.textContent = "Screen Wake Lock API supported!";
} else {
    statusElem = document.getElementById('test-wakelock')
    statusElem.textContent = "Wake lock is not supported by this browser.";
}

// Create a reference for the Wake Lock.
// let wakeLock = null;

// // create an async function to request a wake lock
// try {
//   wakeLock = await navigator.wakeLock.request("screen");
// } catch (err) {
//   // The Wake Lock request has failed - usually system related, such as battery.
//   statusElem.textContent = `${err.name}, ${err.message}`;
// }

// wakeLock.addEventListener("release", () => {

// });
// document.addEventListener("visibilitychange", async () => {
//     if (wakeLock !== null && document.visibilityState === "visible") {
//       wakeLock = await navigator.wakeLock.request("screen");
//     }
// });
