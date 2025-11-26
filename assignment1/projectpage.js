// Get appropriate elements from webpage
const outputParagraph = document.getElementById("projectcontent");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
var jsonData

// Fetch JSON File
fetch("projects.json")
.then(response => {
    return response.json();
})
.then(data => {
    // Print data out for debugging, and set up the event listener
    console.log(data);
    jsonData = data;
    document.getElementById("projectselector").addEventListener("change", setProjectDisplay);
})

function setProjectDisplay(){
    // Get value of dropdown, set values equal to those kept under that key in the Projects.json
    console.log("test");
    console.log(document.getElementById("projectselector").value);
    var itemToChoose = jsonData[document.getElementById("projectselector").value];
    outputParagraph.innerHTML = itemToChoose.content;
    image1.src = itemToChoose.images[0].imagesrc;
    image1.alt = itemToChoose.images[0].imagealt;
    image2.src = itemToChoose.images[1].imagesrc;
    image2.alt = itemToChoose.images[1].imagealt;
    image3.src = itemToChoose.images[2].imagesrc;
    image3.alt = itemToChoose.images[2].imagealt;
}

console.log("aaaaa")
console.log(image1)