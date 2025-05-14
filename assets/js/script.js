'use strict';
// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}
// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});
// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
select.addEventListener("click", function () {
  elementToggleFunc(this);
});
// Add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase().replace(/ /g, "-");
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}
// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
// Filter function
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all" || filterItems[i].dataset.category.split(' ').includes(selectedValue)) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}
// Show all items by default
document.addEventListener("DOMContentLoaded", function() {
  // Set default filter to "all"
  const allButton = Array.from(filterBtn).find(btn => btn.getAttribute('data-filter-btn') === 'all');
  if (allButton) {
    allButton.classList.add('active');
  }
  filterFunc('all');
  
  // Visitor Counter functionality
  initVisitorCounter();
});

// Visitor Counter function
function initVisitorCounter() {
  const visitorCount = document.getElementById('visitor-count');
  
  // Skip if element doesn't exist (e.g., on pages without the counter)
  if (!visitorCount) return;
  
  // Function to increment visitor count using CountAPI
  function incrementVisitorCount() {
    // Using CountAPI - free public API for simple counting
    fetch('https://api.countapi.xyz/hit/muhammadqamarabbas-portfolio/visits')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Update the counter display with formatted number
        visitorCount.textContent = data.value.toLocaleString();
        
        // Add a nice counting animation
        animateCounter(data.value);
      })
      .catch(error => {
        console.error('Error updating visitor counter:', error);
        visitorCount.textContent = "Counter unavailable";
      });
  }
  
  // Function to animate the counter (optional)
  function animateCounter(finalValue) {
    // Skip animation for small numbers
    if (finalValue < 10) return;
    
    // Start from a lower value
    let startValue = Math.max(1, Math.floor(finalValue * 0.7));
    let currentValue = startValue;
    
    // Hide the current value during animation
    visitorCount.style.opacity = '0.7';
    
    // Animate the counter
    const counterInterval = setInterval(() => {
      currentValue += Math.ceil((finalValue - startValue) / 15);
      
      if (currentValue >= finalValue) {
        clearInterval(counterInterval);
        currentValue = finalValue;
        visitorCount.style.opacity = '1';
      }
      
      visitorCount.textContent = currentValue.toLocaleString();
    }, 40);
  }
  
  // Start the counter
  incrementVisitorCount();
}

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
// Add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
// Add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
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
