
//Deklaracja Zmiennych Średnia
const liczba = document.querySelector(".liczba");
const btn = document.querySelector(".btn");
const spisdziennik = document.querySelector(".dziennik");
const Suma = document.querySelector(".Suma");
const wynik = document.querySelector(".wynik");
//console.log(liczba.value);
//console.log(liczba1.value);
//console.dir(btn);
let dziennik = 0;
let SumaOcen = 0;
let licznik = 0;
let kl = 0;
btn.addEventListener(
"click",
function(){
    kl = parseFloat(kl) + 1;
    console.log("Liczba Ocen: "+kl); //Sprawdzenie Ilości Ocen 
    SumaOcen = parseFloat(SumaOcen) + parseFloat(liczba.value);
    console.log("Suma Ocen: "+ SumaOcen ); //Sprawdzenie Sumy Ocen
    spisdziennik.innerText += liczba.value + ",";
    liczba.value=" ";
    console.log(liczba.value);//Sprawdzenie Wyzerowania Liczby
    Suma.innerText = SumaOcen ; //Suma Ocen 
    wynik.innerText = SumaOcen / kl; //Wynki końcowy
}
    );

//Deklaracja Zmiennych Pole Trójkata     
const liczba_a = document.querySelector(".liczba_a");
const liczba_h = document.querySelector(".liczba_h");
const btnp = document.querySelector(".btnp");
const wynik_p = document.querySelector(".wynik_p");

btnp.addEventListener(
    "click",
    function(){
        console.log("Liczba a :" +liczba_a.value);//Sprawdzenie Liczby a
        console.log("Liczba h :" +liczba_h.value);//Sprawdzenie Liczby h
        Wynik_pro = liczba_a.value * liczba_h.value / 2;
        console.log("Wynik :" +Wynik_pro);
        wynik_p.innerText = Wynik_pro;
;    }
        );

    