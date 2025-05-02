// Efek muncul perlahan saat scroll
const elements = document.querySelectorAll('section, .product-item, .btn-order');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => {
  el.classList.add('before-fade');
  observer.observe(el);
});

let modal = document.getElementById("modal");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function openModal() {
  modal.style.display = "block";
  showSlide(currentSlide);
}

function closeModal() {
  modal.style.display = "none";
}

function showSlide(n) {
  slides.forEach(slide => slide.style.display = "none");
  slides[n].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector(".close").onclick = closeModal;
document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = prevSlide;

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
