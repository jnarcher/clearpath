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
