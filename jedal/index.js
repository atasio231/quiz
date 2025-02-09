document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
    // Add this line:
    document.querySelector('.header-overlay').classList.toggle('active');
});

document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.menu-toggle').classList.remove('active');
    document.querySelector('.slide-menu').classList.remove('active');
    this.classList.remove('active');
    // Add this line:
    document.querySelector('.header-overlay').classList.remove('active');
});
document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchContainer = document.querySelector('.search-container');
    const closeSearch = document.querySelector('.close-search');
    const searchInput = document.querySelector('.search-input');

    // Open search
    searchToggle.addEventListener('click', () => {
        searchContainer.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 300);
    });

    // Close search
    closeSearch.addEventListener('click', () => {
        searchContainer.classList.remove('active');
        searchInput.value = '';
    });

    // Close search on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
            searchInput.value = '';
        }
    });
});
