console.log("running")

const rootElem = document.documentElement
const storedTheme = localStorage.getItem('theme');


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
  applyTheme(rootElem, newTheme)
  lightSound2.play()
  console.log("switcherino")
  localStorage.setItem('theme', newTheme)
}
function applyTheme(rootElem, theme) {
  rootElem.setAttribute('data-theme', theme)
}

window.addEventListener('load', function(){
  const rootElem = document.documentElement;
  rootElem.style.setProperty('--default-transition', 'opacity .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out, fill .3s ease-in-out, transform .3s ease-in-out, background-image .3s ease-in-out, background-color .3s ease-in-out');
})


//Add event listener for mousedown and clicks on switcher3
document.querySelector('#switcher').addEventListener('mousedown', playAudio)
document.querySelector('#switcher').addEventListener('click', switchTheme)

/*=========================================================================*/
/*                            page switch                              */
/*=========================================================================*/

const currentPageName = getCurrentPageName();
setActiveLink(currentPageName);
console.log(currentPageName);

function setActiveLink(pageName) {
  const navLinks = document.querySelectorAll('.pageNav a');
  navLinks.forEach(link => link.classList.remove('active'));
  console.log('links removed?')
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName) {
      link.classList.add('active');
      console.log(pageName + ' has been updated');
    }
  });
}

function getCurrentPageName() {
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/');
  let currentPageName = pathParts[pathParts.length - 1];
  console.log(currentPageName + ' has been identified');
  return currentPageName;
}

/*=========================================================================*/
/*                            language switch                              */
/*=========================================================================*/

const currentLanguage = getCurrentLanguage();
setActiveLanguage(currentLanguage);
console.log('currentLanguage')

function setActiveLanguage(language) {
  const langNavImages = document.querySelectorAll('.language-image');
  langNavImages.forEach(image => image.classList.remove('active'));
  console.log('Language images removed');
  langNavImages.forEach(image => {
    const dataLanguage = image.parentElement.getAttribute('data-language');
    if (dataLanguage === language) {
      image.classList.add('active');
      console.log(language + ' language image has been updated');
    }
  });
}

function getCurrentLanguage() {
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/');
  let currentLanguage = pathParts[pathParts.length - 2];
  console.log(currentLanguage + ' language has been identified');
  return currentLanguage;
}




/*

// Set the initial language based on the stored value or default to a fallback language
if (selectedLanguage) {
  setLanguage(selectedLanguage);
  editActiveImage(selectedLanguage);
} else {
  // Set a default language if no language is stored
  selectedLanguage = 'en'; // Set your default language here
  setLanguage(selectedLanguage);
}

languageButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    selectedLanguage = this.dataset.language;
    editActiveImage(selectedLanguage);
    setLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  });
});

*/

