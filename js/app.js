// Static data for locations (city and store details)
const cityLocations = {
    'berlin': [
        {
            name: 'CandyWorld Alexanderplatz',
            address: 'Alexanderplatz 1, 10178 Berlin',
            maps: 'https://www.google.com/maps/dir//Alexanderplatz+Berlin'
        },
        {
            name: 'CandyWorld Kudamm',
            address: 'Kurfürstendamm 100, 10709 Berlin',
            maps: 'https://www.google.com/maps/dir//Kurfürstendamm+Berlin'
        }
    ],
    'hamburg': [
        {
            name: 'CandyWorld HafenCity',
            address: 'Überseeallee 10, 20457 Hamburg',
            maps: 'https://www.google.com/maps/dir//HafenCity+Hamburg'
        },
        {
            name: 'CandyWorld Mönckebergstraße',
            address: 'Mönckebergstraße 5, 20095 Hamburg',
            maps: 'https://www.google.com/maps/dir//Mönckebergstraße+Hamburg'
        }
    ],
    'münchen': [
        {
            name: 'CandyWorld Marienplatz',
            address: 'Marienplatz 1, 80331 München',
            maps: 'https://www.google.com/maps/dir//Marienplatz+München'
        }
    ]
};

// Function to display search results based on user input
function displaySearchResults() {
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (cityLocations[searchTerm]) {
        const locations = cityLocations[searchTerm];
        locations.forEach(location => {
            const locationCard = document.createElement('div');
            locationCard.className = 'location-card';
            locationCard.innerHTML = `
                <h3>${location.name}</h3>
                <p>${location.address}</p>
                <a href="${location.maps}" target="_blank" class="directions-btn">Route planen</a>
            `;
            resultsContainer.appendChild(locationCard);
        });
    } else {
        resultsContainer.innerHTML = `<p style="color:white; text-align:center;">Keine Standorte gefunden</p>`;
    }
}

// Event listener for search input field
document.querySelector('.search-input').addEventListener('input', displaySearchResults);

// Populate results with a default location when the page loads
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.search-input').value = 'hamburg';
    displaySearchResults();
});

// Burger Menu Toggle
const burger = document.querySelector('.burger');
const menuItems = document.querySelector('.menu-items');

burger.addEventListener('click', function() {
    menuItems.classList.toggle('active');
    burger.textContent = menuItems.classList.contains('active') ? '×' : '☰';
});

document.addEventListener('click', (event) => {
    if (!burger.contains(event.target) && !menuItems.contains(event.target)) {
        menuItems.classList.remove('active');
        burger.textContent = '☰';
    }
});
