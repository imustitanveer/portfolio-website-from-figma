document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateNavLink() {
    let scrollY = window.scrollY + 100; // Adjust for navbar height
    let activeSection = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        activeSection = sectionId;
      }
    });

    if (activeSection) {
      // Remove the 'active' class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add the 'active' class to the current link
      const activeLink = document.querySelector(`.nav-link[href="#${activeSection}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", activateNavLink);
});

const moreTextEl = document.getElementById('more-text');
const toggleBtnEl = document.getElementById('toggle-btn');
const hideBtnEl = document.getElementById('hide-btn');
const imgHide = document.getElementById('image-hide');

toggleBtnEl.addEventListener('click', () => {
    moreTextEl.classList.toggle('hidden');
    toggleBtnEl.classList.toggle('hidden');
    hideBtnEl.classList.toggle('hidden');
    imgHide.classList.toggle('hidden');
});

hideBtnEl.addEventListener('click', () => {
    moreTextEl.classList.toggle('hidden');
    toggleBtnEl.classList.toggle('hidden');
    hideBtnEl.classList.toggle('hidden');
    imgHide.classList.toggle('hidden');
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Event listener for category buttons
document.querySelectorAll('.category-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterProjects(category);
  });
});

// Event listener for category buttons
document.querySelectorAll('.category-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterProjects(category);
  });
});

// Event listener for category buttons
document.querySelectorAll('.category-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterProjects(category);
  });
});

document.querySelectorAll('.category-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterProjects(category);
    highlightActiveButton(button);  // Add the active class to the clicked button
  });
});

function highlightActiveButton(activeButton) {
  // Remove 'active' class from all category buttons
  document.querySelectorAll('.category-btn').forEach((button) => {
    button.classList.remove('active'); // Remove active class from all buttons
  });

  // Add 'active' class to the clicked button
  activeButton.classList.add('active');
}

function filterProjects(category) {
  const projects = document.querySelectorAll('.portfolio-item');
  
  // Show all projects if "All" is selected
  if (category === "all") {
    projects.forEach((project) => {
      project.classList.remove('hidden'); // Show all projects
      highlightActiveButton(document.querySelector('.category-btn[data-category="all"]'));
    });
  } else {
    projects.forEach((project) => {
      if (project.getAttribute('data-category') === category) {
        project.classList.remove('hidden'); // Show matching category
        highlightActiveButton(document.querySelector(`.category-btn[data-category="${category}"]`));
      } else {
        project.classList.add('hidden'); // Hide non-matching category
      }
    });
  }
}

// Function to toggle the navbar menu visibility and aria-expanded state
function toggleNavbarMenu() {
  const button = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-default");

  const isExpanded = button.getAttribute("aria-expanded") === "true";

  // Toggle the menu visibility
  menu.classList.toggle("hidden");

  // Update the aria-expanded attribute
  button.setAttribute("aria-expanded", !isExpanded);
}

// Add event listener to the hamburger button to trigger the toggle function on click
document.getElementById("navbar-toggle").addEventListener("click", toggleNavbarMenu);
