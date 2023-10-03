$(document).ready(function () {
  function animateProjectCards(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        entry.target.style.opacity = 1; // Set opacity to 1 when the card is in view
        observer.unobserve(entry.target); // Stop observing once animation is applied
      }
    });
  }
  const observer = new IntersectionObserver(animateProjectCards, { threshold: 0.1 });
  const projectCards = document.querySelectorAll(".project__card");
  projectCards.forEach((card) => {
    observer.observe(card);
  });
});
