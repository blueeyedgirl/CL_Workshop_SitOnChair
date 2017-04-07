document.addEventListener("DOMContentLoaded", function(){

    var oFirmie = document.querySelector(".navigation ul li");
    console.log(oFirmie);

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

    var imgParent = document.querySelector("#section2 .siteWidth .absolutePositioning .centerElements");
    console.log(imgParent);

    var imgParentChildren = imgParent.children;
    console.log(imgParentChildren);


    for (var i=0; i<imgParentChildren.length-1; i++) {
        console.log(imgParentChildren[i]);
        imgParentChildren[i].addEventListener("mouseover", function(event){
            var transparentStrip = this.querySelector(".transparentStrip");
            transparentStrip.style.display = "none";
        });

        imgParentChildren[i].addEventListener("mouseout", function(event){
            var transparentStrip = this.querySelector(".transparentStrip");
            transparentStrip.style.display = "block";
        });
    }

});
