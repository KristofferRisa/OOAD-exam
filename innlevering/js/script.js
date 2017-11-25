function showStruktur()  {
    document.getElementById("diagram").classList.add('hide');
    document.getElementById("atferds").classList.add('hide');
    document.getElementById("interaksjon").classList.add('hide');
    document.getElementById("struktur").classList.remove('hide');
}

function showAtferds() {
    document.getElementById("diagram").classList.add('hide');
    document.getElementById("struktur").classList.add('hide');
    document.getElementById("interaksjon").classList.add('hide');
    document.getElementById("atferds").classList.remove('hide');
}

function showInteraksjon() {
    document.getElementById("diagram").classList.add('hide');
    document.getElementById("struktur").classList.add('hide');
    document.getElementById("atferds").classList.add('hide');
    document.getElementById("interaksjon").classList.remove('hide');
}

function visOversikt() {
    document.getElementById("struktur").classList.add('hide');
    document.getElementById("atferds").classList.add('hide');
    document.getElementById("interaksjon").classList.add('hide');
    document.getElementById("diagram").classList.remove('hide');
}

(function () {
    _location = getParameterByName('location'); // "lorem"
    console.log("foo == " + _location);
    switch (_location) {
        case "s":
            showStruktur();
            break;
        case "a":
            showAtferds();
            break;
        case "i":
            showInteraksjon();
            break;
    }
})();


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}