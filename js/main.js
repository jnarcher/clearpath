// ---------------- Navigation -----------------

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#']");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  })
}, {
  rootMargin: "-40% 0px -55% 0px"
})

function navTop() {
  scrollTo(0, 0)
}

sections.forEach(section => observer.observe(section))

// ------------ Safety Exit ----------------

function safetyExit() {
  history.replaceState(null, "", location.href);

  history.pushState(null, "", location.href);
  history.pushState(null, "", location.href);

  window.location.replace("https://google.com");
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    safetyExit();
  }
})

// ------------ Checklist ----------------

const checklistItems = document.querySelectorAll('.checklist-item');
const checklistCheckedCount = document.getElementById('checked-count');
const checklistTotalCount = document.getElementById('total-count');

checklistTotalCount.textContent = checklistItems.length;

checklistItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
    checklistCheckedCount.textContent = document.querySelectorAll('.checklist-item.checked').length;
  });
});

// ------------ Checklist ----------------

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.querySelector('.accordion-trigger').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    accordionItems.forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});