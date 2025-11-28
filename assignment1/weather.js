//Get DOM element
const outputPar = document.getElementById("output");

//Get data from weather API
fetch("https://api.weatherapi.com/v1/current.json?key=49a4b9f01c4547d3a04211350250910&q=Dublin")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        console.log(data.current.condition.text)
        //Set DOM to recieved JSON data
        weatherInDublin = data.current.condition.text + ", " + data.current.temp_c + "°";
        outputPar.textContent = weatherInDublin
    })
    .catch((err) => {
        console.log(err);

    })
