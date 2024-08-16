document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');

    // Example products
    const products = [
        { name: 'Luxury Suite', description: 'Experience unparalleled luxury with our top-tier suites, featuring stunning views and premium amenities.', price: 'Rs3500/night' },
        { name: 'Deluxe Room', description: 'Our deluxe rooms offer a perfect blend of comfort and style, ideal for both leisure and business travelers.', price: 'Rs2500/night' },
        { name: 'Standard Room', description: 'Comfortable and convenient, our standard rooms provide all the essentials for a pleasant stay.', price: 'Rs1000/night' }
    ];

    // Function to generate product cards
    function displayProducts() {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
            `;
            
            productList.appendChild(productCard);
        });
    }

    // Call the function to display products
    displayProducts();
});
