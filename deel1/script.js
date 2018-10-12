"use strict";


var student = "Jolan Bosman";
var jaar = 2018;
var group = "MD2B";
var title = "JavaScript Bootcamp " + jaar;

instruction2();

function instruction2() {
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    var elements = document.getElementsByClassName("jaar");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = jaar;
    }

    var elements = document.getElementsByClassName("student");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = student;
    }
}

function instruction3() {
    var description = "NU WERKT HET!";

    document.getElementById("instructionHeader").innerText = "Opdracht 3";
    document.getElementById("instructionDescription").innerText = description;
    document.getElementById("instructionResult").innerText = "";
}
