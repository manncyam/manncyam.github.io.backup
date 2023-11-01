const city = document.getElementById('city');
city.focus();
const pet_name = document.getElementById('pet-name');
const band_name = document.getElementById('band-name');

function generate() {
        
    if (city.value === '' || pet_name.value === ''){
        return false;
    }
    if (band_name.parentElement.classList.contains('no-display')) {
        band_name.parentElement.classList.remove('no-display');
        band_name.parentElement.classList.add('display');
    }

    band_name.textContent = `${city.value}  ${pet_name.value}`;

    city.focus();
    return false;
}