'use strict';
const url = 'https://animechan.vercel.app/api/random';
const getAPI = async (url) => {
    display.innerHTML = "";
    try {
        const data_received = await fetch(url);
        let quote = await data_received.json();
        console.log(quote);
        RenderDisplay(quote);
    } catch (error) {
       console.log("error", error);
    }   
};

let get_quote_btn = document.querySelector("#get-btn");
let display = document.querySelector(".display");
let element="";

function RenderDisplay(data){
    display.innerHTML = "";
    element = `<div class="alert alert-success" role="alert">
    ~${data.quote} ~
    <a href="#" class="btn alert-link" data-toggle="popover" data-content="Anime: ${data.anime}, Said by Character: ${data.character}">Click here to Learn more.</a>
  </div>`
  display.innerHTML += element;
  $(document).ready(function () {     $('[data-toggle="popover"]').popover();   });
};

get_quote_btn.addEventListener("click", () =>{
    getAPI(url)
});

