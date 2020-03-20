// Function for navigation sidebar
var hamburger = document.querySelector ('.hamburger');
var nav = document.querySelector ('.menu');
hamburger.addEventListener ('click',showNav);

function showNav() {
  nav.classList.toggle('show');  
  hamburger.classList.toggle('open');
  document.querySelector('html').classList.toggle('no-scroll');
}

// Function for filter of resources
var tabsName = document.querySelectorAll(".tab a");
var resource = document.querySelectorAll(".tab-content li");

var tabArray = Array.from(tabsName);
tabArray.forEach(function(element){
  element.addEventListener('click',function(e){
    var text = e.target.text.toLowerCase();
    var currentTab = this;
    tabsName.forEach(function(tab) {
      if (tab == currentTab) {
        console.log('tab',tab);
        tab.classList.add("active-tab");
      }
      else {
        tab.classList.remove("active-tab");
      }
    });
    if (text == "all") {
      resource.forEach(function(tab) {
        tab.classList.remove("hide");
      });
    } 
    else {
      resource.forEach(function(tab) {
        var data = tab.getAttribute("data-attribute");        
        if (text != data) {
          tab.classList.add("hide");
        } else {
          tab.classList.remove("hide");
        }
      });
    }
  });
});