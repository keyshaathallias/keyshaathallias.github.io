//Toggle class active

const navbarNav = document.querySelector ('.navbar-nav');

//ketika humberger menu di klik
document.querySelector('#menu').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

//klik diluar sidebar utk menghilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const hobbiesTab = document.querySelector('#hobbies');
const biodataTab = document.querySelector('#biodata');
const hobbiesLink = document.querySelector('#hobbies-link');
const biodataLink = document.querySelector('#biodata-link');

// Function to switch between tabs
function opentab(tabName) {
    if (tabName === 'hobbies') {
        hobbiesTab.classList.add('active-tab');
        biodataTab.classList.remove('active-tab');
        hobbiesLink.classList.add('active-link');
        biodataLink.classList.remove('active-link');
        tabIndicator.style.transform = 'translateX(0)';
    } else if (tabName === 'biodata') {
        hobbiesTab.classList.remove('active-tab');
        biodataTab.classList.add('active-tab');
        hobbiesLink.classList.remove('active-link');
        biodataLink.classList.add('active-link');
        tabIndicator.style.transform = 'translateX(100%)';
    }
}
//About me
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// project portfolio
const initSlider = (containerId, scrollbarId, buttonClass) => {
  const imageList = document.querySelector(`#${containerId} .image-list`);
  const slideButtons = document.querySelectorAll(`#${containerId} .${buttonClass}`);

  const sliderScrollBar = document.querySelector(`#${scrollbarId}`);
  const scrollbarThumb = sliderScrollBar.querySelector(".scrollback-thumb");

  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  const imageListScrollStep = 320;

  // Handle scrollbar thumb drag
  let isDragging = false;
  let startX, thumbStartX;
  const maxThumbPosition = sliderScrollBar.clientWidth - scrollbarThumb.offsetWidth;

  scrollbarThumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    thumbStartX = parseFloat(getComputedStyle(scrollbarThumb).left);
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    let newThumbPosition = thumbStartX + deltaX;

    // Ensure the slider thumb stops at the right end when reaching the boundary
    newThumbPosition = Math.min(maxThumbPosition, Math.max(0, newThumbPosition));

    scrollbarThumb.style.left = newThumbPosition + "px";

    // Calculate and update the scroll position of images
    const scrollPosition = (newThumbPosition / maxThumbPosition) * maxScrollLeft;
    imageList.scrollLeft = scrollPosition;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageListScrollStep * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // Update the scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    const thumbPosition = (scrollPosition / maxScrollLeft) * 250;
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
  });

  // Initialize the scrollbar thumb position
  updateScrollThumbPosition();
};

window.addEventListener("load", () => {
  initSlider("slider-illustration", "scrollbar-illustration", "slide-button");
  initSlider("slider-3d", "scrollbar-3d", "slide-button");
  initSlider("slider-animation", "scrollbar-animation", "slide-button");
  initSlider("slider-achievement", "scrollbar-achievement", "slide-button");
});

let btn = document.getElementById("kabur");
let s = true
btn.addEventListener("mouseenter", function(){
  if (s == true) {
    s = false
    btn.classList.add("kanan")
    btn.classList.remove("kiri")
  }else{
    s=true
    btn.classList.remove("kanan")
    btn.classList.add("kiri")
  }
})
console.log(btn);