const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// HERO SLIDER
const slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;
function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 5000);

// PRODUCT FILTER
const searchInput = document.getElementById("productSearch");
const categorySelect = document.getElementById("productCategory");
const products = document.querySelectorAll(".product-card");

function filterProducts(){
  const search = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  products.forEach(p=>{
    const name = p.dataset.name.toLowerCase();
    const ref = p.dataset.ref.toLowerCase();
    const cat = p.dataset.category;

    const matchSearch = name.includes(search) || ref.includes(search);
    const matchCat = category === "all" || cat === category;

    p.style.display = matchSearch && matchCat ? "block" : "none";
  });
}
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

// WHATSAPP INQUIRY
document.querySelectorAll(".whatsapp-inquiry").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const product = btn.dataset.product;
    const ref = btn.dataset.ref;
    const msg = `Hello AL-QADIR MACHINERY,%0A%0AProduct: ${product}%0AReference: ${ref}%0APlease share price details.`;
    window.open(`https://wa.me/923009421976?text=${msg}`,"_blank");
  });
});
