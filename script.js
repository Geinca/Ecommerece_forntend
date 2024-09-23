// Functionality to handle dropdown display on click or hover

document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown button and content
    const dropdown = document.querySelectorAll('.nav-item.dropdown');
    const dropdownContent = document.querySelectorAll('.dropdown-content');
    // const dropdown1 = document.querySelectorAll('.nav-item')

    // Show dropdown content on hover
    dropdown.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'flex'; // Show dropdown
    });

  
    // Hide dropdown content when not hovering
    dropdown.addEventListener('mouseleave', function() {
        dropdownContent.style.display = 'none'; // Hide dropdown
    });

    // Optional: Dropdown toggle on click (for mobile or accessibility)
    dropdown.addEventListener('click', function(e) {
        // Toggle dropdown content visibility
        if (dropdownContent.style.display === 'flex') {
            dropdownContent.style.display = 'none';
            window.location.assign(`kids.html`)
        } else {
            dropdownContent.style.display = 'flex';
        }

        // Prevent default action if needed (i.e., if the anchor should not navigate)
        e.preventDefault();
    });
});
document.querySelectorAll('.store').forEach(store => {
    store.addEventListener('mouseover', () => {
        store.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
        store.style.trasition='scal(1.2)'
    });

    store.addEventListener('mouseout', () => {
        store.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

document.getElementById('view-all-btn').addEventListener('click', function() {
    const productsList = document.getElementById('hidden-products');
    if (productsList.style.display === 'none' || productsList.style.display === '') {
        productsList.style.display = 'grid';  // Display the hidden products in grid layout
        this.textContent = 'Show Less';  // Change button text to 'Show Less'
    } else {
        productsList.style.display = 'none';  // Hide the products list
        this.textContent = 'View All';  // Revert button text back to 'View All'
    }
});
// Sorting functionality
const sortSelect = document.getElementById('sort');
sortSelect.addEventListener('change', function() {
    let selectedValue = sortSelect.value;
    if (selectedValue === 'low-to-high') {
        sortProductsByPrice('asc');
    } else if (selectedValue === 'high-to-low') {
        sortProductsByPrice('desc');
    } else if (selectedValue === 'rating') {
        sortProductsByRating();
    } else {
        resetSorting();
    }
});

function sortProductsByPrice(order) {
    const products = Array.from(document.querySelectorAll('.product-card'));
    const sortedProducts = products.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.product-price').textContent.replace('₹', ''));
        const priceB = parseInt(b.querySelector('.product-price').textContent.replace('₹', ''));
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    updateProductsList(sortedProducts);
}

function sortProductsByRating() {
    const products = Array.from(document.querySelectorAll('.product-card'));
    const sortedProducts = products.sort((a, b) => {
        const ratingA = parseFloat(a.querySelector('.rating').textContent);
        const ratingB = parseFloat(b.querySelector('.rating').textContent);
        return ratingB - ratingA;
    });
    updateProductsList(sortedProducts);
}

function resetSorting() {
    const products = Array.from(document.querySelectorAll('.product-card'));
    const originalOrder = products.sort((a, b) => a.dataset.index - b.dataset.index);
    updateProductsList(originalOrder);
}

function updateProductsList(sortedProducts) {
    const productsList = document.querySelector('.products-list');
    productsList.innerHTML = ''; // Clear the current list
    sortedProducts.forEach(product => productsList.appendChild(product)); // Append sorted products
}
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    // Handle star click event
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Set the rating value
            const ratingValue = star.getAttribute('data-value');
            ratingInput.value = ratingValue;

            // Highlight the stars up to the clicked one
            stars.forEach((s, i) => {
                if (i < index + 1) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

    // Handle form submission
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Ensure rating is selected
        if (!ratingInput.value) {
            alert("Please select a star rating.");
            return;
        }

        // Get form values
        const name = document.getElementById('name').value;
        const rating = ratingInput.value;
        const comments = document.getElementById('comments').value;

        // Create feedback item
        const feedbackItem = document.createElement('li');
        feedbackItem.innerHTML = `<strong>${name}</strong> rated it <strong>${rating}</strong>/5 stars<br>${comments}`;

        // Add feedback item to the list
        document.getElementById('feedbackItems').appendChild(feedbackItem);

        // Clear form fields
        document.getElementById('feedbackForm').reset();
        stars.forEach(star => star.classList.remove('active')); // Reset stars
    });
});

