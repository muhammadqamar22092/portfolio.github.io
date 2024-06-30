'use strict'; // element toggle function

var elementToggleFunc = function elementToggleFunc(elem) {
  elem.classList.toggle("active");
}; // sidebar variables


var sidebar = document.querySelector("[data-sidebar]");
var sidebarBtn = document.querySelector("[data-sidebar-btn]"); // sidebar toggle functionality for mobile

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
}); // custom select variables

var select = document.querySelector("[data-select]");
var selectItems = document.querySelectorAll("[data-select-item]");
var selectValue = document.querySelector("[data-select-value]");
var filterBtn = document.querySelectorAll("[data-filter-btn]");
select.addEventListener("click", function () {
  elementToggleFunc(this);
}); // add event in all select items

for (var i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    var selectedValue = this.innerText.toLowerCase().replace(/ /g, "-");
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
} // filter variables


var filterItems = document.querySelectorAll("[data-filter-item]");

var filterFunc = function filterFunc(selectedValue) {
  for (var _i = 0; _i < filterItems.length; _i++) {
    if (selectedValue === "all" || selectedValue === filterItems[_i].dataset.category) {
      filterItems[_i].classList.add("active");
    } else {
      filterItems[_i].classList.remove("active");
    }
  }
}; // add event in all filter button items for large screen


var lastClickedBtn = filterBtn[0];

for (var _i2 = 0; _i2 < filterBtn.length; _i2++) {
  filterBtn[_i2].addEventListener("click", function () {
    var selectedValue = this.innerText.toLowerCase().replace(/ /g, "-");
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
} // contact form variables


var form = document.querySelector("[data-form]");
var formInputs = document.querySelectorAll("[data-form-input]");
var formBtn = document.querySelector("[data-form-btn]"); // add event to all form input fields

for (var _i3 = 0; _i3 < formInputs.length; _i3++) {
  formInputs[_i3].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
} // page navigation variables


var navigationLinks = document.querySelectorAll("[data-nav-link]");
var pages = document.querySelectorAll("[data-page]"); // add event to all nav link

for (var _i4 = 0; _i4 < navigationLinks.length; _i4++) {
  navigationLinks[_i4].addEventListener("click", function () {
    for (var j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}
//# sourceMappingURL=script.dev.js.map
