var tableau = [];
var resultat;
var signe;

var input = document.getElementById("saisie");

function insertNumber(button){
    input.value+=button.value;

}

var btn_ac = document.querySelector(".ac");
var btn_plus = document.querySelector(".plus");
var btn_moins = document.querySelector(".moins");
var btn_diviser = document.querySelector(".diviser");
var btn_multiplier = document.querySelector(".multiplier");
var btn_egal = document.querySelector(".egal");


btn_ac.addEventListener("click",function(){
    input.value = "";
    tableau = [];
});

function insertSigne(button){
    tableau.push(parseFloat(input.value));
    tableau.push(button.textContent);
    input.value="";
}

function calcul(){
    tableau.push(parseFloat(input.value));
    resultat=tableau[0];

    for(var i=0;i<tableau.length;i++){

        if(tableau[i] == "+"){

            resultat+=tableau[i+1];

        }else if(tableau[i] == "-"){

            resultat -= tableau[i+1];
            
        }else if(tableau[i] == "*"){
            
            resultat *= tableau[i+1];

        }else if(tableau[i] == "/"){

            resultat /= tableau[i+1];

        }
    }

    console.log(resultat);
    input.value = resultat;
    tableau=[];

}



