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
/*                         page & language switch                          */
/*=========================================================================*/

const currentPageName = getCurrentPageName();
let currentLanguage = getCurrentLanguage();
setActiveLink(currentPageName);
setActiveLanguage(currentLanguage);
updateLanguageLinks(currentPageName);

console.log(currentPageName);

function setActiveLink(pageName) {
  const navLinks = document.querySelectorAll('.pageNav a');
  navLinks.forEach(link => link.classList.remove('active'));
  console.log('Links removed');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName) {
      link.classList.add('active');
      console.log(pageName + ' has been updated');
    }
  });
}

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

function updateLanguageLinks(currentPage) {
  const langNavLinks = document.querySelectorAll('.language-link');
  langNavLinks.forEach(link => {
    const language = link.getAttribute('data-language');
    const href = `/${language}/${currentPage}`;
    link.setAttribute('href', href);
    console.log(`Updated href for ${language}: ${href}`);
  });
}

function getCurrentPageName() {
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/');
  let currentPageName = pathParts[pathParts.length - 1];
  console.log(currentPageName + ' has been identified');
  return currentPageName;
}

function getCurrentLanguage() {
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/');
  let currentLanguage = pathParts[pathParts.length - 2];
  console.log(currentLanguage + ' language has been identified');
  return currentLanguage;
}

function saveLanguageSelection(language) {
  localStorage.setItem('selectedLanguage', language);
  console.log('Selected language (' + language + ') saved to local storage');
}

function getSavedLanguageSelection() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  console.log('Retrieved selected language (' + selectedLanguage + ') from local storage');
  return selectedLanguage;
}

// Retrieve the saved language from local storage
const savedLanguage = getSavedLanguageSelection();

// If a language is saved, use it; otherwise, use the current language
currentLanguage = savedLanguage ? savedLanguage : currentLanguage;

// Save the current language to local storage
saveLanguageSelection(currentLanguage);
