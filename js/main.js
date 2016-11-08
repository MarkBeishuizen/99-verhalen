var articles = document.getElementsByTagName("article");

function toggleGlow (event) {
    var article = event.target;
    article.classList.toggle("glow");
}

for (var i = 0; i < articles.length; i++) {
    console.log(articles[i]);
    articles[i].addEventListener("mouseenter", toggleGlow);
    articles[i].addEventListener("mouseleave", toggleGlow);
}

var search = document.querySelector("header input");

function toggleSelected (event) {
    //var search = event.target;
    search.classList.toggle("selected");
}

search.addEventListener("focus", toggleSelected);
search.addEventListener("focusout", toggleSelected);


var buttons = document.querySelectorAll(".button-interaction");

function toggleButtonHover (event) {
    var button = event.target;
    button.classList.toggle("hovering");
}

for (var i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("mouseenter", toggleButtonHover);
    buttons[i].addEventListener("mouseleave", toggleButtonHover);
}

var buttons = document.querySelectorAll(".download");

function activateDownloadAnimation (event) {
    var button = event.target;
    if (button.classList.contains("clicked")) {
        return;
    }
    
    button.classList.add("clicked");
    button.innerHTML = "Dowloaden...";
    setTimeout(function() {
        button.innerHTML = "Gedownload"; 
    }, 2000);
} 

for (var i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", activateDownloadAnimation);
}


