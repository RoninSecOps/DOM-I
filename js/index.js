const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const multipleSelections = document.querySelectorAll('nav a');
multipleSelections[0].textContent = siteContent['nav']['nav-item-1'];
multipleSelections[1].textContent = siteContent['nav']['nav-item-2'];
multipleSelections[2].textContent = siteContent['nav']['nav-item-3'];
multipleSelections[3].textContent = siteContent['nav']['nav-item-4'];
multipleSelections[4].textContent = siteContent['nav']['nav-item-5'];
multipleSelections[5].textContent = siteContent['nav']['nav-item-6'];

const headerImg = document.getElementById('cta-img');
headerImg.src = siteContent['cta']['img-src'];

const contentH1 = document.querySelectorAll('.cta-text h1');
contentH1[0].textContent = siteContent['cta']['h1'];

const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

const horizontalImg = document.getElementById('middle-img');
horizontalImg.src = siteContent['main-content']['middle-img-src'];

const mainContentH4s = document.querySelectorAll('.text-content h4');
mainContentH4s[0].textContent = siteContent['main-content']['features-h4'];
mainContentH4s[1].textContent = siteContent['main-content']['about-h4'];
mainContentH4s[2].textContent = siteContent['main-content']['services-h4'];
mainContentH4s[3].textContent = siteContent['main-content']['product-h4'];
mainContentH4s[4].textContent = siteContent['main-content']['vision-h4'];

const mainContentPs = document.querySelectorAll('.text-content p');
mainContentPs[0].textContent = siteContent['main-content']['features-content'];
mainContentPs[1].textContent = siteContent['main-content']['about-content'];
mainContentPs[2].textContent = siteContent['main-content']['services-content'];
mainContentPs[3].textContent = siteContent['main-content']['product-content'];
mainContentPs[4].textContent = siteContent['main-content']['vision-content'];

const contactH4 = document.querySelectorAll('.contact h4');
contactH4[0].textContent = siteContent['contact']['contact-h4'];

const contactPs = document.querySelectorAll('.contact p');
contactPs[0].textContent = siteContent['contact']['address'];
contactPs[1].textContent = siteContent['contact']['phone'];
contactPs[2].textContent = siteContent['contact']['email'];

const footerS = document.querySelectorAll('footer p');
footerS[0].textContent = siteContent['footer']['copyright'];

const navItem7 = document.createElement('a');
navItem7.textContent = 'Start';
navItem7.setAttribute('href', '#');
const addNavItem7 = document.querySelector('nav');
addNavItem7.prepend(navItem7);

const navItem8 = document.createElement('a');
navItem8.textContent = 'End';
navItem8.setAttribute('href', '#');
const addNavItem8 = document.querySelector('nav');
addNavItem8.append(navItem8);
