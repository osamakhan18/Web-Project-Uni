document.addEventListener("DOMContentLoaded", function() {
    const btnAll = document.querySelector(".zero-btn");
    const btn1 = document.querySelector(".first-btn");
    const btn2 = document.querySelector(".sec-btn");
    const div1 = document.querySelectorAll(".coming-soonBox");
    const div2 = document.querySelectorAll(".newly-launchedBox");

    function showAllBoxes() {
        div1.forEach(function(box) {
            box.style.display = "flex"; 
        });
        div2.forEach(function(box) {
            box.style.display = "flex"; 
        });
    }

    function hideAllBoxes() {
        div1.forEach(function(box) {
            box.style.display = "none"; 
        });
        div2.forEach(function(box) {
            box.style.display = "none"; 
        });
    }

  
    btnAll.addEventListener("click", function() {
        showAllBoxes();
    });

    btn1.addEventListener("click", function() {
        hideAllBoxes();
        div1.forEach(function(box) {
            box.style.display = "flex"; 
        });
    });

    btn2.addEventListener("click", function() {
        hideAllBoxes();
        div2.forEach(function(box) {
            box.style.display = "flex"; 
        });
    });
});
