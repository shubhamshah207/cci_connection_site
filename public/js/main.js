
function menuToggle() {
    let menuSymbol = document.querySelector('#menuSymbol');
    let navigation = document.querySelector('.navigation');
    display = getComputedStyle(navigation).display
    if (display == 'none'){
        navigation.style.display = 'block';
    }
    else{
        navigation.style.display = 'none';
    }
}

