console.log("running")
const rootElem = document.documentElement

/*=========================================================================*/
/*                             light switch                                */
/*=========================================================================*/

function playAudio() {
  const lightSound1 = new Audio('../assets/press-down.mp3')
  lightSound1.play()
}

function switchTheme() {
  const lightSound2 = document.getElementById('releaseSound');
  let dataTheme = rootElem.getAttribute('data-theme'),
    newTheme

  newTheme = (dataTheme === 'light' ? 'dark' : 'light')
  switcheroo(rootElem, newTheme)
  lightSound2.play()
  console.log("switcherino")
}


function switcheroo(rootElem, theme) {
  rootElem.setAttribute('data-theme', theme)
}

//Add event listener for mousedown and clicks on switcher3
document.querySelector('#switcher').addEventListener('mousedown', playAudio)
document.querySelector('#switcher').addEventListener('click', switchTheme)

/*=========================================================================*/
/*                            language switch                              */
/*=========================================================================*/


var languageButtons = document.querySelectorAll('.language-button');
var languageImages = document.querySelectorAll('.language-image');
var languageData = {};

function editActiveImage(currentLang) {
  var currentLangImg = document.getElementById(currentLang + "Img");

  languageImages.forEach((img) => {
    if (img !== currentLangImg) {
      img.classList.remove("active");
    } else {
      img.classList.add("active");
    }
  });
}

languageButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var selectedLanguage = this.dataset.language;
    editActiveImage(selectedLanguage);
    switchLanguage(selectedLanguage);
  });
});

function switchLanguage(selectedLanguage) {
  rootElem.setAttribute('lang', selectedLanguage);

  fetch('../JSON/' + selectedLanguage + '.json')
    .then(response => response.json())
    .then(data => {
      languageData = data;
      updateContent();
      console.log(selectedLanguage);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function updateContent() {
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
    if (element.tagName === "INPUT") {
      element.placeholder = value;
      if (element.type === "submit") {
        element.value = value;
      }
    } else {
      element.textContent = value;
    }
    console.log(key + ' updated');
  }
}