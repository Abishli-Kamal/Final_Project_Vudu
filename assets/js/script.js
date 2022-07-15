var filterbtn =document.getElementById("filterBtn");
var filterAll=document.querySelector(".filterAll");
var respMenu=document.getElementById("respMenu");
var respMenuFilters=document.querySelector(".respMenuFilters")
var main=document.getElementById("main");
var reset=document.querySelector(".reset");
var responsiveUl=document.querySelector(".responsiveUl");


var rentmenuIcon =document.getElementById("rentmenuIcon")
var responsiveRentFilter=document.querySelector(".responsiveRentFilter");

filterbtn.addEventListener("click" ,function(){
filterAll.classList.toggle("dBlock");   
});

respMenu.addEventListener("click",function(){
    respMenuFilters.classList.toggle("dBlock");
    main.classList.toggle("dNone");
    reset.classList.toggle("dBlock");
    responsiveUl.classList.toggle("dNone");
});

rentmenuIcon.addEventListener("click" ,function(){
    console.log("test"); 
    });








  