// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Typing effect
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
  
  document.addEventListener("DOMContentLoaded", () => {
    if (typingText.length) setTimeout(type, 1000);
  });
  const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});
