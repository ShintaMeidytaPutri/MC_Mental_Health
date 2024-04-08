var hideScroll = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      
    if (hideScroll > window.pageYOffset) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-300px";
    }

    hideScroll = currentScrollPos;
}
