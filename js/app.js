document.addEventListener("DOMContentLoaded", function(){

    var oFirmie = document.querySelector(".navigation ul li");
    console.log(oFirmie);

    // submenu

    oFirmie.addEventListener("mouseover", function(event){
        var submenu = this.querySelector("ul");
        var triangle = this.querySelector("#triangle");
        if (submenu !== null) {
            submenu.style.display = "block";
            triangle.style.display = "block";
            console.log(triangle);
        }
    });

    oFirmie.addEventListener("mouseout", function(event){
        var submenu = this.querySelector("ul");
        var triangle = this.querySelector("#triangle");
        if (submenu !== null) {
            submenu.style.display = "none";
            triangle.style.display = "none";

        }
    });

    // bloki z obrazkami

    var imgParent = document.querySelector("#section2 .siteWidth .absolutePositioning .centerElements");
    // console.log(imgParent);

    var imgParentChildren = imgParent.children;
    // console.log(imgParentChildren);

    for (var i=0; i<imgParentChildren.length-1; i++) {
        imgParentChildren[i].addEventListener("mouseover", function(event){
            var transparentStrip = this.querySelector(".transparentStrip");
            transparentStrip.style.display = "none";
        });

        imgParentChildren[i].addEventListener("mouseout", function(event){
            var transparentStrip = this.querySelector(".transparentStrip");
            transparentStrip.style.display = "block";
        });
    }

    // slider

    var slider = document.querySelector(".slider");
    var buttonBack = document.querySelector(".back");
    var buttonForth = document.querySelector(".forth");
    var sliderLis = slider.children;



    var pictureCounter = 0;
    var visibleLi = sliderLis[pictureCounter].classList.add("visible");

    buttonForth.addEventListener("click", function(event){
        sliderLis[pictureCounter].classList.remove("visible");
        pictureCounter++;
        if (pictureCounter >= sliderLis.length){
            pictureCounter = 0;
        }
        sliderLis[pictureCounter].classList.add("visible");
     });

     buttonBack.addEventListener("click", function(event){
         sliderLis[pictureCounter].classList.remove("visible");
         pictureCounter--;
         if (pictureCounter < 0){
             pictureCounter = 2;
         }
         sliderLis[pictureCounter].classList.add("visible");
      });

});
