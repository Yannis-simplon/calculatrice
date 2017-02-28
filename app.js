var log = function log(data) {
    "use strict";
    window.console.log(data);
};



var calculatrice = function calculatrice() {
    "use strict";

    var btn, saisie;

    btn = document.getElementById("btn");
    saisie = document.getElementById("ma_saisie");

    log(btn);
    log(saisie);


    function gererClicks() {
        log("click 2 !!!");
        log(saisie.value);
        var res = add(10, 10);
        log(res);
}

    function add(a, b){
        return a + b;
    }
    
    btn.onclick = gererClicks;

    //  btn.addEventListener("click", gererclicks);  les 3 façon pour définir un click 
    // btn.onclick = function click(){
    //     log("click 1 !!!");   
    // };


};