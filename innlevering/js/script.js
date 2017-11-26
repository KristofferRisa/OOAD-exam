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
    createUmlTree();
    _location = getParameterByName('location'); 
    console.log("?location= " + _location);
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
   _active = getParameterByName('active');
    console.log("?active="+_active)
    setActiveById(_active);

})();


function setActiveById(_id){
    document.getElementById(_id).classList.add('active');
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function createUmlTree(){
    var html = `
<div class="tree" id="diagram">
    <ul>
        <li>
            <span>Diagram</span>
            <ul>
                <li>
                    <a href="#struktur?location=s" onclick="showStruktur();">Struktur</a>
                </li>

                <li>
                    <a href="#atferds?location=a" onclick="showAtferds();">Atferds</a>

                </li>
            </ul>
        </li>
    </ul>
</div>

<div class="tree hide" id="struktur">
    <ul>
        <li>
            <a href="#" onclick="visOversikt();">Diagram</a>
            <ul>
                <li>
                    <span>Struktur</span>
                    <ul>
                        <li>
                            <a id="klasse" href="klassediagram.html?location=s&active=klasse">Klasse</a>
                        </li>
                        <li>
                            <a id="objekt" href="objektdiagram.html?location=s&active=objekt">Objekt</a>
                        </li>
                        <li>
                            <a id="pakke" href="pakkediagram.html">Pakke</a>
                        </li>
                        <li>
                            <a id="komponent" href="#">Komponent</a>
                        </li>
                        <li>
                            <a id="utplassering" href="#">Utplasserings</a>
                        </li>
                        <li>
                            <a id="sammesatt" href="#">Sammensatt struktur</a>
                        </li>
                    </ul>
                </li>
            </ul>

    </ul>
    </li>

</div>

<div class="tree hide" id="atferds">
    <ul>
        <li>
            <a href="#" onclick="visOversikt();">Diagram</a>
            <ul>
                <li>
                    <span>Atferds</span>
                    <ul>
                        <li>
                            <a onclick="showInteraksjon();" href="#interaksjon?location=i">Interaksjons</a>
                        </li>
                        <li>
                            <a id="usecase" href="#">Bruksmønster</a>
                        </li>
                        <li>
                            <a id="aktivitetsdiagram" href="aktivitetsdiagram">Aktivitets</a>
                        </li>
                        <li>
                            <a id="tilstand" href="tilstandsdiagram.html">Tilstand</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

</div>

<div class="tree hide diagram-wide" id="interaksjon">
    <ul>
        <li>
            <a href="#" onclick="visOversikt();">Diagram</a>
            <ul>
                <li>
                    <a href="#" onclick="showAtferds();">Atferds</a>

                    <ul>
                        <li>
                            <span>Interaksjons</span>
                            <ul>
                                <li>
                                    <a id="sekvensdiagram" href="Sekvensdiagram.html">Sekvens</a>
                                </li>
                                <li>
                                    <a id="kommunikasjon" href="kommunikasjonsdiagram.html">Kommunikasjons</a>
                                </li>
                                <li>
                                    <a id="tidsdeling" href="tidsdelingsdiagram.html">Tidsdelings</a>
                                </li>
                                <li>
                                    <a id="interaksjon" href="#">Interaksjonsoversikt</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
    </ul>
    </li>
</div>
`;

    var tree = document.getElementById('tree');
    if(tree){
        tree.innerHTML = html;
    }
}