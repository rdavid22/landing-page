function scrollFunction() {
    var history = document.getElementById("history");
    var team = document.getElementById("team");
    var background = document.getElementById("header");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementsByClassName("leftright")[0].style.visibility = "visible";
        history.classList.add("scrolledColor");
        team.classList.add("scrolledColor");
        background.classList.add("changedBackground");
    } else {
        document.getElementsByClassName("leftright")[0].style.visibility = "hidden";
        history.classList.remove("scrolledColor");
        team.classList.remove("scrolledColor");
        background.classList.remove("changedBackground");
    }
}

window.onscroll = function() {
    scrollFunction();
};