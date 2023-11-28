/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  // if(window.matchMedia("(min-width: 1106px)").matches){
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar-scroll").style.top = "0";
    } else {
      document.getElementById("navbar-scroll").style.top = "-150px";
    }
  // }
  prevScrollpos = currentScrollPos;
}

