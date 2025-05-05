document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.mobile-nav').classList.remove('active');
    });
  });

  // Typing Effect
  const typingText = ["Student", "Web Developer", "Lifelong Learner"];
  let typingIndex = 0;
  let charIndex = 0;
  const typingElement = document.querySelector(".typing");

  function type() {
    if (charIndex < typingText[typingIndex].length) {
      typingElement.textContent += typingText[typingIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = typingText[typingIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      typingIndex = (typingIndex + 1) % typingText.length;
      setTimeout(type, 500);
    }
  }

  if (typingText.length) setTimeout(type, 1000);

  // Hamburger Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });
});
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});


// Pop animation trigger on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.tech-icon').forEach(icon => {
        icon.style.animationPlayState = 'running';
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.tech-icon').forEach(icon => {
  icon.style.animationPlayState = 'paused';
  observer.observe(icon);
});
