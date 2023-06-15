//Switch function
const switchTheme = () => {
  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute('data-theme'),
      newTheme
  
  newTheme = (dataTheme === 'light' ? 'dark' : 'light')
  rootElem.setAttribute('data-theme', newTheme)
  console.log("switcherino")
}

//Add event listener for clicks on switcher3
document.querySelector('#switcher2').addEventListener('click', switchTheme)
document.querySelector('#switcher1').addEventListener('click', switchTheme)


//flickering lights when on, simple off, very fun
async function switchTheme() {
  const lightSound1 = document.getElementById('lightSound1');
  const lightSound2 = document.getElementById('lightSound2');
  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute('data-theme'),
    newTheme

  newTheme = (dataTheme === 'light' ? 'dark' : 'light')

  if (newTheme === 'light') {
    console.log('here')
    lightSound1.play()

    await new Promise((resolve) => setTimeout(resolve, 500));
    switcheroo(rootElem, 'flicker1')
    await new Promise((resolve) => setTimeout(resolve, 500));
    switcheroo(rootElem, 'flicker2')

    await new Promise((resolve) => setTimeout(resolve, 500));
    switcheroo(rootElem, 'light');

    console.log('switching to light')
  } else {
    console.log('there')
    lightSound2.play()
    switcheroo(rootElem, newTheme)
  }
  console.log("switcherino")
}

//switch Language manual version
function switchLanguage(selectedLanguage) {
  
  if (selectedLanguage === "en") {
    console.log('english here')
    rootElem.setAttribute('lang', 'en')
    fetch('../JSON/en.json')
      .then(response => response.json())
      .then(data => {
          // Pass the JSON data to the processing function
          processJsonData(data);
      })
      .catch(error => {
          // Handle any errors
          console.error('Error:', error);
      });
  } 
  
  else if (selectedLanguage === "fr") {
    console.log('french here')
    rootElem.setAttribute('lang', 'fr')
    fetch('../JSON/fr.json')
      .then(response => response.json())
      .then(data => {
          // Pass the JSON data to the processing function
          processJsonData(data);
      })
      .catch(error => {
          // Handle any errors
          console.error('Error:', error);
      });
  } 
  
  else if (selectedLanguage === "no") {
    console.log('norwegian here')
    rootElem.setAttribute('lang', 'no')
    fetch('../JSON/no.json')
      .then(response => response.json())
      .then(data => {
          // Pass the JSON data to the processing function
          processJsonData(data);
      })
      .catch(error => {
          // Handle any errors
          console.error('Error:', error);
      });
  }
}

var buttonEn = document.getElementById("enButton");
var buttonFr = document.getElementById("frButton");
var buttonEs = document.getElementById("noButton");

buttonEn.addEventListener("click", function() {
  switchLanguage("en");
});

buttonFr.addEventListener("click", function() {
  switchLanguage("fr");
});

buttonEs.addEventListener("click", function() {
  switchLanguage("no");
});

function changeContent(key, value) {
  var i = document.getElementById(key);
  i.textContent = value;
  console.log(key + " updated")
}

// Replace the text content

function processJsonData(data) {
  for (var key in data) {
      if (data.hasOwnProperty(key)) {
          var value = data[key];
          changeContent(key, value);
      }
  }
}

/*
var languageButtons = document.querySelectorAll('.language-button');
var languageImages = document.querySelectorAll('.language-image')
var languageData = {};

function editActiveImage(currentLang) {
  var currentLangImg = document.getElementById(currentLang + "Img")

  // Updating the correct image to be set as "active"
  languageImages.forEach((img) => {
    if (img !== currentLangImg) {
      img.classList.remove("active");
    } else {
      img.classList.add("active");
    }
  });
}

// Attach event listeners to language buttons and run switch language and edit active image
languageButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var selectedLanguage = this.dataset.language;
    editActiveImage(selectedLanguage);
    switchLanguage(selectedLanguage);
  });
});

//
function switchLanguage(selectedLanguage) {
  rootElem.setAttribute('lang', selectedLanguage);

  // Fetch the JSON file for the selected language
  fetch('../JSON/' + selectedLanguage + '.json')
    .then(response => response.json())
    .then(data => {
      languageData = data;
      updateContent();
      console.log(selectedLanguage)
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function updateContent() {
  // Loop through each key-value pair in the languageData object
  for (var key in languageData) {
    if (languageData.hasOwnProperty(key)) {
      var value = languageData[key];
      changeContent(key, value);
    }
  }
}

function changeContent(key, value) {
  var element = document.getElementById(key);
  if (element) {
    element.textContent = value;
    console.log(key + ' updated');
  }
}

*/