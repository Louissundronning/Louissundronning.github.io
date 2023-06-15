// Get the <p> element by its ID
var paragraphElement = document.getElementById("info");

function changeContent(key, value) {
    var i = document.getElementById(key);
    i.textContent = value;
    console.log(key + " updated")
}
// Replace the text content

document.querySelector('#button').addEventListener('click', function () {
    fetch('../JSON/test.json')
        .then(response => response.json())
        .then(data => {
            // Pass the JSON data to the processing function
            processJsonData(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
})

function processJsonData(data) {
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var value = data[key];
            // Call your function with the key and value
            changeContent(key, value);
        }
    }
}

function yourFunction(key, value) {
    // Perform operations with the key and value
    console.log("Key:", key);
    console.log("Value:", value);
}

