var lastScrollTop; // This Varibale will store the top position
navbar = document.getElementById('navbar'); // Get The NavBar
window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  if(this.window.innerWidth <= 768)
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top='-80px';
    //set the value to the negetive of height of navbar
  }
  else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
});
//FOr setting toggle menu
function settingtoggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate"),
  document.getElementById("visual-mode-toggle-button-container").classList.toggle("visual-mode-show");
}

function visualmode() {
  document.body.classList.toggle("light-mode"),
  document.querySelectorAll(".need-to-beinvert").forEach(function (e) {
    e.classList.toggle("invertapplied");
  });
}

let mobiletogglemenu = document.getElementById("mobile-toggle-menu");
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling"),
  document.getElementById("mobile-toggle-menu").classList.toggle("show-toggle-menu"),
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"),
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"),
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling"),
  document.getElementById("mobile-toggle-menu").classList.remove("show-toggle-menu"),
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1"),
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2"),
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(
    ".mobile-toggle-menu .mobile-navbar-tabs-ul li"
  );
window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach((t) => {
    let o = t.offsetTop;
    t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"));
  }),
    mobilenavLi.forEach((t) => {
      t.classList.remove("active-this-mobile-tab"),
        t.classList.contains(e) && t.classList.add("active-this-mobile-tab");
    }),
    navLi.forEach((t) => {
      t.classList.remove("active-this-tab"),
        t.classList.contains(e) && t.classList.add("active-this-tab");
    });
});

//back to top button
let mybutton = document.getElementById("back-to-top-button");
function scrollFunction() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function scrolltoTopfunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
(window.onscroll = function () {
  scrollFunction();
}),
  document.addEventListener(
    "contextmenu",
    function (e) {
      "IMG" === e.target.nodeName && e.preventDefault();
    },
    !1
  );