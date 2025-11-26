var images = ["fox.webp", "snow_fox.webp"];
var index = 0;

function slideShow() {
    console.log("hello");
    //Get the image
    let slide = document.getElementById("headimage");
    slide.style.opacity = '1'
    //change its source, move index
    slide.src = "images/" + images[(index%2)];
    index++;
    //set a timer to fade out and a timer to restart the process
    setTimeout(() => slide.style.opacity = '0', 4500);
    setTimeout(slideShow, 5000);
}

slideShow();