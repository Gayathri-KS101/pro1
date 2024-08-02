function adjustHeight() {
    // Get the viewport height and set it to the body and main container
    var viewportHeight = window.innerHeight;
    document.body.style.height = viewportHeight + 'px';
    document.querySelector('.container').style.height = viewportHeight + 'px';
}

// Call the adjustHeight function when the window is resized
window.addEventListener('resize', adjustHeight);

// Initial call to adjustHeight to set the height on page load
adjustHeight();

document.addEventListener("DOMContentLoaded", function() {
    const loadingPage = document.getElementById("loading-page");
    const mainContent = document.getElementById("main-content");

    window.onload = function() {
        loadingPage.style.display = "none";
        mainContent.style.display = "block";
    };
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#501e27";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}
