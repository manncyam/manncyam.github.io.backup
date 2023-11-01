function generate() {
    let city = document.getElementById('city');
    let pet_name = document.getElementById('pet-name');
    let band_name = document.getElementById('band-name');
    
    if (city.value === '' || pet_name.value === ''){
        return false;
    }
    if (band_name.parentElement.classList.contains('no-display')) {
        band_name.parentElement.classList.remove('no-display');
        band_name.parentElement.classList.add('display');
    }

    band_name.textContent = `${city.value}  ${pet_name.value}`;

    console.log(band_name.parentElement.classList);
    return false;
}