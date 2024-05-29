document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
    
    closeButton.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
    });
  });

const categorySelect = document.getElementById('categorySelect');
const articles = document.querySelectorAll('.card');

categorySelect.addEventListener('change', () => {
    const selectedValue = categorySelect.value;

    articles.forEach(article => {
        if (selectedValue === "" || article.dataset.category === selectedValue) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
});
