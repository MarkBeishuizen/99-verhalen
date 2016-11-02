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
