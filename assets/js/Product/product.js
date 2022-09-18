$(function () {

    $("#product-images img").mouseover(function () {
        console.log("dw");
        document.getElementById("foto").src = this.src;
    })


})