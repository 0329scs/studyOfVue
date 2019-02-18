slideMenu();

function slideMenu() {
    var sideToggle = document.querySelector(".side_toggle");
    var sideBtn = sideToggle.querySelectorAll(".side_btn");

    for (var i = 0; i < sideBtn.length; i++) {
        sideBtn[i].addEventListener("click", slideWork);
    }


    function slideWork(e) {
        var slideMenu = sideToggle.querySelector(".slide_menu");
        if (slideMenu.classList.contains("sliding")) {
            slideMenu.classList.remove("sliding");
        } else {
            slideMenu.classList.add("sliding");
        }
        e.preventDefault();
    }
}

hovMenu("hov_top");
hovMenu("hov_btm");

function hovMenu(classPass) {
    var menuList = document.querySelector("." + classPass);

    menuList.addEventListener("click", hovWork);

    function hovWork(e) {
        listLink = menuList.querySelectorAll("a");
        if (e.target.nodeName != "A") {
            return;
        } else {
            for (var i = 0; i < listLink.length; i++) {
                listLink[i].classList.remove("on");
            }
            e.target.classList.add("on");
        }
        e.preventDefault();
    }
}