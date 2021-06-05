function addFirst() {
    var first = document.getElementById("item1");
    var second = document.getElementById("item2");
    document.getElementsByClassName("climb-background")[0].style.display = "block";
    document.getElementsByClassName("climb-background-2")[0].style.display = "none";
    second.classList.remove("climb-menu-active");
    first.classList.add("climb-menu-active");
}

function addSecond() {
    var first = document.getElementById("item1");
    var second = document.getElementById("item2");
    document.getElementsByClassName("climb-background")[0].style.display = "none";
    document.getElementsByClassName("climb-background-2")[0].style.display = "block";
    first.classList.remove("climb-menu-active");
    second.classList.add("climb-menu-active");
}