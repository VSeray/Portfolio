/** Create data object */
const projects = [{
  name: 'To Do List App',
  details: ['Today\'s todo', 'Front End Dev', '2022'],
  smallDescription: '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you manage them too!',
  bigDescription: 'A simple page with a list of To-Do tasks. Users can add to-do items, check completed, clear completed, and delete tasks. Built with Webpack, Javascript and utilizes LocalStorage.',
  imageUrlMobile: 'assets/images/Todo-List.PNG',
  imageUrlDesktop: 'assets/images/Todo-List.PNG',
  popupImageUrlMobile: 'assets/images/Todo-List.PNG',
  popupImageUrlDesktop: 'assets/images/Todo-List.PNG',
  technologiesPopup: ['html', 'css', 'javaScript', 'ES6', 'WebPack', 'HTML & CSS & JavaScript Linters'],
  technologies: ['html', 'css', 'javaScript'],
  linkLive: 'https://vseray.github.io/To-Do-list/dist/',
  linkSource: 'https://github.com/VSeray/To-Do-list.git',
},
{
  name: 'LeaderBoard',
  details: ['Fun & Games', 'Full Stack Dev', '2022'],
  smallDescription: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. ',
  bigDescription: "Built for games! you can submit scores of players, and refresh to see who is on top of the leaderboard. It was built with JavaScript, HTML, and CSS. Thanks to the central LeaderBoard API service all data is preserved. ",
  imageUrlMobile: 'assets/images/Screenshot2.PNG',
  imageUrlDesktop: 'assets/images/Screenshot1.PNG',
  technologiesPopup: ['html','css', 'javaScript'],
  technologies: ['html', 'css', 'javaScript'],
  popupImageUrlMobile: 'assets/images/Screenshot2.  PNG',
  popupImageUrlDesktop: 'assets/images/Screenshot1.PNG',
  linkLive: 'https://vseray.github.io/Leaderboard/dist/',
  linkSource: 'https://github.com/VSeray/Leaderboard.git',
},
{
  name: 'Space Travelers Hub',
  details: ['Rockets & Missions', 'Full Stack Dev', '2022'],
  smallDescription: "The Space Travelers' Hub consists of Rockets, Missions and the My Profile section. Where we can reserve and display on My profile.",
  bigDescription: "The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The Missions section displays a list of current missions along with their brief description and participation status, a button that allows users to join the selected mission or leave the mission the user joined earlier. Users can book each dragon by clicking the reservation button or cancel the previously made booking. The My Profile section displays all reserved rockets and space missions.",
  imageUrlMobile: 'assets/images/Space.PNG',
  imageUrlDesktop: 'assets/images/Space.PNG',
  technologiesPopup: ['html', 'React & Redux', 'css', 'javaScript'],
  technologies: ['html', 'React & Redux', 'css', 'javaScript'],
  popupImageUrlMobile: 'assets/images/Space.PNG',
  popupImageUrlDesktop: 'assets/images/Space.PNG',
  linkLive: 'https://distracted-goldberg-94b899.netlify.app/',
  linkSource: 'https://github.com/banlon-jones/Space-Travelers-Hub.git',
},
{
  name: 'Uber navigation',
  details: ['Uber', 'Lead developer', '2018'],
  smallDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrlMobile: 'assets/images/modal_mobile.png',
  imageUrlDesktop: 'assets/images/modal_desktop.png',
  technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  popupImageUrlMobile: 'assets/images/modal_snapshoot_mobile.png',
  popupImageUrlDesktop: 'assets/images/modal_snapshoot.png',
  linkLive: '',
  linkSource: '',
}];

/** Create data object end */

/** Set up mobile menu start */

const menuOverlay = document.querySelector('#menu-overlay');
const mobileMenuButton = document.querySelector('#mobileMenuButton');

function mobileMenuToogle() {
  menuOverlay.style.width = '100%';
}

function closeMobileMenu() {
  menuOverlay.style.width = '0';
}

mobileMenuButton.addEventListener('click', () => {
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll('.menu-mobile li a');
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener('click', () => {
    closeMobileMenu();
  });
}

/** Set up mobile menu finish */

/** Sort out technologies */
function technologies(popup, techData) {
  let m = 1;
  let technologiesPopup = '';
  let technologies = '';
  techData.forEach((tech) => {
    if (!popup) {
      if (tech.toLowerCase().includes('ruby')) {
        technologies += `<li class="lang ruby">${tech}</li>`;
      } else {
        technologies += `<li class="lang">${tech}</li>`;
      }
    } else {
      if (m <= 3) {
        technologies += `<li class="lang">${tech}</li>`;
      } else {
        technologiesPopup += `<li class="lang ruby">${tech}</li>`;
      }
      m += 1;
    }
  });
  return [technologies, technologiesPopup];
}

/** Sort out technologies */

/** * Dynamically adding works-flex items in works section start */
let projectsItemsBuild = '';
for (let i = 0; i < projects.length; i += 1) {
  // determine flex postion of image and work description
  let flexPosition = 'start';
  let flexPositionReverse = 'end';
  if (i % 2 !== 0) {
    flexPosition = 'end';
    flexPositionReverse = 'start';
  }

  // further loop within the parent loop to break and read technologies
  const techData = technologies(false, projects[i].technologies);

  projectsItemsBuild += `<div class="works-flex">
                          <div class="works-flex-item work-image ${flexPosition}">
                              <img src="${projects[i].imageUrlMobile}" class="img-style" alt="${projects[i].name} project screenshot"/>
                              <img src="${projects[i].imageUrlDesktop}" class="img-style-desktop" alt="${projects[i].name} project screenshot"/>
                          </div>
                          <div class="wcontainer ${flexPositionReverse}">
                              <div class="works-flex-item">
                                  <h3 class="intro-text-works">${projects[i].name}</h3>
                              </div>
                              <ul class=" works-flex-item titles-container">
                                  <li class="list-main">${projects[i].details[0]}</li>
                                  <li class="titles-item">${projects[i].details[1]}</li>
                                  <li class="titles-item">${projects[i].details[2]}</li>
                              </ul>
                              <p class="works-flex-item works-description">
                                  ${projects[i].smallDescription}
                              </p>
                              <div class="works-flex-item">
                                  <ul class="lang-container">
                                      ${techData[0]}
                                  </ul>
                              </div>
                              <div class="works-flex-item">
                                  <div class="btn-see">
                                      <a href="javascript:void(0)" class="btn-see-project" project-index="${i}">See project</a>
                                  </div>
                              </div>
                          </div>
                        </div>`;
}

document.querySelector('#portfolio').innerHTML = projectsItemsBuild;

/** * Dynamically adding works-flex items in works section end */
function displayProjectDescriptionPopup(value) {
  const techData = technologies(true, projects[value].technologiesPopup);
  const projectPopup = document.querySelector('#projectPopup');
  const popupContentBuilder = `<div class="popup-content">
                                   <div class="popup-header">
                                       <div class="popup-title">
                                           <div class="topic">
                                               <h1>${projects[value].name}</h1>
                                               <span class="close-popup">&times;</span>
                                           </div>
                                           <ul>
                                           <li class="list-main">${projects[value].details[0]}</li>
                                           <li class="titles-item">${projects[value].details[1]}</li>
                                           <li class="titles-item">${projects[value].details[2]}</li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div class="popup-body">
                                       <div class="work-image">
                                           <img src="${projects[value].popupImageUrlMobile}" class="img-style" alt="${projects[value].name} project screenshot"/>
                                           <img src="${projects[value].popupImageUrlDesktop}" class="img-style-desktop-popup" alt="${projects[value].name} project screenshot"/>
                                       </div>
                                       <div class="description-container">
                                           <div class="project-text intro-message">
                                               <p>
                                               ${projects[value].bigDescription}
                                               </p>
                                           </div>
                                           <div class="project-tags">
                                               <div class="tags">
                                                   <ul>
                                                    ${techData[0]}
                                                   </ul>
                                                   <ul>
                                                    ${techData[1]}
                                                   </ul>
                                               </div>
                                               <div class="tags-buttons">
                                                   <a href="${projects[value].linkLive}" class="btn-see-project">See live <i class="fa fa-rss"></i></a>
                                                   <a href="${projects[value].linkSource}" class="btn-see-project">See source <i class="fa fa-github"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>`;
  projectPopup.innerHTML = popupContentBuilder;
  projectPopup.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    projectPopup.style.display = 'none';
  });
}
const seeProjectButtons = document.querySelectorAll('.btn-see-project');
for (let c = 0; c < seeProjectButtons.length; c += 1) {
  seeProjectButtons[c].addEventListener('click', () => {
    displayProjectDescriptionPopup(seeProjectButtons[c].getAttribute('project-index'));
  });
}