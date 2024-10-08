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

    
const card =document.getElementsByClassName('product-card')
card[0].addEventListener("click",function(){
    console.log("card clicked")
    window.location.assign("./card.html")
})

const btn =document.getElementsByClassName('add-to-cart')
btn[0].addEventListener("click",function(){
    console.log("btn clicked")
    window.location.assign("./addtocard.html")

})
const btn1 =document.getElementsByClassName('buy-now')
btn1[0].addEventListener("click",function(){
    console.log("btn clicked")
    window.location.assign("./address.html")

})

const svg = document.getElementsByClassName('bi-heart-fill')
svg[0].addEventListener("click",function(){
    svg[0].style.color='red'
})


