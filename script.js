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

    // function sortProductsByPrice(order) {
    //     const products = Array.from(document.querySelectorAll('.product-card'));
    //     const sortedProducts = products.sort((a, b) => {
    //         const priceA = parseInt(a.querySelector('.product-price').textContent.replace('₹', ''));
    //         const priceB = parseInt(b.querySelector('.product-price').textContent.replace('₹', ''));
    //         return order === 'asc' ? priceA - priceB : priceB - priceA;
    //     });
    //     updateProductsList(sortedProducts);
    // }

    // function sortProductsByRating() {
    //     const products = Array.from(document.querySelectorAll('.product-card'));
    //     const sortedProducts = products.sort((a, b) => {
    //         const ratingA = parseFloat(a.querySelector('.rating').textContent);
    //         const ratingB = parseFloat(b.querySelector('.rating').textContent);
    //         return ratingB - ratingA;
    //     });
    //     updateProductsList(sortedProducts);
    // }

    // function resetSorting() {
    //     const products = Array.from(document.querySelectorAll('.product-card'));
    //     const originalOrder = products.sort((a, b) => a.dataset.index - b.dataset.index);
    //     updateProductsList(originalOrder);
    // }

    // function updateProductsList(sortedProducts) {
    //     const productsList = document.querySelector('.products-list');
    //     productsList.innerHTML = ''; // Clear the current list
    //     sortedProducts.forEach(product => productsList.appendChild(product)); // Append sorted products
    // }
// document.addEventListener('DOMContentLoaded', () => {
//     const stars = document.querySelectorAll('.star');
//     const ratingInput = document.getElementById('rating');

//     // Handle star click event
//     stars.forEach((star, index) => {
//         star.addEventListener('click', () => {
//             // Set the rating value
//             const ratingValue = star.getAttribute('data-value');
//             ratingInput.value = ratingValue;

//             // Highlight the stars up to the clicked one
//             stars.forEach((s, i) => {
//                 if (i < index + 1) {
//                     s.classList.add('active');
//                 } else {
//                     s.classList.remove('active');
//                 }
//             });
//         });
//     });

//     // Handle form submission
//     document.getElementById('feedbackForm').addEventListener('submit', function(e) {
//         e.preventDefault();

//         // Ensure rating is selected
//         if (!ratingInput.value) {
//             alert("Please select a star rating.");
//             return;
//         }

//         // Get form values
//         const name = document.getElementById('name').value;
//         const rating = ratingInput.value;
//         const comments = document.getElementById('comments').value;

//         // Create feedback item
//         const feedbackItem = document.createElement('li');
//         feedbackItem.innerHTML = `<strong>${name}</strong> rated it <strong>${rating}</strong>/5 stars<br>${comments}`;

//         // Add feedback item to the list
//         document.getElementById('feedbackItems').appendChild(feedbackItem);

//         // Clear form fields
//         document.getElementById('feedbackForm').reset();
//         stars.forEach(star => star.classList.remove('active')); // Reset stars
//     });
// });

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer>
            <div class="paragraph" style=" color: rgb(152, 151, 151);font-size: 12px; ">
                ‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or
                6-month tenures from most leading banks. Until 26 June 2024, No Cost EMI is available
                with the purchase of an eligible iPhone made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month
                tenures from most leadings banks. Monthly pricing is rounded to the nearest rupee. Exact
                pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend
                applies as per your card-issuing bank threshold. Offer cannot be combined with multi Store for
                Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and
                conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without
                any prior notice. <a href="" style="color: rgb(108, 108, 108);">Terms apply.</a><br>
                Representative example:
                Based off a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00,
                paid over 6 months as six monthly payments of ₹13317.00.<br>
                Based off a 24-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of
                ₹11242.00, paid over 24 months as 24 monthly payments of ₹3329.00.<br>
                A subscription is required for multi TV+.
                <hr>
            </div>
            <div class="main">

                <div class="footer">
                    <ul>
                        <li>
                            <h5>Shop</h5>
                        </li>
                        <li>Store</li>
                        <li>women-store</li>
                        <li>men-store</li>
                        <li>kids-store</li>
                        <li>health</li>
                        <li>electronics</li>
                        <li>Home essesories</li>

                    </ul>
                </div>
                <div class="footer">
                    <ul>
                        <li>
                            <h5>Account</h5>
                        </li>
                        <li>Manage Your multi ID</li>
                        <li>multi Store Account</li>
                        <li>iCloud.com</li>
                        <li>
                            <h5>Entertainment</h5>
                        </li>
                        <li>multi One</li>
                        <li>multi TV+</li>
                        <li>multi Music</li>
                        <li>multi Arcade</li>
                        <li>multi Podcasts</li>
                        <li>multi Books</li>
                        <li>App Store</li>
                    </ul>
                </div>
                <div class="footer">
                    <ul>
                        <li>
                            <h5>multi Store</h5>
                        </li>
                        <li>Find a Store</li>
                        <li>Genius Bar</li>
                        <li>Today at multi</li>
                        <li>Group Reservations</li>
                        <li>multi Camp</li>
                        <li>multi Trade In</li>
                        <li>Ways to Buy</li>
                        <li>Recycling Programme</li>
                        <li>Order Status</li>
                        <li>Shopping Help</li>


                </div>
                <div class="footer">
                    <ul>
                        <li>
                            <h5>For Business</h5>
                        </li>
                        <li>multi and Business</li>
                        <li>Shop for Business</li>
                        <li>
                            <h5>For Education</h5>
                        </li>
                        <li>multi and Education</li>
                        <li>Shop for Education</li>
                        <li>Shop for University </li>
                        <li>
                            <h5>For Healthcare</h5>
                        </li>
                        <li>multi in Healthcare</li>
                        <li>Health on multi Watch</li>
                    </ul>
                </div>
                <div class="footer">
                    <ul>
                        <li>
                            <h5>multi Values</h5>
                        </li>
                        <li>Accessibility</li>
                        <li>Education</li>
                        <li>Environment</li>
                        <li>Privacy</li>
                        <li>Supply Chain</li>
                        <li>
                            <h5>About multi</h5>
                        </li>
                        <li>Newsroom</li>
                        <li>multi Leadership</li>
                        <li>Career Opportunities</li>
                        <li>Investors</li>
                        <li>Ethics & Compliance</li>
                        <li>Events</li>
                        <li>Contact multi</li>
                    </ul>
                </div>
            </div>
            <div class="f-line">
                <p>More ways to shop: <a href=""> Find an multi Store</a> or <a href=""> other retailer </a> near you.
                    Or call 000800 040 1966.
                </p>
                <hr>
            </div>
            <div class="f-nav">
                <div class="footer-menu">
                    <ol>
                        <li>Copyright © 2024 multi Inc. All rights reserved.</li>
                        <li>Privacy Policy</li>
                        <li>|</li>
                        <li> Terms of Use</li>
                        <li>|</li>
                        <li>Sales Policy</li>
                        <li>|</li>
                        <li> Legal</li>
                        <li>|</li>
                        <li>Site Map</li>
                    </ol>
                </div>
            </div>
        </footer>
        `
    }
}


class SpecialHeader1 extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar">
            <div class="logo">
                <img src="./assets/No Background 1.png" alt="">
                <h1>Multi</h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="text" placeholder="Search">
            <div class="select">
                <select name="" id="">Download App
                    <option value="">Download Form</option>
                    <option value="">Android</option>
                    <option value="">multi</option>
                </select>
            </div>
            <div class="icon">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-cart" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <h6>Cart</h6>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                    <h6>Profile</h6>
                </div>
            </div>
        </nav>
        `
    }
}


class SpecialHeader2 extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
             <nav class="navbar2">
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="./womenethenic.html" class="drop-btn">Women Ethnic</a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h3>Boys & Girls 2+ Years</h3>
                            <a href="#">Dresses</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Infant 0-2 Years</h3>
                            <a href="#">Rompers</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Toys & Accessories</h3>
                            <a href="#">Soft Toys</a>
                            <a href="#">Footwear</a>
                            <a href="#">Stationery</a>
                            <a href="#">Watches</a>
                            <a href="#">Bags & Backpacks</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Baby Care</h3>
                            <a href="#">All Baby Care</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="./womenwestern.html" class="drop-btn">Women Western</a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h3>Boys & Girls 2+ Years</h3>
                            <a href="#">Dresses</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Infant 0-2 Years</h3>
                            <a href="#">Rompers</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Toys & Accessories</h3>
                            <a href="#">Soft Toys</a>
                            <a href="#">Footwear</a>
                            <a href="#">Stationery</a>
                            <a href="#">Watches</a>
                            <a href="#">Bags & Backpacks</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Baby Care</h3>
                            <a href="#">All Baby Care</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="./men.html" class="drop-btn">Men</a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h3>Boys & Girls 2+ Years</h3>
                            <a href="#">Dresses</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Infant 0-2 Years</h3>
                            <a href="#">Rompers</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Toys & Accessories</h3>
                            <a href="#">Soft Toys</a>
                            <a href="#">Footwear</a>
                            <a href="#">Stationery</a>
                            <a href="#">Watches</a>
                            <a href="#">Bags & Backpacks</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Baby Care</h3>
                            <a href="#">All Baby Care</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="./kids.html" class="drop-btn">Kids</a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h3>Boys & Girls 2+ Years</h3>
                            <a href="#">Dresses</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Infant 0-2 Years</h3>
                            <a href="#">Rompers</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Toys & Accessories</h3>
                            <a href="#">Soft Toys</a>
                            <a href="#">Footwear</a>
                            <a href="#">Stationery</a>
                            <a href="#">Watches</a>
                            <a href="#">Bags & Backpacks</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Baby Care</h3>
                            <a href="#">All Baby Care</a>
                        </div>
                    </div>
                </li>

                <li class="nav-item">
                    <a href="./home.html" class="drop-btn">Home & Kitchen</a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h3>Boys & Girls 2+ Years</h3>
                            <a href="#">Dresses</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Infant 0-2 Years</h3>
                            <a href="#">Rompers</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Toys & Accessories</h3>
                            <a href="#">Soft Toys</a>
                            <a href="#">Footwear</a>
                            <a href="#">Stationery</a>
                            <a href="#">Watches</a>
                            <a href="#">Bags & Backpacks</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Baby Care</h3>
                            <a href="#">All Baby Care</a>
                        </div>
                    </div>

                </li>
                <li class="nav-item">
                    <a href="./beauty.html" class="drop-btn">Beauty & Health</a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h3>Boys & Girls 2+ Years</h3>
                            <a href="#">Dresses</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Infant 0-2 Years</h3>
                            <a href="#">Rompers</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Toys & Accessories</h3>
                            <a href="#">Soft Toys</a>
                            <a href="#">Footwear</a>
                            <a href="#">Stationery</a>
                            <a href="#">Watches</a>
                            <a href="#">Bags & Backpacks</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Baby Care</h3>
                            <a href="#">All Baby Care</a>
                        </div>
                    </div>
                </li>
            </ul>
            <a href="./aboutus.html">About us</a>
            <a href="./contact.html">contact Us</a>
        </nav>
        `
    }
}


customElements.define('special-footer',SpecialFooter)
customElements.define('special-header1',SpecialHeader1)
customElements.define('special-header2',SpecialHeader2)


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
    window.location.assign("./buy.html")

})
